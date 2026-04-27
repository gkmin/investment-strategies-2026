export default function Top5Table({ top5, tag = 'Top 5 Picks', title }) {
  const { col3, col4, rows } = top5;
  return (
    <div className="card wide">
      <div className="card-tag">{tag}</div>
      <h3>{title}</h3>
      <div style={{ marginTop: 14 }}>
        <table className="top5-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Ticker</th>
              <th>Name</th>
              <th>{col3}</th>
              <th>{col4}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td><span className="ticker-pill">{row.ticker}</span></td>
                <td>
                  <div className="t5-name">{row.name}</div>
                  <div className="t5-sub">{row.sub}</div>
                </td>
                <td><span className="t5-metric">{row.metric}</span></td>
                <td className="t5-note">{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
