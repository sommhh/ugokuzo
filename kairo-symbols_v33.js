/* kairo-symbols_v33.js - タブ分け / 回転 / 本体無改造 */
(()=>{const LS='kairo_symbols_v33';
const load=()=>{try{return JSON.parse(localStorage.getItem(LS)||'{}')}catch{return{}}};
let symbols=load(); const save=()=>localStorage.setItem(LS,JSON.stringify(symbols));

if(!Object.keys(symbols).length){
 symbols={
  "スイッチ":{
   "single":{name:"片切",svg:'<circle cx="0" cy="0" r="6" fill="#000"/>'},
   "threeway":{name:"3路",svg:'<circle cx="-6" cy="0" r="6" fill="#000"/><text x="6" y="4" font-size="14" font-weight="700">3</text>'},
   "fourway":{name:"4路",svg:'<circle cx="-6" cy="0" r="6" fill="#000"/><text x="6" y="4" font-size="14" font-weight="700">4</text>'},
   "hotaru":{name:"H",svg:'<circle cx="-6" cy="0" r="6" fill="#000"/><text x="6" y="4" font-size="14" font-weight="700">H</text>'},
   "threeway_hotaru":{name:"3H",svg:'<circle cx="-6" cy="0" r="6" fill="#000"/><text x="6" y="4" font-size="14" font-weight="700">3H</text>'}
  },
  "コンセント":{
   "single":{name:"1口",svg:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><path d="M-12,4 A12,12 0 0,0 12,4 Z" fill="#000"/><path d="M-4,-10 V4 M4,-10 V4" fill="none" stroke="#000" stroke-width="2"/>'},
   "double":{name:"2口",svg:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><path d="M-12,4 A12,12 0 0,0 12,4 Z" fill="#000"/><path d="M-4,-10 V4 M4,-10 V4" fill="none" stroke="#000" stroke-width="2"/><text x="16" y="6" font-size="14" font-weight="700">2</text>'},
   "ev":{name:"EV",svg:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><path d="M-12,4 A12,12 0 0,0 12,4 Z" fill="#000"/><path d="M-4,-10 V4 M4,-10 V4" fill="none" stroke="#000" stroke-width="2"/><text x="16" y="6" font-size="14" font-weight="700">EV</text>'},
   "v200":{name:"200V",svg:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><path d="M-12,4 A12,12 0 0,0 12,4 Z" fill="#000"/><path d="M-4,-10 V4 M4,-10 V4" fill="none" stroke="#000" stroke-width="2"/><text x="16" y="6" font-size="14" font-weight="700">200V</text>'}
  },
  "弱電":{
   "tel":{name:"TEL",svg:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><path d="M0,-12 A12,12 0 0,0 0,12 Z" fill="#000"/><circle cx="0" cy="0" r="5" fill="#000"/>'},
   "tv":{name:"TV",svg:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><text x="0" y="5" text-anchor="middle" font-size="12" font-weight="700">TV</text>'},
   "lan":{name:"LAN",svg:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><text x="0" y="5" text-anchor="middle" font-size="10" font-weight="700">LAN</text>'}
  },
  "分電盤他":{
   "bundempan":{name:"分電盤",svg:'<rect x="-20" y="-10" width="40" height="20" fill="none" stroke="#000" stroke-width="2"/><path d="M-20,10 L20,-10 L20,10 Z" fill="#000"/>'},
   "joho":{name:"情報盤",svg:'<rect x="-20" y="-10" width="40" height="20" fill="none" stroke="#000" stroke-width="2"/><path d="M-20,10 L20,-10" fill="none" stroke="#000" stroke-width="3"/>'}
  }
 }; save();
}

function ready(fn){if(typeof draw==='function'&&typeof nodes!=='undefined')fn();else setTimeout(()=>ready(fn),50)}
ready(()=>{
 // シンボルをrebuildから除外
 const _reb=rebuild; rebuild=function(){const s=nodes.filter(n=>n.type==='symbol');nodes=nodes.filter(n=>n.type!=='symbol');_reb();nodes.push(...s)};
 // 描画
 const _dr=draw; draw=function(){_dr();const nl=document.getElementById('nodes');nodes.filter(n=>n.type==='symbol').forEach(n=>{const g=document.createElementNS('http://www.w3.org/2000/svg','g');g.setAttribute('transform',`translate(${n.x},${n.y}) rotate(${n.rot||0}) scale(1.4)`);g.style.cursor='pointer';if(n.selected)g.setAttribute('filter','url(#glow)');g.innerHTML=n.svg;g.onmousedown=e=>{e.stopPropagation();if(mode==='move')dragging=n};g.onclick=e=>{e.stopPropagation();n.selected=!n.selected;draw()};nl.appendChild(g)})};
 // Rキー回転
 window.addEventListener('keydown',e=>{if(e.key.toLowerCase()==='r'){let ch=false;nodes.filter(n=>n.selected&&n.type==='symbol').forEach(n=>{n.rot=((n.rot||0)+90)%360;ch=true});if(ch){draw();save()}}});
 // タブUI
 const pal=document.createElement('div');pal.style.cssText='position:absolute;top:12px;left:12px;z-index:30;width:260px;background:rgba(15,23,42,.95);border:1px solid #334155;border-radius:12px;overflow:hidden';
 const tabs=document.createElement('div');tabs.style.cssText='display:flex;background:#0f172a;border-bottom:1px solid #334155';
 const body=document.createElement('div');body.style.cssText='padding:8px;display:grid;grid-template-columns:repeat(4,1fr);gap:6px;max-height:300px;overflow:auto';
 pal.appendChild(tabs);pal.appendChild(body);document.querySelector('main').appendChild(pal);
 const cats=Object.keys(symbols);let cur='スイッチ';
 function render(){tabs.innerHTML='';body.innerHTML='';cats.forEach(c=>{const b=document.createElement('button');b.textContent=c;b.style.cssText=`padding:6px 8px;font-size:11px;border:none;background:${c===cur?'#0284c7':'transparent'};color:${c===cur?'white':'#94a3b8'}`;b.onclick=()=>{cur=c;render()};tabs.appendChild(b)});Object.entries(symbols[cur]||{}).forEach(([k,s])=>{const b=document.createElement('button');b.title=s.name;b.style.cssText='padding:4px;background:#1e293b;border:1px solid #334155;border-radius:6px';b.innerHTML=`<svg viewBox="-16 -16 32 32" width="28" height="28">${s.svg}</svg>`;b.onclick=()=>{nodes.push({id:nextId++,type:'symbol',x:200,y:200,rot:0,svg:s.svg,name:s.name,selected:true});draw();save()};body.appendChild(b)})}
 render();
});
})();
