/* ============================================================
   after osmosis — theme toggle (dark default · light preview)
   include on every page AFTER eggs.js:  <script src="theme.js"></script>
   ============================================================ */
(function(){
  var KEY='ao-theme';
  var root=document.documentElement;

  function apply(t){
    if(t==='light') root.setAttribute('data-theme','light');
    else root.removeAttribute('data-theme');
    setWordmark(t==='light');
  }
  function setWordmark(light){
    var src=light?'brand-wordmark-dark.png':'brand-wordmark.png';
    var ws=document.querySelectorAll('.wordmark');
    for(var i=0;i<ws.length;i++){ if(ws[i].getAttribute('src')!==src) ws[i].setAttribute('src',src); }
  }
  // apply saved preference immediately
  var saved=null;
  try{saved=localStorage.getItem(KEY);}catch(e){}
  apply(saved==='light'?'light':'dark');

  var SUN='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="8" cy="8" r="3.4"/><g stroke-linecap="round"><line x1="8" y1="1" x2="8" y2="2.6"/><line x1="8" y1="13.4" x2="8" y2="15"/><line x1="1" y1="8" x2="2.6" y2="8"/><line x1="13.4" y1="8" x2="15" y2="8"/><line x1="3" y1="3" x2="4.2" y2="4.2"/><line x1="11.8" y1="11.8" x2="13" y2="13"/><line x1="13" y1="3" x2="11.8" y2="4.2"/><line x1="4.2" y1="11.8" x2="3" y2="13"/></g></svg>';
  var MOON='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M13 9.5A5.4 5.4 0 0 1 6.5 3a5.4 5.4 0 1 0 6.5 6.5z" stroke-linejoin="round"/></svg>';

  function build(){
    var tb=document.querySelector('.topbar');
    if(!tb) return;
    var kids=[].slice.call(tb.children);
    var right=kids[kids.length-1];           // .nav, .navmenu, .mono-label — or .brand if nothing else
    var cluster=document.createElement('div');
    cluster.className='rightcluster';
    tb.appendChild(cluster);
    // don't pull the brand into the right cluster
    if(right && right!==cluster && !right.classList.contains('brand')) cluster.appendChild(right);

    var btn=document.createElement('button');
    btn.className='theme-toggle';
    btn.type='button';
    function paint(){
      var light=root.getAttribute('data-theme')==='light';
      btn.innerHTML=light?MOON:SUN;
      btn.setAttribute('aria-label',light?'switch to dark mode':'switch to light mode');
      btn.title=light?'dark mode':'light mode';
    }
    paint();
    setWordmark(root.getAttribute('data-theme')==='light');
    btn.addEventListener('click',function(){
      var light=root.getAttribute('data-theme')==='light';
      apply(light?'dark':'light');
      try{localStorage.setItem(KEY,light?'dark':'light');}catch(e){}
      paint();
    });
    cluster.appendChild(btn);
  }

  function wireMenu(){
    var menus=document.querySelectorAll('.navmenu');
    if(!menus.length) return;
    menus.forEach(function(m){
      var btn=m.querySelector('.navbtn');
      var pop=m.querySelector('.navpop');
      if(!btn||!pop) return;
      btn.setAttribute('aria-haspopup','true');
      btn.setAttribute('aria-expanded','false');
      function close(){pop.classList.remove('on');btn.setAttribute('aria-expanded','false');}
      function open(){pop.classList.add('on');btn.setAttribute('aria-expanded','true');}
      btn.addEventListener('click',function(e){
        e.stopPropagation();
        if(pop.classList.contains('on')) close(); else open();
      });
      document.addEventListener('click',function(e){
        if(!m.contains(e.target)) close();
      });
      document.addEventListener('keydown',function(e){
        if(e.key==='Escape') close();
      });
    });
  }

  function init(){ build(); wireMenu(); }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init);
  else init();
})();
