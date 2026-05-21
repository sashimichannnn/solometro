const CACHE = 'solometro-v1';

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c =>
      c.addAll(['/', '/solometro/', '/solometro/index.html'])
    ).catch(()=>{}) // ローカル開発などでパスが無い場合も落とさない
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  // share target は GET なのでブラウザに渡してそのまま share.html を取らせる
  if (e.request.url.includes('/solometro/share')) return;
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
