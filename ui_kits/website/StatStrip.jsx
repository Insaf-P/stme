function StatStrip() {
  const items = [
    { num: '35+',  label: 'Years delivering enterprise IT' },
    { num: '400+', label: 'Enterprise customers served' },
    { num: '120+', label: 'Qualified staff across 8 markets' },
    { num: <><em>24/7</em></>, label: 'Regional support coverage' },
  ];
  return (
    <div className="stats">
      {items.map((s, i) => (
        <div className="stat" key={i}>
          <div className="stat__num">{s.num}</div>
          <div className="stat__label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
window.StatStrip = StatStrip;
