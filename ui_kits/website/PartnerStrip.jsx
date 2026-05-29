function PartnerStrip() {
  const partners = ['Hitachi', 'NetApp', 'Veritas', 'Cisco', 'VMware', 'Quantum', 'Spectra Logic', 'Palo Alto', 'Fortinet', 'Veeam'];
  return (
    <div className="partners" style={{ gridTemplateColumns: `repeat(${partners.length}, 1fr)` }}>
      {partners.map((p) => (
        <div className="partner" key={p}>{p}</div>
      ))}
    </div>
  );
}
window.PartnerStrip = PartnerStrip;
