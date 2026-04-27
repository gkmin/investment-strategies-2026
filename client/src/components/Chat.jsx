import { useState, useEffect, useRef, useCallback } from 'react';

const CHIPS = ['Best stocks for 2026?', 'How to start investing?', 'ETF vs mutual fund?', 'Is gold a good hedge?', 'Crypto risk management?'];

function md(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code style="background:rgba(255,255,255,.1);padding:1px 5px;border-radius:4px;font-size:.82em;font-family:monospace">$1</code>')
    .replace(/\n/g, '<br>');
}

export default function Chat({ user, onUserChange }) {
  const [isOpen, setIsOpen]     = useState(false);
  const [messages, setMessages] = useState([]);   // { id, role, content }
  const [history, setHistory]   = useState([]);   // for API: { role, content }
  const [input, setInput]       = useState('');
  const [streaming, setStreaming] = useState(false);
  const [loadingHistory, setLoadingHistory] = useState(false);
  const messagesEndRef = useRef(null);
  const textareaRef    = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Load chat history from DB whenever user signs in
  useEffect(() => {
    if (!user) {
      setMessages([]);
      setHistory([]);
      return;
    }

    setLoadingHistory(true);
    fetch('/api/history')
      .then(r => r.json())
      .then(({ messages: hist }) => {
        if (!hist || hist.length === 0) {
          setMessages([{
            id: 0,
            role: 'assistant',
            content: `Hi **${user.name || user.login}**! I'm your Investment AI assistant. Ask me anything about stocks, real estate, bonds, crypto, commodities, or ETFs.`,
          }]);
          setHistory([]);
        } else {
          setHistory(hist);
          setMessages(hist.map((m, i) => ({ id: i, role: m.role, content: m.content })));
        }
      })
      .catch(() => {})
      .finally(() => setLoadingHistory(false));
  }, [user]);

  const clearChat = async () => {
    if (streaming) return;
    await fetch('/api/history', { method: 'DELETE' });
    setHistory([]);
    setMessages([{
      id: Date.now(),
      role: 'assistant',
      content: `History cleared. What would you like to know about investing?`,
    }]);
  };

  const sendMessage = useCallback(async (text) => {
    const msg = (text ?? input).trim();
    if (!msg || streaming) return;
    setInput('');
    if (textareaRef.current) { textareaRef.current.style.height = 'auto'; }

    const userMsgId = Date.now();
    setMessages(prev => [...prev, { id: userMsgId, role: 'user', content: msg }]);

    const newHistory = [...history, { role: 'user', content: msg }];
    setHistory(newHistory);
    setStreaming(true);

    const aiId = Date.now() + 1;
    setMessages(prev => [...prev, { id: aiId, role: 'assistant', content: '', isTyping: true }]);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newHistory, newUserMessage: msg }),
      });

      if (res.status === 401) { onUserChange(null); return; }

      setMessages(prev => prev.map(m => m.id === aiId ? { ...m, isTyping: false } : m));

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let aiText = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        for (const line of decoder.decode(value, { stream: true }).split('\n')) {
          if (!line.startsWith('data: ')) continue;
          const data = line.slice(6).trim();
          if (data === '[DONE]') break;
          try {
            const { text: t, error } = JSON.parse(data);
            if (error) throw new Error(error);
            if (t) {
              aiText += t;
              setMessages(prev => prev.map(m => m.id === aiId ? { ...m, content: aiText } : m));
            }
          } catch {}
        }
      }
      setHistory(prev => [...prev, { role: 'assistant', content: aiText }]);
    } catch {
      setMessages(prev => prev.map(m => m.id === aiId ? { ...m, content: 'Sorry, something went wrong. Please try again.', isTyping: false } : m));
    } finally {
      setStreaming(false);
      textareaRef.current?.focus();
    }
  }, [input, history, streaming, onUserChange]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  };

  const handleInput = (e) => {
    setInput(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = Math.min(e.target.scrollHeight, 80) + 'px';
  };

  const showChips = user && history.length === 0 && !loadingHistory;

  return (
    <>
      {/* Toggle button */}
      <button className="chat-toggle" onClick={() => setIsOpen(o => !o)} aria-label="Open AI assistant">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>

      {/* Chat panel */}
      <div className={`chat-panel${isOpen ? ' open' : ''}`}>

        {/* Header */}
        <div className="chat-header">
          <div className="chat-header-icon">🤖</div>
          <div>
            <div className="chat-header-title">Investment AI</div>
            <div className="chat-header-sub">Powered by Claude</div>
          </div>
          {user && (
            <div className="chat-user-info">
              <img className="chat-avatar" src={user.avatar} alt={user.login} />
              <span className="chat-username">{user.name || user.login}</span>
              <button className="chat-signout" onClick={() => { window.location.href = '/auth/logout'; }}>Sign out</button>
            </div>
          )}
          <button className="chat-close" onClick={() => setIsOpen(false)} aria-label="Close">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Auth screen */}
        {!user ? (
          <div className="chat-auth">
            <div className="auth-lock">🔐</div>
            <div className="auth-title">Sign in to chat</div>
            <div className="auth-desc">Ask your investment questions to an AI advisor. Sign in with GitHub to continue — your chat history is saved across sessions.</div>
            <a href="/auth/github" className="auth-github-btn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              Continue with GitHub
            </a>
          </div>
        ) : (
          <>
            {/* Messages */}
            <div className="chat-messages">
              {loadingHistory ? (
                <div className="chat-history-loading">Loading your chat history…</div>
              ) : (
                messages.map(msg => (
                  <div key={msg.id} className={`msg ${msg.role}`}>
                    {msg.role === 'assistant'
                      ? <div className="msg-ai-avatar">AI</div>
                      : <img className="msg-user-avatar" src={user.avatar} alt="you" />
                    }
                    <div className="msg-bubble">
                      {msg.isTyping ? (
                        <><span className="typing-dot"/><span className="typing-dot"/><span className="typing-dot"/></>
                      ) : (
                        <span dangerouslySetInnerHTML={{ __html: md(msg.content) }} />
                      )}
                    </div>
                  </div>
                ))
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested prompts */}
            {showChips && (
              <div className="chat-chips">
                {CHIPS.map(chip => (
                  <button key={chip} className="chat-chip" onClick={() => sendMessage(chip)}>{chip}</button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="chat-input-area">
              <button
                className="chat-clear"
                onClick={clearChat}
                disabled={streaming || history.length === 0}
                title="Clear chat history"
                aria-label="Clear chat history"
              >
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
              <textarea
                ref={textareaRef}
                className="chat-input"
                rows="1"
                placeholder="Ask about investment strategies..."
                value={input}
                onChange={handleInput}
                onKeyDown={handleKeyDown}
              />
              <button className="chat-send" onClick={() => sendMessage()} disabled={streaming || !input.trim()} aria-label="Send">
                <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.269 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
