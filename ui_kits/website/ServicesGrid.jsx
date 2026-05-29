function ServicesGrid({ onSelect }) {
  const services = [
    {
      num: '01', cat: 'Cloud',     icon: 'cloud',
      title: 'Cloud Infrastructure',
      body: 'Design and publish secure, flexible, and scalable cloud environments to enable organizations to expand and maintain full control over their data.',
      tags: ['Private Cloud', 'Hybrid Cloud'],
    },
    {
      num: '02', cat: 'Security',  icon: 'shield',
      title: 'Cybersecurity',
      body: 'Comprehensive solutions to protect your organization from cyber threats, including advanced protection, threat detection and response, vulnerability management, and compliance.',
      tags: ['IAM', 'SIEM', 'Firewall'],
    },
    {
      num: '03', cat: 'Storage',   icon: 'database',
      title: 'Storage Solutions',
      body: 'Enterprise storage solutions with integrated systems to store, manage, and protect data with high performance, scalability, and reliability.',
      tags: ['Cloud Storage', 'NAS', 'SAN'],
    },
    {
      num: '04', cat: 'AI & Data', icon: 'ai',
      title: 'Artificial Intelligence & Data',
      body: 'Solutions for advanced data analytics and artificial intelligence to help organizations make smarter decisions, improve operational efficiency, and support data-driven strategies.',
      tags: ['Analytics', 'Big Data', 'AI/ML'],
    },
    {
      num: '05', cat: 'Backup',    icon: 'hdd',
      title: 'Backup & Disaster Recovery',
      body: 'Comprehensive strategies to protect data and ensure business continuity, with fast recovery and minimal downtime in the event of any incident.',
      tags: ['Backup-as-a-Service', 'BCP', 'DR'],
    },
    {
      num: '06', cat: 'Networks',  icon: 'network',
      title: 'Enterprise Networks',
      body: 'Advanced SD-WAN and network solutions designed to deliver secure, reliable, and high-performance connectivity.',
      tags: ['5G', 'LAN/WAN', 'SD-WAN'],
    },
  ];
  return (
    <div className="services" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
      {services.map((s) => (
        <button className="service" key={s.num} onClick={() => onSelect && onSelect(s)}>
          <div className="service__num">
            <span>{s.num} / {s.cat}</span>
            <span className="arrow">↗</span>
          </div>
          <div className="service__icon">
            <Icon name={s.icon} size={32} />
          </div>
          <h3>{s.title}</h3>
          <p>{s.body}</p>
          <div className="service__tags">{s.tags.map((t) => <span key={t}>{t}</span>)}</div>
        </button>
      ))}
    </div>
  );
}
window.ServicesGrid = ServicesGrid;
