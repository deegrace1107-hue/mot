const CACHE_NAME = 'dola-app-v1';
const ARCHIVOS_CACHE = [
    './index.html',
    './manifest.json',
    './icono-192.png',
    './icono-512.png'
];

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(ARCHIVOS_CACHE))
    );
});

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(respuesta => respuesta || fetch(e.request))
    );
});