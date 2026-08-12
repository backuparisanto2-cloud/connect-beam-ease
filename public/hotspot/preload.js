/* Griya Arca Kost — strategi preload adaptif + cache WebP
   - Mobile / jaringan lambat / Save-Data: hanya latar aktif yang dipratangani,
     sisanya dimuat bertahap (satu per satu, saat idle).
   - Desktop / jaringan cepat: prefetch bertahap seluruh latar.
   - Gambar disimpan di Cache Storage (bila tersedia) supaya kunjungan
     berikutnya instan dan tidak memakan bandwidth lagi.
*/
(function () {
  var ALL = ['bg-morning1', 'bg-morning2', 'bg-morning3', 'bg-night1', 'bg-night2', 'bg-night3'];
  var CACHE = 'griya-arca-img-v2';
  var conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection || {};
  var saveData = !!conn.saveData;
  var slow = /(^|-)2g$/.test(conn.effectiveType || '');
  var mobile = Math.min(screen.width, screen.height) <= 640 ||
    /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
  var light = document.documentElement.getAttribute('data-theme') === 'light';
  var dpr = window.devicePixelRatio || 1;
  // layar kecil ber-DPR rendah cukup varian -sm (480px), sisanya varian penuh (900px)
  var SFX = (Math.min(screen.width, screen.height) <= 640 && dpr <= 1.5) ? '-sm' : '';

  // urutan prioritas: latar tema aktif dulu, lalu tema lawan
  var pref = light ? ['bg-morning1', 'bg-morning2', 'bg-morning3'] : ['bg-night1', 'bg-night2', 'bg-night3'];
  var rest = ALL.filter(function (n) { return pref.indexOf(n) < 0; });
  var queue = pref.slice(1).concat(mobile || slow || saveData ? rest.slice(0, 1) : rest);

  if (saveData || slow) queue = []; // hemat data: cukup latar aktif saja

  function url(n) { return 'img/' + n + SFX + '.webp'; }

  function idle(fn, t) {
    if (window.requestIdleCallback) requestIdleCallback(fn, { timeout: t || 4000 });
    else setTimeout(fn, t || 1500);
  }

  function viaCache(href) {
    if (!('caches' in window)) return Promise.reject();
    return caches.open(CACHE).then(function (c) {
      return c.match(href).then(function (hit) {
        if (hit) return true;
        return fetch(href, { cache: 'force-cache' }).then(function (r) {
          if (r && r.ok) return c.put(href, r.clone()).then(function () { return true; });
          return true;
        });
      });
    });
  }

  function viaLink(href) {
    var l = document.createElement('link');
    l.rel = 'prefetch'; l.as = 'image'; l.type = 'image/webp'; l.href = href;
    try { l.setAttribute('fetchpriority', 'low'); } catch (e) {}
    document.head.appendChild(l);
  }

  function fetchOne(name, done) {
    var href = url(name);
    viaCache(href).then(function () { done(); }, function () { viaLink(href); done(); });
  }

  // muat bertahap: satu gambar per siklus idle
  function step() {
    if (!queue.length) return;
    var n = queue.shift();
    fetchOne(n, function () { idle(step, 2500); });
  }

  // pastikan latar aktif tersimpan di cache untuk kunjungan berikutnya
  function warmCurrent() {
    viaCache(url(pref[0])).catch(function () {});
  }

  function start() {
    warmCurrent();
    if (queue.length) idle(step, 3000);
  }

  if (document.readyState === 'complete') start();
  else window.addEventListener('load', start);
})();
