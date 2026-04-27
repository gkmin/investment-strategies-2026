import { CATEGORIES } from '../data/investments.js';

export default function Nav() {
  return (
    <nav>
      {CATEGORIES.map(cat => (
        <a
          key={cat.id}
          href={`#${cat.id}`}
          className="nav-pill"
          style={{ '--nav-color': cat.color, '--nav-rgb': cat.rgb }}
        >
          {cat.navLabel}
        </a>
      ))}
    </nav>
  );
}
