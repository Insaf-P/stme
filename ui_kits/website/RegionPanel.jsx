function RegionPanel() {
  const regions = {
    'Saudi Arabia': [
      { city: 'Riyadh', addr: 'King Fahd Rd, Olaya District', phone: '+966 11 461 0006' },
      { city: 'Jeddah', addr: 'Al Madinah Rd, Al Andalus', phone: '+966 12 668 0006' },
      { city: 'Al Khobar', addr: 'King Faisal St, Al Aqrabia', phone: '+966 13 882 0006' },
    ],
    'United Arab Emirates': [
      { city: 'Dubai', addr: 'Sheikh Zayed Rd, Trade Centre 1', phone: '+971 4 397 0006' },
      { city: 'Abu Dhabi', addr: 'Corniche Rd, Al Markaziyah', phone: '+971 2 627 0006' },
    ],
    'Bahrain':         [{ city: 'Manama', addr: 'Diplomatic Area, Building 218', phone: '+973 17 530 006' }],
    'Egypt':           [{ city: 'Cairo', addr: 'Nile Corniche, Maadi', phone: '+20 2 252 0006' }],
    'Kuwait':          [{ city: 'Kuwait City', addr: 'Al Sour St, Salhiya', phone: '+965 2245 0006' }],
    'Jordan':          [{ city: 'Amman', addr: 'Zahran St, Abdoun', phone: '+962 6 559 0006' }],
    'Pakistan':        [{ city: 'Karachi', addr: 'Shahrah-e-Faisal, Block 6', phone: '+92 21 343 0006' }],
    'United Kingdom':  [{ city: 'London', addr: 'Cannon Street, EC4N', phone: '+44 20 7283 0006' }],
  };
  const [active, setActive] = useState('Saudi Arabia');
  const offices = regions[active];

  return (
    <div>
      <div className="region-tabs">
        {Object.keys(regions).map((r) => (
          <button key={r} className={`region-tab ${r === active ? 'is-active' : ''}`} onClick={() => setActive(r)}>{r}</button>
        ))}
      </div>
      <div className="region-offices">
        {offices.map((o) => (
          <div className="office" key={o.city}>
            <h4>{o.city}</h4>
            <p>{o.addr}</p>
            <span className="mono">{o.phone}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
window.RegionPanel = RegionPanel;
