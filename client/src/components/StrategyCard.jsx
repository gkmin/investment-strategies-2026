export default function StrategyCard({ card }) {
  const { tag, title, body, bodyHighlight, bullets, risk, returnPct,
          returnLabel = 'Return Potential', statVal, statDesc, wide, twoCol, col1, col2 } = card;

  if (twoCol) {
    return (
      <div className="card wide">
        <div className="card-tag">{tag}</div>
        <h3>{title}</h3>
        <div className="two-col">
          <div>
            {col1.intro && <p style={{ marginBottom: 10 }}>{col1.intro}</p>}
            <ul>
              {col1.items.map((item, i) => (
                <li key={i}>
                  {typeof item === 'string' ? item : (
                    <><strong style={{ color: 'var(--cat-color)' }}>{item.label}</strong>{item.detail}</>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            {col2.intro && <p style={{ marginBottom: 10 }}>{col2.intro}</p>}
            <ul>{col2.items.map((item, i) => <li key={i}>{item}</li>)}</ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`card${wide ? ' wide' : ''}`}>
      <div className="card-tag">{tag}</div>
      <h3>{title}</h3>

      {bodyHighlight ? (
        <p><strong style={{ color: 'var(--cat-color)' }}>{bodyHighlight}</strong>{' '}{body}</p>
      ) : body ? (
        <p>{body}</p>
      ) : null}

      {bullets?.length > 0 && (
        <ul>
          {bullets.map((b, i) => (
            <li key={i}>
              {typeof b === 'string' ? b : (
                <><strong style={{ color: 'var(--cat-color)' }}>{b.label}</strong>{b.detail}</>
              )}
            </li>
          ))}
        </ul>
      )}

      {(risk !== undefined || returnPct !== undefined) && (
        <div className="metrics">
          {risk !== undefined && (
            <div className="metric">
              <div className="metric-label">Risk</div>
              <div className="bar-track">
                <div className="bar-fill" style={{ width: `${risk}%`, background: 'var(--accent-blue)' }} />
              </div>
            </div>
          )}
          {returnPct !== undefined && (
            <div className="metric">
              <div className="metric-label">{returnLabel}</div>
              <div className="bar-track">
                <div className="bar-fill" style={{ width: `${returnPct}%`, background: 'var(--accent-green)' }} />
              </div>
            </div>
          )}
        </div>
      )}

      {statVal && (
        <div className="stat-box">
          <div className="stat-val">{statVal}</div>
          {statDesc && <div className="stat-desc">{statDesc}</div>}
        </div>
      )}
    </div>
  );
}
