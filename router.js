

import { renderAboutUs } from './aboutUs.js';

const routes = {  
  '/about': renderAboutUs   
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
