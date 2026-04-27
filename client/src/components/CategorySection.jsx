import StrategyCard from './StrategyCard.jsx';
import Top5Table from './Top5Table.jsx';

export default function CategorySection({ category, isLast }) {
  const { id, icon, title, subtitle, color, rgb, cards, top5, extraWide } = category;

  const top5Title = `Top 5 ${title.split(' ')[0] === 'Cryptocurrency' ? 'Cryptos' : title.split(' ')[0]} to ${top5.col4 === 'Why Hold' ? 'Hold' : 'Buy'} in 2026`;

  return (
    <>
      <section
        className="category"
        id={id}
        style={{ '--cat-color': color, '--cat-rgb': rgb }}
      >
        <div className="category-header">
          <div className="cat-icon">{icon}</div>
          <div>
            <h2>{title}</h2>
            <div className="subtitle">{subtitle}</div>
          </div>
        </div>

        <div className="cards">
          {cards.map((card, i) => <StrategyCard key={i} card={card} />)}

          <Top5Table top5={top5} title={top5Title} />

          {extraWide && (
            <StrategyCard card={{ ...extraWide, twoCol: true, col1: extraWide.col1, col2: extraWide.col2 }} />
          )}
        </div>
      </section>

      {!isLast && <div className="divider" />}
    </>
  );
}
