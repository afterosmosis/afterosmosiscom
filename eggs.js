/* ============================================================
   after osmosis — shared easter eggs (self-injecting)
   EE1: 04:04 transmission   ·   EE2: konami album archive
   include on every page:  <script src="eggs.js"></script>
   (the secret-track unlock lives in the music page only)
   ============================================================ */
(function(){
  var COVERS=[
    {src:'images/covers/after-osmosis-ep.jpg',name:'after osmosis ep'},
    {src:'images/covers/wdyswyd.jpg',name:'what do you see when you dream?'},
    {src:'images/covers/slow-release.png',name:'slow release'}
  ];

  /* ---------- styles ---------- */
  var css=document.createElement('style');
  css.textContent=`
  .egg-ov{display:none;position:fixed;inset:0;z-index:9990;background:rgba(6,7,9,.94);
    backdrop-filter:blur(2px);align-items:center;justify-content:center;font-family:var(--mono,'Space Mono',monospace)}
  .egg-ov.on{display:flex}
  /* EE1 */
  .ee1{position:relative;width:92%;max-width:560px;padding:38px 34px;text-align:center;
    background:var(--bg,#0b0c0f);border:1px solid var(--accent,#5fb3c4);overflow:hidden;
    box-shadow:0 0 60px rgba(95,179,196,.12),inset 0 0 40px rgba(95,179,196,.04);cursor:pointer}
  .ee1 .br{position:absolute;border:2px solid var(--line,#e9e5d8);width:14px;height:14px}
  .ee1 .br.tl{top:8px;left:8px;border-right:none;border-bottom:none}
  .ee1 .br.tr{top:8px;right:8px;border-left:none;border-bottom:none}
  .ee1 .br.bl{bottom:8px;left:8px;border-right:none;border-top:none}
  .ee1 .br.brr{bottom:8px;right:8px;border-left:none;border-top:none}
  .ee1 svg{display:block;margin:0 auto 4px}
  .ee1 .rx{font-size:10px;letter-spacing:.34em;color:var(--ink-dim,#7b8089);margin:10px 0}
  .ee1 .ttl{font-size:21px;font-weight:700;letter-spacing:.42em;color:var(--accent,#5fb3c4);
    text-shadow:0 0 14px rgba(95,179,196,.5);margin:14px 0 14px 12px}
  .ee1 .lock{font-size:12px;letter-spacing:.22em;color:var(--line,#e9e5d8);margin:10px 0;animation:beat 1.1s infinite}
  .ee1 .static{font-size:9px;letter-spacing:.18em;color:var(--accent-2,#2f6b76);white-space:nowrap;overflow:hidden;opacity:.6}
  .ee1 .cd{font-size:10px;letter-spacing:.12em;color:var(--ink-faint,#565b64);margin-top:18px}
  .ee1 .esc{font-size:9px;letter-spacing:.12em;color:var(--ink-faint,#565b64);margin-top:6px;opacity:.6}
  /* EE2 */
  .ee2{position:relative;width:92%;max-width:560px;background:var(--bg,#0b0c0f);border:1px solid var(--line-dim,#3a3f47)}
  .ee2 .bar{display:flex;justify-content:space-between;align-items:center;padding:11px 14px;
    border-bottom:1px solid var(--line-dim,#3a3f47);font-size:11px;letter-spacing:.12em;color:var(--ink-dim,#7b8089)}
  .ee2 .bar .t{color:var(--accent,#5fb3c4)}
  .ee2 .x{cursor:pointer;color:var(--ink-dim,#7b8089)}.ee2 .x:hover{color:var(--accent,#5fb3c4)}
  .ee2 .stage{position:relative;aspect-ratio:1/1;background:#050608;display:flex;align-items:center;justify-content:center;
    overflow:hidden;cursor:pointer;border-bottom:1px solid var(--line-dim,#3a3f47)}
  .ee2 .stage img{max-width:100%;max-height:100%;object-fit:contain;display:block}
  .ee2 .stage::after{content:"";position:absolute;inset:0;pointer-events:none;
    background:repeating-linear-gradient(0deg,transparent 0 2px,rgba(0,0,0,.16) 2px 3px)}
  .ee2 img.gl{animation:ee2gl .36s steps(3)}
  @keyframes ee2gl{0%{filter:none;transform:translate(0,0)}25%{filter:hue-rotate(160deg) saturate(2.4);transform:translate(-4px,1px)}
    55%{filter:hue-rotate(250deg) saturate(2);transform:translate(4px,-1px)}80%{filter:brightness(1.8) contrast(1.4);transform:translate(2px,0)}
    100%{filter:none;transform:translate(0,0)}}
  .ee2 .info{padding:13px 14px;text-align:center}
  .ee2 .nm{font-size:12px;color:var(--line,#e9e5d8);letter-spacing:.04em;min-height:1.3em}
  .ee2 .ct{font-size:10px;color:var(--ink-dim,#7b8089);margin:6px 0}
  .ee2 .hint{font-size:9px;color:var(--ink-faint,#565b64);letter-spacing:.08em}
  `;
  document.head.appendChild(css);

  var ring='<svg width="46" height="46" viewBox="0 0 46 46"><g fill="none" stroke="#5fb3c4" stroke-width="2">'+
    '<circle cx="23" cy="23" r="20" stroke-dasharray="60 18 30 14"/><circle cx="23" cy="23" r="12" stroke-dasharray="30 10"/>'+
    '</g><circle cx="23" cy="23" r="4" fill="#5fb3c4"/></svg>';

  /* ---------- EE1: 04:04 ---------- */
  var ee1=document.createElement('div');ee1.className='egg-ov';ee1.id='ee1';
  ee1.innerHTML='<div class="ee1"><span class="br tl"></span><span class="br tr"></span><span class="br bl"></span><span class="br brr"></span>'+
    ring+'<div class="rx">transmission received</div>'+
    '<div class="static">▓░▓▓░▓░░▓▓░▓░▓▓░▓▓░░▓░▓▓░░▓▓░▓░▓░▓▓░▓░░▓▓░▓▓░▓░</div>'+
    '<div class="ttl">after osmosis</div>'+
    '<div class="static">▓░▓▓░▓░░▓▓░▓░▓▓░▓▓░░▓░▓▓░░▓▓░▓░▓░▓▓░▓░░▓▓░▓▓░▓░</div>'+
    '<div class="lock">▶ 04:04 signal lock ◀</div>'+
    '<div class="cd" id="ee1cd">closing in 60s</div><div class="esc">[esc] or click to close</div></div>';
  document.body.appendChild(ee1);

  var ee1t=null,ee1s=60,ee1shown=false;
  function is404(){var d=new Date();return (d.getHours()===4||d.getHours()===16)&&d.getMinutes()===4;}
  function ee1open(){if(ee1shown)return;ee1shown=true;ee1s=60;ee1.classList.add('on');ee1tick();ee1t=setInterval(ee1tick,1000);}
  function ee1tick(){var e=document.getElementById('ee1cd');if(e)e.textContent='closing in '+ee1s+'s';if(ee1s--<=0)ee1close();}
  function ee1close(){ee1.classList.remove('on');if(ee1t){clearInterval(ee1t);ee1t=null;}}
  ee1.addEventListener('click',ee1close);
  if(is404())ee1open();setInterval(function(){if(is404())ee1open();},30000);

  /* ---------- EE2: konami ---------- */
  var ee2=document.createElement('div');ee2.className='egg-ov';ee2.id='ee2';
  ee2.innerHTML='<div class="ee2"><div class="bar"><span class="t">:: album archive ::</span><span class="x" id="ee2x">[ x ]</span></div>'+
    '<div class="stage" id="ee2stage"><img id="ee2img" alt=""></div>'+
    '<div class="info"><div class="nm" id="ee2nm"></div><div class="ct" id="ee2ct"></div>'+
    '<div class="hint">← → navigate · click image · [esc] close</div></div></div>';
  document.body.appendChild(ee2);

  var ee2i=0;
  function ee2show(i,gl){var img=document.getElementById('ee2img'),c=COVERS[i];img.src=c.src;
    document.getElementById('ee2nm').textContent=c.name;
    document.getElementById('ee2ct').textContent='[ '+(i+1)+' / '+COVERS.length+' ]';
    if(gl){img.classList.remove('gl');void img.offsetWidth;img.classList.add('gl');}}
  function ee2open(){ee2i=0;ee2show(0,false);ee2.classList.add('on');}
  function ee2close(){ee2.classList.remove('on');}
  function ee2next(){ee2i=(ee2i+1)%COVERS.length;ee2show(ee2i,true);}
  function ee2prev(){ee2i=(ee2i-1+COVERS.length)%COVERS.length;ee2show(ee2i,true);}
  document.getElementById('ee2x').addEventListener('click',ee2close);
  document.getElementById('ee2stage').addEventListener('click',ee2next);

  var KON=['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'],kp=0;
  document.addEventListener('keydown',function(e){
    var k=(e.key==='b'||e.key==='B')?'b':(e.key==='a'||e.key==='A')?'a':e.key;
    if(k===KON[kp]){kp++;if(kp===KON.length){kp=0;ee2open();return;}}else{kp=(k===KON[0])?1:0;}
    if(ee2.classList.contains('on')){
      if(e.key==='ArrowRight'){e.preventDefault();ee2next();}
      if(e.key==='ArrowLeft'){e.preventDefault();ee2prev();}
      if(e.key==='Escape')ee2close();
    }
    if(e.key==='Escape')ee1close();
  },true);
})();
