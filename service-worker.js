const CACHE_NAME = "rainie-personal-english-system-v6-audio-alpha-fix2";
const FILES_TO_CACHE = ["./","./index.html","./manifest.json","./icon-192.png","./icon-512.png","./audio/day001.mp3","./audio/day002.mp3","./audio/day003.mp3","./audio/day004.mp3","./audio/day005.mp3","./audio/day006.mp3","./audio/day007.mp3"];
self.addEventListener("install", e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(FILES_TO_CACHE)));self.skipWaiting();});
self.addEventListener("activate", e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(k=>k!==CACHE_NAME?caches.delete(k):null))));self.clients.claim();});
self.addEventListener("fetch", e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));});
