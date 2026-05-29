function InsightArticle({ insight, onBack, onNavigate }) {
  const art = insight || { d: '18', m: 'May', y: '2026', type: 'Note', title: 'Why GCC banks are rebuilding their backup estates.', id: 'gcc-banks-backup' };
  const sections = ['Background', 'What changed', 'Architecture', 'What to do next'];
  const [active, setActive] = useState(sections[0]);

  const related = [
    { id: 'sama-circular',  type: 'Brief',          title: 'SAMA circular on cloud: what it means for your DR strategy.' },
    { id: 'exchange-rpo',   type: 'Customer story',  title: 'A regional exchange cuts RPO from 4 hours to 15 minutes.' },
    { id: 'tape-2026',      type: 'Note',            title: 'The case for tape in 2026.' },
  ];

  return (
    <main>
      <section className="page-hero" style={{ paddingBottom: 64 }}>
        <div className="page-hero__inner">
          <div className="crumbs">
            <a href="#" onClick={(e) => { e.preventDefault(); onBack(); }} className="uline">Insights</a>
            <span>/</span>
            <span style={{ color: 'var(--ink)' }}>{art.type}</span>
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'baseline', fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--mute)', marginTop: 32, marginBottom: 16 }}>
            <span>{art.d} {art.m} {art.y}</span>
            <span>·</span>
            <span>{art.type}</span>
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 4.5vw, 52px)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.05, maxWidth: '22ch', textWrap: 'balance', marginTop: 0 }}>{art.title}</h1>
        </div>
      </section>

      <div className="article-hero-img" style={{ backgroundImage: `url(${art.img || 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=2000&q=80'})` }}></div>

      <div className="article-wrap">
        <div className="article-layout">
          <aside className="article-sidebar">
            <div className="eyebrow-row">On this page</div>
            <ul className="aside-toc">
              {sections.map((sec) => (
                <li key={sec} className={sec === active ? 'active' : ''} onClick={() => { setActive(sec); stmeScrollTo(stmeSlug(sec)); }}>{sec}</li>
              ))}
            </ul>
          </aside>

          <div className="article-body">
            <h2 id={stmeSlug('Background')}>Background</h2>
            <p>Across the GCC, enterprise backup infrastructure is at an inflection point. The tape-centric reference architectures deployed in the mid-2010s — designed for weekly full backups and 24-hour RTOs — are no longer compatible with the operating standards that regulators and boards now require.</p>
            <p>SAMA's circular on business continuity, CBUAE's operational resilience guidance, and BMA's DR requirements all reference sub-four-hour RTOs for tier-one systems. For most banks in the region, this is not what their current backup estate was designed to achieve.</p>
            <div className="callout">
              Tape estates designed for 24-hour RTOs are not compatible with modern regulatory standards across KSA, UAE, or Bahrain. The question is not whether to modernize — it is how to sequence it without disrupting live operations.
            </div>

            <h2 id={stmeSlug('What changed')}>What changed</h2>
            <p>Three converging pressures are driving the rebuild cycle:</p>
            <ul>
              <li>Regulatory tightening — SAMA, CBUAE, and BMA have all updated their DR and resilience guidance in the past 18 months</li>
              <li>All-flash primary storage — the switch from spinning disk to flash at the primary tier creates performance gaps at the backup tier that legacy tape schedulers cannot bridge</li>
              <li>Ransomware — immutable backup targets are now a baseline expectation, not an advanced feature</li>
            </ul>
            <p>The third pressure is the one most organizations underestimate. An immutable backup target that is not air-gapped, or that lacks replication to a secondary site, satisfies the checkbox but not the actual threat model.</p>

            <h2 id={stmeSlug('Architecture')}>Architecture</h2>
            <p>The reference architecture STME is deploying for GCC banks in 2025–2026 follows a three-tier model:</p>
            <ul>
              <li>Tier 1 — Disk-based backup target (Veritas NetBackup with immutable storage) at the primary data center, enabling sub-15-minute RPO for tier-one applications</li>
              <li>Tier 2 — Replicated disk target at a secondary site, providing the DR foundation for a 4-hour RTO commitment</li>
              <li>Tier 3 — Air-gapped tape archive (Quantum Scalar or Spectra Logic) for long-term retention and ransomware isolation</li>
            </ul>
            <div className="article-mono">
              <div>primary  →  Veritas NetBackup  →  immutable disk  (Tier 1)</div>
              <div>                                         ↓  replicate</div>
              <div>secondary site  →  disk target          (Tier 2)</div>
              <div>                                         ↓  periodic transfer</div>
              <div>air-gap  →  tape library                (Tier 3 / ransomware isolation)</div>
            </div>
            <p>Each layer maps directly to a regulatory commitment. Tier 1 satisfies the intra-day recovery requirement. Tier 2 satisfies the DR site mandate. Tier 3 satisfies the long-term retention and ransomware isolation requirement.</p>

            <h2 id={stmeSlug('What to do next')}>What to do next</h2>
            <p>If your organization is running a backup estate that was designed before 2020, the starting point is an independent assessment against the current regulatory framework for your jurisdiction. STME conducts these assessments at no cost for existing infrastructure — typically a two-week engagement producing a gap analysis and architecture recommendation.</p>
            <p>The assessment output is a document your internal team can own and present to the regulator. It is not a sales document.</p>

            <div className="article-related">
              {related.map((r) => (
                <div className="article-related-item" key={r.id} onClick={() => onNavigate('insight', r)}>
                  <div className="article-related-item__meta">{r.type}</div>
                  <h4>{r.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
window.InsightArticle = InsightArticle;
