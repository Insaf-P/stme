function ContactPage({ onNavigate }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', company: '', title: '', country: '', email: '', phone: '', interest: '', message: '' });
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const interests = ['Storage & data management', 'Network & data security', 'Cloud & virtualization', 'Professional services', 'Managed services & support', 'Careers', 'Partnership enquiry', 'Other'];

  const offices = [
    { region: 'Kingdom of Saudi Arabia', cities: [
      { city: 'Riyadh',     addr: 'King Fahd Rd, Olaya District, Riyadh',          phone: '+966 11 461 0006', email: 'riyadh@stme.com',    map: 'https://maps.google.com/?q=King+Fahd+Road+Olaya+Riyadh+Saudi+Arabia' },
      { city: 'Jeddah',     addr: 'Al Madinah Rd, Al Andalus, Jeddah',              phone: '+966 12 668 0006', email: 'jeddah@stme.com',    map: 'https://maps.google.com/?q=Al+Madinah+Road+Al+Andalus+Jeddah+Saudi+Arabia' },
      { city: 'Al Khobar',  addr: 'King Faisal St, Al Aqrabia, Al Khobar',         phone: '+966 13 882 0006', email: 'khobar@stme.com',    map: 'https://maps.google.com/?q=King+Faisal+Street+Al+Aqrabia+Al+Khobar+Saudi+Arabia' },
    ]},
    { region: 'United Arab Emirates', cities: [
      { city: 'Dubai',      addr: 'Sheikh Zayed Rd, Trade Centre 1, Dubai',         phone: '+971 4 397 0006', email: 'dubai@stme.com',      map: 'https://maps.google.com/?q=Sheikh+Zayed+Road+Trade+Centre+Dubai+UAE' },
      { city: 'Abu Dhabi',  addr: 'Corniche Rd, Al Markaziyah, Abu Dhabi',          phone: '+971 2 627 0006', email: 'abudhabi@stme.com',   map: 'https://maps.google.com/?q=Corniche+Road+Al+Markaziyah+Abu+Dhabi+UAE' },
    ]},
    { region: 'Bahrain', cities: [
      { city: 'Manama',     addr: 'Diplomatic Area, Building 218, Manama',          phone: '+973 17 530 006',  email: 'bahrain@stme.com',   map: 'https://maps.google.com/?q=Diplomatic+Area+Manama+Bahrain' },
    ]},
    { region: 'Egypt', cities: [
      { city: 'Cairo',      addr: 'Nile Corniche, Maadi, Cairo',                    phone: '+20 2 252 0006',   email: 'egypt@stme.com',     map: 'https://maps.google.com/?q=Nile+Corniche+Maadi+Cairo+Egypt' },
    ]},
    { region: 'Kuwait', cities: [
      { city: 'Kuwait City', addr: 'Al Sour St, Salhiya, Kuwait City',              phone: '+965 2245 0006',  email: 'kuwait@stme.com',     map: 'https://maps.google.com/?q=Al+Sour+Street+Salhiya+Kuwait+City' },
    ]},
    { region: 'Jordan', cities: [
      { city: 'Amman',      addr: 'Zahran St, Abdoun, Amman',                       phone: '+962 6 559 0006',  email: 'jordan@stme.com',    map: 'https://maps.google.com/?q=Zahran+Street+Abdoun+Amman+Jordan' },
    ]},
    { region: 'Pakistan', cities: [
      { city: 'Karachi',    addr: 'Shahrah-e-Faisal, Block 6, Karachi',             phone: '+92 21 343 0006',  email: 'pakistan@stme.com',  map: 'https://maps.google.com/?q=Shahrah-e-Faisal+Block+6+Karachi+Pakistan' },
    ]},
    { region: 'United Kingdom', cities: [
      { city: 'London',     addr: 'Cannon Street, EC4N, London',                    phone: '+44 20 7283 0006', email: 'london@stme.com',    map: 'https://maps.google.com/?q=Cannon+Street+EC4N+London+UK' },
    ]},
  ];

  return (
    <main>
      <section className="page-hero page-hero--split">
        <div className="page-hero__inner">
          <div className="page-hero__text">
            <div className="eyebrow-row">Contact</div>
            <h1>Get in touch<br />with STME.</h1>
            <p className="page-hero__sub">Whether you have an infrastructure project, a support question, or a partnership enquiry — the right team is ready to respond.</p>
            <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14, color: 'var(--mute)' }}>
              <div><strong style={{ color: 'var(--ink)', display: 'block', marginBottom: 2 }}>24/7 Support</strong>KSA: 800 246 0006 &nbsp;·&nbsp; UAE: 800 8810</div>
              <div><strong style={{ color: 'var(--ink)', display: 'block', marginBottom: 2 }}>Email</strong>supportline@stme.com</div>
            </div>
          </div>
          <div className="page-hero__side-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80')" }}></div>
        </div>
      </section>

      {/* Contact form */}
      <section className="section">
        <div className="section__inner">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>

            {/* Left: form */}
            <div>
              <div className="eyebrow-row" style={{ marginBottom: 32 }}>Send a message</div>
              {sent ? (
                <div style={{ padding: '48px 40px', background: 'var(--soft)', border: '1px solid var(--hairline)', textAlign: 'center' }}>
                  <div style={{ fontSize: 32, fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 12 }}>Message received.</div>
                  <p style={{ color: 'var(--mute)', fontSize: 16, lineHeight: 1.6, marginBottom: 24 }}>A member of the STME team will be in touch within one business day.</p>
                  <button className="btn btn--primary" onClick={() => setSent(false)}>Send another message <Icon name="arrow" size={14} /></button>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div className="field">
                      <label>Full name *</label>
                      <input placeholder="Ahmed Al-Rashid" value={form.name} onChange={(e) => set('name', e.target.value)} required />
                    </div>
                    <div className="field">
                      <label>Company *</label>
                      <input placeholder="National Bank of..." value={form.company} onChange={(e) => set('company', e.target.value)} required />
                    </div>
                    <div className="field">
                      <label>Job title</label>
                      <input placeholder="Head of IT Infrastructure" value={form.title} onChange={(e) => set('title', e.target.value)} />
                    </div>
                    <div className="field">
                      <label>Country</label>
                      <select value={form.country} onChange={(e) => set('country', e.target.value)}>
                        <option value="">Select country</option>
                        {['Saudi Arabia', 'United Arab Emirates', 'Bahrain', 'Egypt', 'Kuwait', 'Jordan', 'Pakistan', 'United Kingdom', 'Other'].map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                    <div className="field">
                      <label>Email *</label>
                      <input type="email" placeholder="ahmed@company.com" value={form.email} onChange={(e) => set('email', e.target.value)} required />
                    </div>
                    <div className="field">
                      <label>Phone</label>
                      <input type="tel" placeholder="+966 11..." value={form.phone} onChange={(e) => set('phone', e.target.value)} />
                    </div>
                  </div>
                  <div className="field">
                    <label>Area of interest</label>
                    <select value={form.interest} onChange={(e) => set('interest', e.target.value)}>
                      <option value="">Select topic</option>
                      {interests.map((i) => <option key={i} value={i}>{i}</option>)}
                    </select>
                  </div>
                  <div className="field">
                    <label>Message</label>
                    <textarea placeholder="Describe your project or question..." rows={5} value={form.message} onChange={(e) => set('message', e.target.value)} />
                  </div>
                  <button type="submit" className="btn btn--primary" style={{ alignSelf: 'flex-start' }}>
                    Send message <Icon name="arrow" size={14} />
                  </button>
                </form>
              )}
            </div>

            {/* Right: support info */}
            <div style={{ paddingTop: 56, borderTop: '1px solid var(--hairline)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
                <div>
                  <div className="eyebrow-row" style={{ marginBottom: 20 }}>24/7 Support lines</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {[['KSA', '800 246 0006'], ['UAE', '800 8810'], ['Email', 'supportline@stme.com']].map(([label, val]) => (
                      <div key={label} style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 0', borderBottom: '1px solid var(--hairline)', fontSize: 15 }}>
                        <span style={{ color: 'var(--mute)', fontWeight: 500 }}>{label}</span>
                        <span style={{ fontWeight: 600, fontFamily: label === 'Email' ? 'inherit' : 'var(--font-mono)' }}>{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="eyebrow-row" style={{ marginBottom: 20 }}>Support portal</div>
                  <p style={{ fontSize: 14, color: 'var(--mute)', lineHeight: 1.6, marginBottom: 16 }}>Existing customers can log, track, and manage support requests through the STME Support Portal.</p>
                  <a href="http://support.stme.com/support/login" target="_blank" rel="noopener noreferrer" className="btn btn--secondary" style={{ display: 'inline-flex' }}>
                    Access support portal <Icon name="arrow" size={13} />
                  </a>
                </div>
                <div>
                  <div className="eyebrow-row" style={{ marginBottom: 20 }}>Follow STME</div>
                  <div style={{ display: 'flex', gap: 16 }}>
                    {[['LinkedIn', 'https://www.linkedin.com/company/stme'], ['Twitter', 'https://twitter.com/STMELtd'], ['Facebook', 'https://www.facebook.com/STMELtd/']].map(([name, url]) => (
                      <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="btn btn--secondary" style={{ padding: '10px 16px', fontSize: 13 }}>{name}</a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office locations */}
      <section className="section section--soft">
        <div className="section__inner">
          <div className="section__head">
            <div>
              <div className="eyebrow-row">Offices</div>
              <h2>Eight markets. Find your local team.</h2>
            </div>
            <p>STME operates from offices across KSA, UAE, Bahrain, Egypt, Kuwait, Jordan, Pakistan, and the United Kingdom.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderTop: '1px solid var(--hairline)', borderLeft: '1px solid var(--hairline)' }}>
            {offices.map((o) => (
              <div key={o.region} style={{ borderRight: '1px solid var(--hairline)', borderBottom: '1px solid var(--hairline)', padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--orange)', fontFamily: 'var(--font-mono)' }}>{o.region}</div>
                {o.cities.map((c) => (
                  <div key={c.city} style={{ display: 'flex', flexDirection: 'column', gap: 6, paddingTop: 4, borderTop: '1px solid var(--hairline)' }}>
                    <div style={{ fontWeight: 700, fontSize: 16, letterSpacing: '-0.01em' }}>{c.city}</div>
                    <div style={{ fontSize: 13, color: 'var(--mute)', lineHeight: 1.5 }}>{c.addr}</div>
                    <div style={{ fontSize: 12, color: 'var(--ink)', fontFamily: 'var(--font-mono)' }}>{c.phone}</div>
                    <a href={c.map} target="_blank" rel="noopener noreferrer"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 600, color: 'var(--orange)', textDecoration: 'none', marginTop: 4 }}
                      onMouseEnter={(e) => e.currentTarget.style.opacity = '0.75'}
                      onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                      <Icon name="arrow" size={12} /> View on Map
                    </a>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
window.ContactPage = ContactPage;
