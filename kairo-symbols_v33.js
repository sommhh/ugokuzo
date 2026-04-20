/* kairo-symbols_v33.js v1.1 - 完全版 */
(()=>{const DB='kairo_symbols_v33';
let SYM=JSON.parse(localStorage.getItem(DB)||'null');
if(!SYM){
 SYM={
  "スイッチ":{
   single:{n:"片切",s:'<circle cx="0" cy="0" r="6" fill="#000"/>'},
   threeway:{n:"3路",s:'<circle cx="-6" cy="0" r="6" fill="#000"/><text x="6" y="4" font-size="14" font-weight="700" fill="#000">3</text>'},
   fourway:{n:"4路",s:'<circle cx="-6" cy="0" r="6" fill="#000"/><text x="6" y="4" font-size="14" font-weight="700" fill="#000">4</text>'},
   hotaru:{n:"ほたる",s:'<circle cx="-6" cy="0" r="6" fill="#000"/><text x="6" y="4" font-size="14" font-weight="700" fill="#000">H</text>'},
   pilot:{n:"パイロット",s:'<circle cx="-6" cy="0" r="6" fill="#000"/><path d="M6,-6 V6 H12" fill="none" stroke="#000" stroke-width="2"/>'},
   threeway_hotaru:{n:"3路H",s:'<circle cx="-6" cy="0" r="6" fill="#000"/><text x="6" y="4" font-size="14" font-weight="700" fill="#000">3H</text>'}
  },
  "コンセント":{
   single:{n:"1口",s:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><path d="M-12,4 A12,12 0 0,0 12,4 Z" fill="#000"/><path d="M-4,-10 V4 M4,-10 V4" fill="none" stroke="#000" stroke-width="2"/>'},
   double:{n:"2口",s:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><path d="M-12,4 A12,12 0 0,0 12,4 Z" fill="#000"/><path d="M-4,-10 V4 M4,-10 V4" fill="none" stroke="#000" stroke-width="2"/><text x="16" y="6" font-size="14" font-weight="700" fill="#000">2</text>'},
   triple:{n:"3口",s:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><path d="M-12,4 A12,12 0 0,0 12,4 Z" fill="#000"/><path d="M-4,-10 V4 M4,-10 V4" fill="none" stroke="#000" stroke-width="2"/><text x="16" y="6" font-size="14" font-weight="700" fill="#000">3</text>'},
   et:{n:"アース付",s:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><path d="M-12,4 A12,12 0 0,0 12,4 Z" fill="#000"/><path d="M-4,-10 V4 M4,-10 V4" fill="none" stroke="#000" stroke-width="2"/><text x="16" y="6" font-size="13" font-weight="700" fill="#000">E</text>'},
   eet:{n:"抜止E",s:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><path d="M-12,4 A12,12 0 0,0 12,4 Z" fill="#000"/><path d="M-4,-10 V4 M4,-10 V4" fill="none" stroke="#000" stroke-width="2"/><text x="16" y="6" font-size="11" font-weight="700" fill="#000">EE</text>'},
   wp:{n:"防水",s:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><path d="M-12,4 A12,12 0 0,0 12,4 Z" fill="#000"/><path d="M-4,-10 V4 M4,-10 V4" fill="none" stroke="#000" stroke-width="2"/><text x="16" y="6" font-size="11" font-weight="700" fill="#000">WP</text>'},
   ev:{n:"EV",s:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><path d="M-12,4 A12,12 0 0,0 12,4 Z" fill="#000"/><path d="M-4,-10 V4 M4,-10 V4" fill="none" stroke="#000" stroke-width="2"/><text x="16" y="6" font-size="12" font-weight="700" fill="#000">EV</text>'},
   v200:{n:"200V",s:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><path d="M-12,4 A12,12 0 0,0 12,4 Z" fill="#000"/><path d="M-4,-10 V4 M4,-10 V4" fill="none" stroke="#000" stroke-width="2"/><text x="16" y="6" font-size="11" font-weight="700" fill="#000">200</text>'}
  },
  "照明器具":{
   downlight:{n:"ダウン",s:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><circle cx="0" cy="0" r="5" fill="none" stroke="#000" stroke-width="2"/>'},
   bracket:{n:"ブラケット",s:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><path d="M0,-12 A12,12 0 0,0 0,12 Z" fill="#000"/>'},
   ceiling:{n:"シーリング",s:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><path d="M-5,-5 A7,7 0 0,0 -5,5 M5,-5 A7,7 0 0,1 5,5" fill="none" stroke="#000" stroke-width="2"/>'}
  },
  "換気扇":{
   fan:{n:"換気扇",s:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><path d="M-8,-8 L8,8 M-8,8 L8,-8" stroke="#000" stroke-width="2"/><circle cx="0" cy="0" r="3" fill="#000"/>'},
   bath:{n:"浴室換気",s:'<rect x="-12" y="-8" width="24" height="16" fill="none" stroke="#000" stroke-width="2"/><path d="M-8,-8 L8,8 M-8,8 L8,-8" stroke="#000" stroke-width="1.5"/>'},
   hood:{n:"レンジフード",s:'<path d="M-14,-6 L0,-12 L14,-6 L14,6 L-14,6 Z" fill="none" stroke="#000" stroke-width="2"/><path d="M-8,0 H8" stroke="#000" stroke-width="1.5"/>'}
  },
  "分電盤":{
   main:{n:"分電盤",s:'<rect x="-14" y="-10" width="28" height="20" fill="none" stroke="#000" stroke-width="2"/><path d="M-14,10 L14,-10" stroke="#000" stroke-width="2"/>'},
   sub:{n:"サブ盤",s:'<rect x="-12" y="-8" width="24" height="16" fill="none" stroke="#000" stroke-width="2"/><text x="0" y="3" text-anchor="middle" font-size="10" font-weight="700" fill="#000">S</text>'},
   info:{n:"情報盤",s:'<rect x="-14" y="-10" width="28" height="20" fill="none" stroke="#000" stroke-width="2"/><circle cx="0" cy="0" r="4" fill="none" stroke="#000" stroke-width="1.5"/>'}
  },
  "弱電":{
   tv:{n:"TV",s:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><text x="0" y="4" text-anchor="middle" font-size="11" font-weight="700" fill="#000">TV</text>'},
   lan:{n:"LAN",s:'<rect x="-10" y="-7" width="20" height="14" fill="none" stroke="#000" stroke-width="2"/><text x="0" y="3" text-anchor="middle" font-size="8" font-weight="700" fill="#000">LAN</text>'},
   tel:{n:"TEL",s:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><path d="M-6,-4 Q0,-10 6,-4 Q0,2 -6,-4" fill="none" stroke="#000" stroke-width="1.5"/>'}
  }
 }; localStorage.setItem(DB,JSON.stringify(SYM));
}
const save=()=>localStorage.setItem(DB,JSON.stringify(SYM));

function init(){if(typeof draw!=='undefined'){start()}else setTimeout(init,50)}
function start(){
 const _rb=rebuild; rebuild=()=>{const keep=nodes.filter(n=>n.type==='symbol');nodes=nodes.filter(n=>n.type!=='symbol');_rb();nodes.push(...keep)};
 const _dw=draw; draw=()=>{_dw();const nl=document.getElementById('nodes');nodes.filter(n=>n.type==='symbol').forEach(n=>{const g=document.createElementNS('http://www.w3.org/2000/svg','g');g.setAttribute('transform',`translate(${n.x},${n.y}) rotate(${n.rot||0}) scale(1.3)`);g.innerHTML=n.svg;g.style.cursor='pointer';if(n.selected)g.setAttribute('filter','url(#glow)');g.onmousedown=e=>{e.stopPropagation();if(mode==='move')dragging=n};g.onclick=e=>{e.stopPropagation();n.selected=!n.selected;draw()};nl.appendChild(g)})};
 addEventListener('keydown',e=>{if(e.key.toLowerCase()==='r'){nodes.filter(n=>n.selected&&n.type==='symbol').forEach(n=>n.rot=((n.rot||0)+90)%360);draw();save()}});
 
 const ui=document.createElement('div');ui.style.cssText='position:absolute;top:10px;left:10px;z-index:50;width:270px;background:#0b1220f2;border:1px solid #334155;border-radius:12px;box-shadow:0 4px 20px #0008';
 const tabs=document.createElement('div');tabs.style.cssText='display:flex;flex-wrap:wrap;gap:2px;padding:6px;background:#020617;border-bottom:1px solid #334155';
 const grid=document.createElement('div');grid.style.cssText='display:grid;grid-template-columns:repeat(4,1fr);gap:6px;padding:8px;max-height:300px;overflow:auto';
 ui.append(tabs,grid);document.querySelector('main').append(ui);
 
 let cur=Object.keys(SYM)[0];
 function render(){tabs.innerHTML='';grid.innerHTML='';Object.keys(SYM).forEach(k=>{const b=document.createElement('button');b.textContent=k;b.style.cssText=`padding:5px 6px;font-size:11px;border-radius:6px;border:1px solid ${k===cur?'#0ea5e9':'#334155'};background:${k===cur?'#0c4a6e':'#1e293b'};color:#e2e8f0`;b.onclick=()=>{cur=k;render()};tabs.append(b)});Object.entries(SYM[cur]).forEach(([id,v])=>{const b=document.createElement('button');b.title=v.n;b.style.cssText='aspect-ratio:1;background:#1e293b;border:1px solid #475569;border-radius:8px;display:flex;align-items:center;justify-content:center;';const prev=v.s.replace(/#000/g,'#e2e8f0');b.innerHTML=`<svg viewBox="-16 -16 32 32" width="28" height="28">${prev}</svg><span style="position:absolute;bottom:2px;font-size:9px;color:#94a3b8">${v.n}</span>`;b.style.position='relative';b.onclick=()=>{nodes.push({id:nextId++,type:'symbol',x:220,y:180,rot:0,svg:v.s,name:v.n,selected:true});draw();save()};grid.append(b)})}
 render();
}
init();
})();
