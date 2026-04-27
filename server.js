import 'dotenv/config';
import express from 'express';
import session from 'express-session';
import Anthropic from '@anthropic-ai/sdk';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

const {
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
  ANTHROPIC_API_KEY,
  SESSION_SECRET = 'inv-chat-secret-2026',
  PORT = 3000,
} = process.env;

app.use(express.json());
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { httpOnly: true, maxAge: 8 * 60 * 60 * 1000 },
}));
// Serve React build
const DIST = join(__dirname, 'client', 'dist');
app.use(express.static(DIST));

// ── GitHub OAuth ──────────────────────────────────────────────────────────────

app.get('/auth/github', (req, res) => {
  const params = new URLSearchParams({ client_id: GITHUB_CLIENT_ID, scope: 'read:user' });
  res.redirect(`https://github.com/login/oauth/authorize?${params}`);
});

app.get('/auth/github/callback', async (req, res) => {
  const { code } = req.query;
  if (!code) return res.redirect('/?error=no_code');

  try {
    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({ client_id: GITHUB_CLIENT_ID, client_secret: GITHUB_CLIENT_SECRET, code }),
    });
    const { access_token, error } = await tokenRes.json();
    if (error || !access_token) return res.redirect('/?error=token_failed');

    const userRes = await fetch('https://api.github.com/user', {
      headers: { Authorization: `Bearer ${access_token}` },
    });
    const u = await userRes.json();

    req.session.user = { id: u.id, login: u.login, name: u.name || u.login, avatar: u.avatar_url };
    res.redirect('/');
  } catch {
    res.redirect('/?error=auth_failed');
  }
});

app.get('/auth/logout', (req, res) => {
  req.session.destroy(() => res.redirect('/'));
});

app.get('/api/me', (req, res) => {
  res.json({ user: req.session.user ?? null });
});

// ── AI Chat ───────────────────────────────────────────────────────────────────

const anthropic = new Anthropic({ apiKey: ANTHROPIC_API_KEY });

const SYSTEM_PROMPT = `You are an expert investment advisor AI embedded in a 2026 investment strategies website.
Help users understand investment strategies across stocks, real estate, bonds, cryptocurrency, commodities, and ETFs.
Provide clear, educational answers about asset allocation, risk management, portfolio construction, and market trends for 2026.
Be concise and actionable. Use bullet points where helpful. Format numbers clearly.
Always end responses with a brief reminder that your information is for educational purposes and users should consult a qualified financial advisor before making investment decisions.`;

app.post('/api/chat', async (req, res) => {
  if (!req.session.user) return res.status(401).json({ error: 'Sign in required' });

  const { messages } = req.body;
  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'messages array required' });
  }

  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  try {
    const stream = await anthropic.messages.stream({
      model: 'claude-sonnet-4-6',
      max_tokens: 1024,
      system: [{ type: 'text', text: SYSTEM_PROMPT, cache_control: { type: 'ephemeral' } }],
      messages,
    });

    for await (const chunk of stream) {
      if (chunk.type === 'content_block_delta' && chunk.delta.type === 'text_delta') {
        res.write(`data: ${JSON.stringify({ text: chunk.delta.text })}\n\n`);
      }
    }
    res.write('data: [DONE]\n\n');
  } catch (err) {
    res.write(`data: ${JSON.stringify({ error: err.message })}\n\n`);
  }
  res.end();
});

// SPA catch-all — must be after all API/auth routes
app.get('*', (req, res) => {
  res.sendFile(join(DIST, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`\n  Investment Strategies 2026`);
  console.log(`  http://localhost:${PORT}\n`);
});
