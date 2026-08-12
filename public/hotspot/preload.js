/* Griya Arca Kost — prefetch latar WebP sisa setelah halaman siap (prioritas rendah) */
(function(){
  var imgs=['bg-morning1','bg-morning2','bg-morning3','bg-night1','bg-night2','bg-night3'];
  function go(){
    var have={};
    var links=document.querySelectorAll('link[rel="preload"],link[rel="prefetch"]');
    for(var i=0;i<links.length;i++){have[links[i].getAttribute('href')]=1;}
    for(var j=0;j<imgs.length;j++){
      var href='img/'+imgs[j]+'.webp';
      if(have[href])continue;
      var l=document.createElement('link');
      l.rel='prefetch';l.as='image';l.type='image/webp';l.href=href;
      try{l.setAttribute('fetchpriority','low');}catch(e){}
      document.head.appendChild(l);
    }
  }
  function start(){ if(window.requestIdleCallback){requestIdleCallback(go,{timeout:3000});} else {setTimeout(go,1200);} }
  if(document.readyState==='complete')start();
  else window.addEventListener('load',start);
})();
