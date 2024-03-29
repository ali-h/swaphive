const staticDevSwapHive = "dev-swaphive-v1";
const assets = [
  "/",
  "/index.html",
  "/css/main.css",
  "/js/main.js",
  "/assets/hive_auth.png",
  "/assets/hive_keychain.png",
  "/assets/hiveupme.png",
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevSwapHive).then(cache => {
      cache.addAll(assets);
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  )
});
