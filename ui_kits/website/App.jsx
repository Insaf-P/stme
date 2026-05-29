/* URL-based router — reads current page filename to determine route */
function getRouteFromURL() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  const params = new URLSearchParams(window.location.search);

  const routeMap = {
    'index.html': 'home', '': 'home',
    'services.html': 'services',
    'service-detail.html': 'service',
    'industries.html': 'industries',
    'industry-detail.html': 'industry',
    'partners.html': 'partners',
    'insights.html': 'insights',
    'insight-detail.html': 'insight',
    'about.html': 'about',
    'awards.html': 'awards',
    'customers.html': 'customers',
    'careers.html': 'careers',
    'career-detail.html': 'career',
    'contact.html': 'contact',
    'products.html': 'products',
    'product-detail.html': 'product',
  };

  const route = routeMap[path] || 'home';
  let payload = null;

  if (route === 'service')   payload = { cat: decodeURIComponent(params.get('cat') || 'Cloud') };
  if (route === 'industry')  payload = { id: params.get('id') || 'public', tag: decodeURIComponent(params.get('tag') || '') };
  if (route === 'insight')   payload = { id: params.get('id'), type: decodeURIComponent(params.get('type') || ''), title: decodeURIComponent(params.get('title') || ''), d: params.get('d'), m: params.get('m'), y: params.get('y'), img: decodeURIComponent(params.get('img') || '') };
  if (route === 'career')    payload = { title: decodeURIComponent(params.get('title') || ''), dept: decodeURIComponent(params.get('dept') || ''), location: decodeURIComponent(params.get('location') || ''), type: decodeURIComponent(params.get('type') || '') };
  if (route === 'product')   payload = { name: decodeURIComponent(params.get('name') || ''), cat: decodeURIComponent(params.get('cat') || ''), partner: decodeURIComponent(params.get('partner') || '') };

  return { route, payload };
}

function getURLForRoute(r, payload) {
  switch (r) {
    case 'home':       return 'index.html';
    case 'services':   return 'services.html';
    case 'service':    return 'service-detail.html?cat='    + encodeURIComponent(payload?.cat || 'Cloud');
    case 'industries': return 'industries.html';
    case 'industry':   return 'industry-detail.html?id='   + encodeURIComponent(payload?.id || 'public') + '&tag=' + encodeURIComponent(payload?.tag || '');
    case 'partners':   return 'partners.html';
    case 'insights':   return 'insights.html';
    case 'insight':    return 'insight-detail.html?id='    + encodeURIComponent(payload?.id || '') + '&type=' + encodeURIComponent(payload?.type || '') + '&title=' + encodeURIComponent(payload?.title || '') + '&d=' + encodeURIComponent(payload?.d || '') + '&m=' + encodeURIComponent(payload?.m || '') + '&y=' + encodeURIComponent(payload?.y || '') + '&img=' + encodeURIComponent(payload?.img || '');
    case 'about':      return 'about.html';
    case 'awards':     return 'awards.html';
    case 'customers':  return 'customers.html';
    case 'careers':    return 'careers.html';
    case 'career':     return 'career-detail.html?title='  + encodeURIComponent(payload?.title || '') + '&dept=' + encodeURIComponent(payload?.dept || '') + '&location=' + encodeURIComponent(payload?.location || '') + '&type=' + encodeURIComponent(payload?.type || '');
    case 'contact':    return 'contact.html';
    case 'products':   return 'products.html';
    case 'product':    return 'product-detail.html?name='  + encodeURIComponent(payload?.name || '') + '&cat=' + encodeURIComponent(payload?.cat || '') + '&partner=' + encodeURIComponent(payload?.partner || '');
    default:           return 'index.html';
  }
}

function App() {
  const initial = getRouteFromURL();

  const [route]         = useState(initial.route);
  const activeService   = initial.route === 'service'  ? initial.payload : null;
  const activeIndustry  = initial.route === 'industry' ? initial.payload : null;
  const activeInsight   = initial.route === 'insight'  ? initial.payload : null;
  const activeRole      = initial.route === 'career'   ? initial.payload : null;
  const activeProduct   = initial.route === 'product'  ? initial.payload : null;

  const [contactOpen, setContactOpen] = useState(false);
  const openContact  = () => setContactOpen(true);
  const closeContact = () => setContactOpen(false);

  const navigate = (r, payload) => {
    window.location.href = getURLForRoute(r, payload);
  };

  return (
    <>
      <TopNav route={route} onNavigate={navigate} onContact={openContact}
        theme={route === 'home' ? 'dark' : 'light'} />

      {route === 'home'       && <HomePage       onNavigate={navigate} onContact={openContact} />}
      {route === 'services'   && <ServicesPage   onNavigate={navigate} onContact={openContact} />}
      {route === 'service'    && <ServicesDetail  service={activeService}   onBack={() => navigate('services')}   onContact={openContact} />}
      {route === 'industries' && <IndustriesPage  onNavigate={navigate} onContact={openContact} />}
      {route === 'industry'   && <IndustryDetail  industry={activeIndustry} onBack={() => navigate('industries')} onNavigate={navigate} onContact={openContact} />}
      {route === 'partners'   && <PartnersPage    onContact={openContact} />}
      {route === 'insights'   && <InsightsPage    onNavigate={navigate} onContact={openContact} />}
      {route === 'insight'    && <InsightArticle  insight={activeInsight}   onBack={() => navigate('insights')}   onNavigate={navigate} />}
      {route === 'about'      && <AboutPage       onNavigate={navigate} onContact={openContact} />}
      {route === 'awards'     && <AwardsPage      onContact={openContact} />}
      {route === 'customers'  && <CustomersPage   onContact={openContact} />}
      {route === 'careers'    && <CareersPage     onNavigate={navigate} onContact={openContact} />}
      {route === 'career'     && <CareerDetail    role={activeRole}         onBack={() => navigate('careers')}    onContact={openContact} />}
      {route === 'contact'    && <ContactPage     onNavigate={navigate} />}
      {route === 'products'   && <ProductsPage    onNavigate={navigate} onContact={openContact} />}
      {route === 'product'    && <ProductDetail   product={activeProduct}   onBack={() => navigate('products')}   onContact={openContact} onNavigate={navigate} />}

      <Footer onContact={openContact} onNavigate={navigate} />
      <ContactDrawer open={contactOpen} onClose={closeContact} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
