/* Gracie Kost — tema terang/gelap, dipakai semua halaman */
function toggleTheme(){
  var h=document.documentElement,cur=h.getAttribute('data-theme')==='light'?'light':'dark';
  var next=cur==='light'?'dark':'light';
  if(next==='light'){h.setAttribute('data-theme','light');try{localStorage.setItem('gracie-theme','light');}catch(e){}}
  else{h.removeAttribute('data-theme');try{localStorage.removeItem('gracie-theme');}catch(e){}}
  paintTheme();
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
