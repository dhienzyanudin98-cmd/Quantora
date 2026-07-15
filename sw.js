// QUANTX service worker — network-first, tidak cache data trading live.
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', e => {
  // Sengaja tidak intercept: semua request live (klines, ticker, order) harus selalu network-first.
});
