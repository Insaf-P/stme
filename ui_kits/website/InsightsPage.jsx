function InsightsPage({ onNavigate }) {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'News', 'Announcement', 'Product launch', 'Award', 'Case study'];

  const articles = [
    { id: 'gitex-2018',          d: '04', m: 'Nov', y: '2018', type: 'News',           img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80', title: 'STME concludes successful participation in GITEX Technology Week 2018.',                                     body: 'STME participated in GITEX Technology Week 2018 in Dubai, showcasing the latest enterprise storage, security and cloud solutions for the GCC region.' },
    { id: 'saudi-exports-gitex', d: '20', m: 'Sep', y: '2018', type: 'Announcement',   img: 'https://images.unsplash.com/photo-1578895101408-1a36b834405b?w=600&q=80', title: 'STME qualified by Saudi Exports to represent KSA in GITEX Technology 2018.',                              body: 'STME has been qualified by Saudi Exports to represent the Kingdom of Saudi Arabia in the 38th GITEX Technology Week in Dubai.' },
    { id: 'stme-cloud-gdpr',     d: '24', m: 'Jun', y: '2018', type: 'Product launch', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80', title: 'STME launches next-generation cloud solution for GDPR compliance.',                                        body: 'STME launched a next-generation cloud solution to support enterprises\' data exchange and GDPR compliance needs across the Middle East.' },
    { id: 'awards-2018',         d: '15', m: 'Jun', y: '2018', type: 'Award',          img: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600&q=80', title: 'STME wins 4 prestigious accolades to reinforce market leadership in the Middle East.',                    body: 'STME was awarded four industry accolades recognizing its leadership in enterprise IT integration, data management, and security across the region.' },
    { id: 'ingram-award',        d: '12', m: 'Dec', y: '2017', type: 'Award',          img: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600&q=80', title: 'STME wins Ingram Micro Highest Transacting Cyber Security Award.',                                        body: 'STME received the Ingram Micro Highest Transacting Cyber Security Award, recognizing outstanding performance in security solutions sales across the GCC.' },
    { id: 'si-of-year',          d: '18', m: 'Oct', y: '2017', type: 'Award',          img: 'https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?w=600&q=80', title: 'STME named System Integrator of the Year by ICT Achievement Awards 2017.',                               body: 'STME was named System Integrator of the Year at the ICT Achievement Awards 2017, recognizing excellence in enterprise IT integration across the region.' },
    { id: 'veritas-award',       d: '10', m: 'Sep', y: '2019', type: 'Award',          img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',    title: 'STME receives Veritas Customer Satisfaction Award 2019.',                                                  body: 'STME received the Veritas Customer Satisfaction Award for 2019, recognizing outstanding customer service delivery in data protection and archiving solutions.' },
    { id: 'iso-cert',            d: '01', m: 'Jan', y: '2000', type: 'Announcement',   img: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=600&q=80', title: 'STME becomes first IT company ISO 9001:2000 certified in the region.',                                    body: 'STME achieved ISO 9001:2000 certification, becoming the first IT company in the region to attain this standard — a commitment to quality that continues today.' },
    { id: 'founded',             d: '01', m: 'Jan', y: '1982', type: 'Announcement',   img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80', title: 'STME founded in Riyadh — delivering One Smart Solution to the region.',                                  body: 'Storage Technology Middle East was founded in the Kingdom of Saudi Arabia with a mission to bring enterprise IT solutions to the region with local expertise.' },
  ];

  const filtered = filter === 'All' ? articles : articles.filter((a) => a.type === filter);

  return (
    <main>
      <section className="page-hero">
        <div className="page-hero__inner">
          <div className="eyebrow-row">News &amp; updates</div>
          <h1>From the field.</h1>
          <p className="page-hero__sub">News, announcements, product launches, and awards from STME — a regional IT leader since 1982.</p>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <div className="filter-bar">
            {filters.map((f) => (
              <button key={f} className={`filter-btn ${filter === f ? 'is-active' : ''}`} onClick={() => setFilter(f)}>{f}</button>
            ))}
          </div>
          <div className="insight-grid">
            {filtered.map((art) => (
              <article className="insight-item" key={art.id} onClick={() => onNavigate('insight', art)}>
                {art.img && (
                  <div className="insight-item__thumb" style={{ backgroundImage: `url(${art.img})` }}></div>
                )}
                <div className="insight-item__meta">
                  <span>{art.d} {art.m} {art.y}</span>
                  <span>{art.type}</span>
                </div>
                <h3>{art.title}</h3>
                <p>{art.body}</p>
                <span className="insight-item__read uline">Read more <Icon name="arrow" size={13} /></span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
window.InsightsPage = InsightsPage;
