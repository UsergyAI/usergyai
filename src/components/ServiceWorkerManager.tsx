import { useEffect } from 'react';

const ServiceWorkerManager = () => {
  useEffect(() => {
    // Register service worker for caching
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      window.addEventListener('load', async () => {
        try {
          // Create a simple service worker for basic caching
          const swCode = `
            const CACHE_NAME = 'usergy-v1';
            const urlsToCache = [
              '/',
              '/assets/index.css',
              '/assets/index.js',
              '/lovable-uploads/c5c3b275-e91f-4380-a86a-a6b4489557a1.png',
              '/lovable-uploads/e5f86441-69d0-46b9-b865-d05a56c17b3e.png'
            ];

            self.addEventListener('install', event => {
              event.waitUntil(
                caches.open(CACHE_NAME)
                  .then(cache => cache.addAll(urlsToCache))
              );
            });

            self.addEventListener('fetch', event => {
              if (event.request.method === 'GET') {
                event.respondWith(
                  caches.match(event.request)
                    .then(response => {
                      // Return cached version or fetch from network
                      return response || fetch(event.request);
                    })
                );
              }
            });
          `;

          const blob = new Blob([swCode], { type: 'application/javascript' });
          const swUrl = URL.createObjectURL(blob);
          
          const registration = await navigator.serviceWorker.register(swUrl);
          console.log('ServiceWorker registration successful');
          
          // Clean up the blob URL
          URL.revokeObjectURL(swUrl);
        } catch (error) {
          console.log('ServiceWorker registration failed');
        }
      });
    }
  }, []);

  return null;
};

export default ServiceWorkerManager;