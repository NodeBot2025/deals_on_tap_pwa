self.addEventListener('install', function(event) {
  console.log('[ServiceWorker] Installed');
});

self.addEventListener('fetch', function(event) {
  // Optional: You can cache requests here if needed
});