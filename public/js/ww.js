const cacheName = 'pwa-quote-v1';
const staticAssets = [
  './',
  './index.html',
  './js/client.js',
  './img/Quote.svg',
  './img/quote.png',
];

self.addEventListener('install', async event => {
    const cache = await caches.open(cacheName); 
    await cache.addAll(staticAssets); 
  });
  
self.addEventListener('fetch', async event => {
    const cache = await caches.open(cacheName); 
    const cachedResponse = await cache.match(req); 
    return cachedResponse || fetch(req); 
});