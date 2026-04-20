/* kairo-symbols_v33.js - 本体無改造で読み込むだけ */
(()=>{const LS='kairo_symbols_v33',BK='kairo_symbols_backed_up';
const load=()=>{try{return JSON.parse(localStorage.getItem(LS)||'{}')}catch{return{}}};
let symbols=load(); const save=()=>localStorage.setItem(LS,JSON.stringify(symbols));

// 初期シンボル
if(!Object.keys(symbols).length){
 symbols={
  "コンセント":{
   "double":{name:"2口",svg:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><path d="M-12,4 A12,12 0 0,0 12,4 Z" fill="#000"/><path d="M-4,-10 V4 M4,-10 V4" fill="none" stroke="#000" stroke-width="2"/><text x="16" y="6" font-size="14" font-weight="700">2</text>'},
   "ev":{name:"EV",svg:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><path d="M-12,4 A12,12 0 0,0 12,4 Z" fill="#000"/><path d="M-4,-10 V4 M4,-10 V4" fill="none" stroke="#000" stroke-width="2"/><text x="16" y="6" font-size="14" font-weight="700">EV</text>'},
   "v200":{name:"200V",svg:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><path d="M-12,4 A12,12 0 0,0 12,4 Z" fill="#000"/><path d="M-4,-10 V4 M4,-10 V4" fill="none" stroke="#000" stroke-width="2"/><text x="16" y="6" font-size="14" font-weight="700">200V</text>'}
  },
  "スイッチ":{
   "single":{name:"片切",svg:'<circle cx="0" cy="0" r="6" fill="#000"/>'},
   "threeway":{name:"3路",svg:'<circle cx="-6" cy="0" r="6" fill="#000"/><text x="6" y="4" font-size="14" font-weight="700">3</text>'},
   "threeway_hotaru":{name:"3H",svg:'<circle cx="-6" cy="0" r="6" fill="#000"/><text x="6" y="4" font-size="14" font-weight="700">3H</text>'}
  },
  "弱電":{
   "tel":{name:"電話",svg:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><path d="M0,-12 A12,12 0 0,0 0,12 Z" fill="#000"/><circle cx="0" cy="0" r="5" fill="#000"/>'},
   "tv":{name:"TV",svg:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><text x="0" y="5" text-anchor="middle" font-size="12" font-weight="700">TV</text>'},
   "lan":{name:"LAN",svg:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><text x="0" y="5" text-anchor="middle" font-size="10" font-weight="700">LAN</text>'},
   "intercom":{name:"I",svg:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><text x="0" y="5" text-anchor="middle" font-size="12" font-weight="700">I</text>'}
  },
  "分電盤他":{
   "bundempan":{name:"分電盤",svg:'<rect x="-20" y="-10" width="40" height="20" fill="none" stroke="#000" stroke-width="2"/><path d="M-20,10 L20,-10 L20,10 Z" fill="#000"/>'},
   "joho":{name:"情報盤",svg:'<rect x="-20" y="-10" width="40" height="20" fill="none" stroke="#000" stroke-width="2"/><path d="M-20,10 L20,-10" fill="none" stroke="#000" stroke-width="3"/>'}
  },
  "ボックス":{
   "joint":{name:"JB",svg:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><text x="0" y="5" text-anchor="middle" font-size="18" font-weight="700">J</text>'}
  }
 }; save();
 if(!localStorage.getItem(BK)){
   const a=document.createElement('a'); a.href=URL.createObjectURL(new Blob([JSON.stringify(symbols,null,2)],{type:'application/json'})); a.download='kairo_symbols_backup_2026-04-19.json'; a.click(); localStorage.setItem(BK,'1');
 }
}

function init(){
 if(!window.draw||!window.nodes){return setTimeout(init,50)}
 // 1) 印刷時にジョイントも消すパッチ
 const _exp=window.exportToPDF;
 window.exportToPDF=async function(){
   const {jsPDF}=window.jspdf; let minX=Infinity,minY=Infinity,maxX=-Infinity,maxY=-Infinity;
   const bgImgs=bgLayer.querySelectorAll('image');
   if(bgImgs.length){bgImgs.forEach(img=>{const x=+img.getAttribute('x')||0,y=+img.getAttribute('y')||0,w=+img.getAttribute('width')||0,h=+img.getAttribute('height')||0;minX=Math.min(minX,x);minY=Math.min(minY,y);maxX=Math.max(maxX,x+w);maxY=Math.max(maxY,y+h)});}else{nodes.forEach(n=>{minX=Math.min(minX,n.x-20);minY=Math.min(minY,n.y-20);maxX=Math.max(maxX,n.x+20);maxY=Math.max(maxY,n.y+20)});edges.forEach(e=>{[e.a,...e.bends,e.b].forEach(p=>{minX=Math.min(minX,p.x);minY=Math.min(minY,p.y);maxX=Math.max(maxX,p.x);maxY=Math.max(maxY,p.y)})})}
   if(!isFinite(minX)){minX=0;minY=0;maxX=800;maxY=600} const pad=40;minX-=pad;minY-=pad;maxX+=pad;maxY+=pad; const w=maxX-minX,h=maxY-minY;
   const c=document.createElement('canvas');c.width=w;c.height=h;const ctx=c.getContext('2d');ctx.fillStyle='white';ctx.fillRect(0,0,w,h);
   if(bgImgs.length){for(const imgEl of bgImgs){const href=imgEl.getAttribute('href'),op=+imgEl.getAttribute('opacity')||1,x=+imgEl.getAttribute('x')-minX,y=+imgEl.getAttribute('y')-minY,iw=+imgEl.getAttribute('width'),ih=+imgEl.getAttribute('height');await new Promise(r=>{const im=new Image();im.onload=()=>{ctx.globalAlpha=op;ctx.drawImage(im,x,y,iw,ih);ctx.globalAlpha=1;r()};im.onerror=r;im.src=href})}}
   const clone=svg.cloneNode(true); const nl=clone.querySelector('#nodes');
   if(nl){Array.from(nl.querySelectorAll('g')).forEach(g=>{if(g.querySelector('circle[fill="#ef4444"]')||g.querySelector('circle[fill="white"]'))g.remove()})}
   ['bg','lines','nodes','eraseLayer'].forEach(id=>{const g=clone.querySelector('#'+id);if(g)g.removeAttribute('transform')});
   clone.querySelectorAll('#bg image').forEach(i=>i.remove()); const br=clone.querySelector('#bg rect'); if(br)br.setAttribute('fill','none');
   clone.setAttribute('viewBox',`${minX} ${minY} ${w} ${h}`); clone.setAttribute('width',w); clone.setAttribute('height',h);
   const url=URL.createObjectURL(new Blob([new XMLSerializer().serializeToString(clone)],{type:'image/svg+xml'}));
   return new Promise((res,rej)=>{const im=new Image();im.onload=()=>{ctx.drawImage(im,0,0,w,h);URL.revokeObjectURL(url);try{const pdf=new jsPDF({orientation:w>h?'landscape':'portrait',unit:'px',format:[w,h]});pdf.addImage(c.toDataURL('image/jpeg',0.95),'JPEG',0,0,w,h);res(pdf)}catch(e){rej(e)}};im.onerror=()=>rej(new Error('SVG描画失敗'));im.src=url});
 };

 // 2) rebuild/drawをシンボル対応に
 const _reb=window.rebuild; window.rebuild=function(){const syms=nodes.filter(n=>n.type==='symbol');nodes=nodes.filter(n=>n.type!=='symbol');_reb();nodes.push(...syms)};
 const _dr=window.draw; window.draw=function(){_dr();nodes.filter(n=>n.type==='symbol').forEach(n=>{const g=document.createElementNS('http://www.w3.org/2000/svg','g');g.setAttribute('transform',`translate(${n.x},${n.y}) scale(1.3)`);g.style.cursor='pointer';if(n.selected)g.setAttribute('filter','url(#glow)');g.innerHTML=n.svg;g.onclick=e=>{e.stopPropagation();n.selected=!n.selected;draw()};g.onmousedown=e=>{e.stopPropagation();if(mode==='move')dragging=n};nodesLayer.appendChild(g)})};

 // 3) パレット
 const pal=document.createElement('div');pal.className='absolute top-3 left-3 z-30 w-60 max-h- overflow-auto p-2 bg-slate-900/90 border border-slate-700 rounded-xl';pal.innerHTML='<div class="text- text-slate-400 mb-1">記号</div><div id="kairoList" class="grid grid-cols-4 gap-1.5"></div>';document.querySelector('main').appendChild(pal);
 const list=document.getElementById('kairoList');
 Object.entries(symbols).forEach(([cat,its])=>Object.entries(its).forEach(([k,s])=>{const b=document.createElement('button');b.className='p-1 bg-slate-800/80 hover:bg-slate-700 border border-slate-700 rounded';b.title=cat+':'+s.name;b.innerHTML=`<svg viewBox="-16 -16 32 32" width="26" height="26">${s.svg}</svg>`;b.onclick=()=>{nodes.push({id:nextId++,type:'symbol',x:150,y:150,svg:s.svg,name:s.name,selected:false});draw();save()};list.appendChild(b)}));
 window.addKairoSymbol=(cat,key,name,svg)=>{if(!symbols[cat])symbols[cat]={};symbols[cat][key]={name,svg};save();location.reload()}
}
init();
})();
