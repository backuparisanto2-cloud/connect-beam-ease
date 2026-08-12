/* Griya Arca Kost — tema otomatis mengikuti jam WIB (UTC+7) */
function wibHour(){return Math.floor((((Date.now()/3600000)+7)%24+24)%24);}
function autoTheme(){var h=wibHour();return (h>=6&&h<18)?'light':'dark';}
function overrideTheme(){try{return sessionStorage.getItem('griya-arca-theme');}catch(e){return null;}}
function applyTheme(t){var h=document.documentElement;
  if(t==='light')h.setAttribute('data-theme','light');else h.removeAttribute('data-theme');
  paintTheme();}
function syncTheme(){applyTheme(overrideTheme()||autoTheme());}
function toggleTheme(){
  var cur=document.documentElement.getAttribute('data-theme')==='light'?'light':'dark';
  var next=cur==='light'?'dark':'light';
  try{if(next===autoTheme())sessionStorage.removeItem('griya-arca-theme');else sessionStorage.setItem('griya-arca-theme',next);}catch(e){}
  try{localStorage.removeItem('griya-arca-theme');}catch(e){}
  applyTheme(next);
}
function paintTheme(){
  var l=document.documentElement.getAttribute('data-theme')==='light';
  var b=document.getElementById('themeBtn');
  if(!b)return;
  b.innerHTML=l
    ?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>'
    :'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/></svg>';
}
paintTheme();

syncTheme();
setInterval(syncTheme,60000);
