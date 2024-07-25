import { renderAboutUs } from './aboutUs.js';
import { renderLandingPage } from './landingPage.js';


const routes = {  
  '/about': renderAboutUs,
    '/': renderLandingPage,
    '/tours': () => '<h1>Tours Page</h1>',
    '/blogs': () => '<h1>Blogs Page</h1>',
    '/shop': () => '<h1>Shop Page</h1>',
    '/pages': () => '<h1>Pages</h1>'   
};

function getRoute() {
  const path = window.location.pathname;
  
  if (path.startsWith('/products/')) {
    const parts = path.split('/');
    if (parts.length === 3) {
      const id = parts[2];
      return () => productDetailView(id);
    } 
  } 

  return routes[path] || (() => '<h1>404 Not Found</h1>');
}

export function router() {
  const view = getRoute();
  document.getElementById('app').innerHTML = view();
  if (window.location.pathname.startsWith('/products')) {
    setupSearch();
  }
}

export function navigate(url) {
  history.pushState({}, '', url);
  router();
}

window.addEventListener('popstate', router);
