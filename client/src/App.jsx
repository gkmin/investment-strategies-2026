import { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Nav from './components/Nav.jsx';
import CategorySection from './components/CategorySection.jsx';
import Sources from './components/Sources.jsx';
import Chat from './components/Chat.jsx';
import { CATEGORIES } from './data/investments.js';

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/api/me')
      .then(r => r.json())
      .then(d => setUser(d.user))
      .catch(() => {});
  }, []);

  return (
    <>
      <Header />
      <Nav />
      <main>
        {CATEGORIES.map((cat, i) => (
          <CategorySection
            key={cat.id}
            category={cat}
            isLast={i === CATEGORIES.length - 1}
          />
        ))}
        <Sources />
      </main>
      <footer>
        <strong>Investment Strategies 2026</strong> — For informational purposes only. Not financial advice.
        Always consult a qualified financial advisor before making investment decisions.
      </footer>
      <Chat user={user} onUserChange={setUser} />
    </>
  );
}
