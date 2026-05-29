function ContactDrawer({ open, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const [sent, setSent] = useState(false);
  useEffect(() => { if (!open) setSent(false); }, [open]);

  return (
    <>
      <div className={`drawer-scrim ${open ? 'open' : ''}`} onClick={onClose} />
      <aside className={`drawer ${open ? 'open' : ''}`} aria-hidden={!open}>
        <div className="drawer__head">
          <div>
            <div className="eyebrow-row">Contact</div>
            <h2>Tell us what you&rsquo;re solving.</h2>
          </div>
          <button className="drawer__close" onClick={onClose} aria-label="Close">
            <Icon name="close" size={20} />
          </button>
        </div>
        {sent ? (
          <div className="drawer__body" style={{ justifyContent: 'center' }}>
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{ fontSize: 56, marginBottom: 12, color: 'var(--orange)' }}>→</div>
              <h3 style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-0.01em', marginBottom: 12 }}>Routed.</h3>
              <p style={{ color: 'var(--mute)', fontSize: 15, maxWidth: 360, margin: '0 auto' }}>A regional director will reach out within one business day. For urgent support, call the line below.</p>
            </div>
          </div>
        ) : (
          <>
            <form className="drawer__body" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <div className="field"><label>Full name</label><input required defaultValue="" placeholder="Ahmed Al-Saud" /></div>
              <div className="field"><label>Work email</label><input required type="email" placeholder="you@company.com" /></div>
              <div className="field"><label>Company</label><input placeholder="Company name" /></div>
              <div className="field"><label>Country</label>
                <select defaultValue="Saudi Arabia">
                  <option>Saudi Arabia</option><option>United Arab Emirates</option><option>Bahrain</option><option>Egypt</option><option>Kuwait</option><option>Jordan</option><option>Pakistan</option><option>United Kingdom</option><option>Other</option>
                </select>
              </div>
              <div className="field"><label>Interested in</label>
                <select defaultValue="Storage, backup & recovery">
                  <option>Storage, backup &amp; recovery</option><option>Network &amp; data security</option><option>Hybrid cloud platforms</option><option>Professional &amp; managed services</option><option>Not sure yet</option>
                </select>
              </div>
              <div className="field"><label>What are you solving?</label><textarea placeholder="A few lines about the project, scale, or timeline." /></div>
              <button type="submit" className="btn btn--primary" style={{ marginTop: 8, alignSelf: 'flex-start' }}>
                Send to sales <Icon name="arrow" size={14} />
              </button>
            </form>
            <div className="drawer__foot">
              <span className="meta">Urgent support · supportline@stme.com</span>
              <span className="meta">KSA 800 246 0006 · UAE 800 8810</span>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
window.ContactDrawer = ContactDrawer;
