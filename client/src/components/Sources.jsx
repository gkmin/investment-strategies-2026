import { SOURCES, CATEGORIES } from '../data/investments.js';

const COLOR_MAP = Object.fromEntries(CATEGORIES.map(c => [c.id, c.color]));

export default function Sources() {
  return (
    <div className="sources-section">
      <h2>Sources &amp; Further Reading</h2>
      <div className="sources-grid">
        {SOURCES.map((s, i) => (
          <a key={i} href={s.href} target="_blank" rel="noopener noreferrer">
            <span className="src-dot" style={{ background: COLOR_MAP[s.cat] }} />
            {s.label}
          </a>
        ))}
      </div>
    </div>
  );
}
