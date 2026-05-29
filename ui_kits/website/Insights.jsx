function Insights({ onSelect }) {
  const items = [
    { id: 'gitex-2018',      d: '04', m: 'Nov', y: '2018', type: 'News',           img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80', title: 'STME concludes successful participation in GITEX Technology Week 2018.', body: 'STME participated in GITEX Technology Week 2018 in Dubai, showcasing the latest enterprise storage, security and cloud solutions for the GCC region.' },
    { id: 'stme-cloud-gdpr', d: '24', m: 'Jun', y: '2018', type: 'Product launch', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80', title: 'STME launches next-generation cloud solution for GDPR compliance.',        body: 'STME launched a next-generation cloud solution to support enterprises\' data exchange and GDPR compliance needs across the Middle East.' },
    { id: 'awards-2018',     d: '15', m: 'Jun', y: '2018', type: 'Award',          img: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600&q=80', title: 'STME wins 4 prestigious accolades to reinforce market leadership.',        body: 'STME was awarded four industry accolades recognizing its leadership in enterprise IT integration, data management, and security across the region.' },
  ];
  return (
    <div className="insights">
      {items.map((it) => (
        <article className="insight" key={it.id} onClick={() => onSelect && onSelect(it)} style={{ cursor: 'pointer' }}>
          {it.img && (
            <div className="insight__thumb" style={{ backgroundImage: `url(${it.img})` }}></div>
          )}
          <div className="insight__date">
            <strong>{it.d}</strong> <span>{it.m} {it.y}</span>
            <span style={{ marginLeft: 'auto' }}>{it.type}</span>
          </div>
          <h3>{it.title}</h3>
          <p>{it.body}</p>
          <span className="insight__more uline">Read more <Icon name="arrow" size={14} /></span>
        </article>
      ))}
    </div>
  );
}
window.Insights = Insights;
