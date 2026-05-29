function Industries({ onSelect }) {
  const items = [
    { id: 'public',    tag: 'Public sector',     title: 'Modernizing core government infrastructure.',   img: 'https://images.unsplash.com/photo-1541855492-581f618f69a0?w=1200&q=80' },
    { id: 'financial', tag: 'Financial services', title: 'Hardened data platforms for banks and exchanges.', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80' },
    { id: 'energy',    tag: 'Energy',             title: 'Edge-to-core systems for upstream operations.',  img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&q=80' },
  ];
  return (
    <div className="industries">
      {items.map((it, i) => (
        <button className="industry" key={it.id} onClick={() => onSelect && onSelect(it)}>
          <div className="industry__img"><img src={it.img} alt="" /></div>
          <div className="industry__meta">0{i + 1} <span style={{ color: 'var(--ink)' }}>—</span> {it.tag}</div>
          <h3>{it.title}</h3>
        </button>
      ))}
    </div>
  );
}
window.Industries = Industries;
