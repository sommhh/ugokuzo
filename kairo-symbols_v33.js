/* kairo-symbols_v33.js v1.0 - タブ分け / 回転(R) / 本体無改造 */
(()=>{const DB='kairo_symbols_v33';
let SYM=JSON.parse(localStorage.getItem(DB)||'null');
if(!SYM){
 SYM={
  "スイッチ":{
   single:{n:"片切",s:'<circle cx="0" cy="0" r="6" fill="#000"/>'},
   threeway:{n:"3路",s:'<circle cx="-6" cy="0" r="6" fill="#000"/><text x="6" y="4" font-size="14" font-weight="700" fill="#000">3</text>'},
   fourway:{n:"4路",s:'<circle cx="-6" cy="0" r="6" fill="#000"/><text x="6" y="4" font-size="14" font-weight="700" fill="#000">4</text>'},
   pilot:{n:"パイロット",s:'<circle cx="-6" cy="0" r="6" fill="#000"/><path d="M6,-6 V6 H14" fill="none" stroke="#000" stroke-width="2"/>'},
   hotaru:{n:"ほたる",s:'<circle cx="-6" cy="0" r="6" fill="#000"/><text x="6" y="4" font-size="14" font-weight="700" fill="#000">H</text>'},
   threeway_hotaru:{n:"3路H",s:'<circle cx="-6" cy="0" r="6" fill="#000"/><text x="6" y="4" font-size="14" font-weight="700" fill="#000">3H</text>'}
  },
  "コンセント":{
   single:{n:"1口",s:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><path d="M-12,4 A12,12 0 0,0 12,4 Z" fill="#000"/><path d="M-4,-10 V4 M4,-10 V4" fill="none" stroke="#000" stroke-width="2"/>'},
   double:{n:"2口",s:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><path d="M-12,4 A12,12 0 0,0 12,4 Z" fill="#000"/><path d="M-4,-10 V4 M4,-10 V4" fill="none" stroke="#000" stroke-width="2"/><text x="16" y="6" font-size="14" font-weight="700" fill="#000">2</text>'},
   triple:{n:"3口",s:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><path d="M-12,4 A12,12 0 0,0 12,4 Z" fill="#000"/><path d="M-4,-10 V4 M4,-10 V4" fill="none" stroke="#000" stroke-width="2"/><text x="16" y="6" font-size="14" font-weight="700" fill="#000">3</text>'},
   et:{n:"ET",s:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><path d="M-12,4 A12,12 0 0,0 12,4 Z" fill="#000"/><path d="M-4,-10 V4 M4,-10 V4" fill="none" stroke="#000" stroke-width="2"/><text x="16" y="6" font-size="14" font-weight="700" fill="#000">ET</text>'},
   eet:{n:"EET",s:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><path d="M-12,4 A12,12 0 0,0 12,4 Z" fill="#000"/><path d="M-4,-10 V4 M4,-10 V4" fill="none" stroke="#000" stroke-width="2"/><text x="16" y="6" font-size="14" font-weight="700" fill="#000">EET</text>'},
   wp:{n:"防雨",s:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><path d="M-12,4 A12,12 0 0,0 12,4 Z" fill="#000"/><path d="M-4,-10 V4 M4,-10 V4" fill="none" stroke="#000" stroke-width="2"/><text x="16" y="6" font-size="14" font-weight="700" fill="#000">WP</text>'},
   ac:{n:"エアコン",s:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><path d="M-12,4 A12,12 0 0,0 12,4 Z" fill="#000"/><path d="M-4,-10 V4 M4,-10 V4" fill="none" stroke="#000" stroke-width="2"/><text x="16" y="6" font-size="14" font-weight="700" fill="#000">AC</text>'},
   ev:{n:"EV",s:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><path d="M-12,4 A12,12 0 0,0 12,4 Z" fill="#000"/><path d="M-4,-10 V4 M4,-10 V4" fill="none" stroke="#000" stroke-width="2"/><text x="16" y="6" font-size="14" font-weight="700" fill="#000">EV</text>'},
   v200:{n:"200V",s:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><path d="M-12,4 A12,12 0 0,0 12,4 Z" fill="#000"/><path d="M-4,-10 V4 M4,-10 V4" fill="none" stroke="#000" stroke-width="2"/><text x="16" y="6" font-size="14" font-weight="700" fill="#000">200V</text>'}
  },
  "照明器具":{
   base:{n:"ベース",s:'<rect x="-20" y="-6" width="40" height="12" fill="none" stroke="#000" stroke-width="2"/><circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/>'},
   bracket:{n:"ブラケット",s:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><path d="M0,-12 A12,12 0 0,0 0,12 Z" fill="#000"/>'},
   downlight:{n:"ダウン",s:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><text x="0" y="2" text-anchor="middle" font-size="14" font-weight="700" fill="#000">DL</text>'},
   ceiling:{n:"シーリング",s:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><path d="M-4,-6 A6,6 0 0,0 -4,6 M4,-6 A6,6 0 0,1 4,6" fill="none" stroke="#000" stroke-width="2"/>'}
  },
  "弱電":{
   tel:{n:"TEL",s:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><path d="M0,-12 A12,12 0 0,0 0,12 Z" fill="#000"/><circle cx="0" cy="0" r="5" fill="#000"/>'},
   tv:{n:"TV",s:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><text x="0" y="5" text-anchor="middle" font-size="12" font-weight="700" fill="#000">TV</text>'},
   lan:{n:"LAN",s:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><text x="0" y="5" text-anchor="middle" font-size="10" font-weight="700" fill="#000">LAN</text>'},
   intercom:{n:"インターホン",s:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><text x="0" y="5" text-anchor="middle" font-size="12" font-weight="700" fill="#000">I</text>'}
  },
  "分電盤":{
   panel:{n:"分電盤",s:'<rect x="-20" y="-10" width="40" height="20" fill="none" stroke="#000" stroke-width="2"/><path d="M-20,10 L20,-10 L20,10 Z" fill="#000"/>'},
   info:{n:"情報盤",s:'<rect x="-20" y="-10" width="40" height="20" fill="none" stroke="#000" stroke-width="2"/><path d="M-20,10 L20,-10" fill="none" stroke="#000" stroke-width="3"/>'}
  },
  "ボックス":{
   jb:{n:"ジョイント",s:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><text x="0" y="5" text-anchor="middle" font-size="16" font-weight="700" fill="#000">J</text>'}
  }
 }; localStorage.setItem(DB,JSON.stringify(SYM));
}
const save=()=>localStorage.setItem(DB,JSON.stringify(SYM));

function ready(f){if(typeof draw==='function'&&window.nodes) f(); else setTimeout(()=>ready(f),50)}
ready(()=>{
 // シンボルを配線計算から除外
 const _rb=rebuild; rebuild=()=>{const keep=nodes.filter(n=>n.type==='symbol');nodes=nodes.filter(n=>n.type!=='symbol');_rb();nodes.push(...keep)};
 // 描画フック
 const _dw=draw; draw=()=>{_dw();const nl=document.getElementById('nodes');nodes.filter(n=>n.type==='symbol').forEach(n=>{const g=document.createElementNS('http://www.w3.org/2000/svg','g');g.setAttribute('transform',`translate(${n.x},${n.y}) rotate(${n.rot||0}) scale(1.35)`);g.style.cursor='pointer';if(n.selected)g.setAttribute('filter','url(#glow)');g.innerHTML=n.svg;g.onmousedown=e=>{e.stopPropagation();if(window.mode==='move')window.dragging=n};g.onclick=e=>{e.stopPropagation();n.selected=!n.selected;draw()};nl.appendChild(g)})};
 // Rキーで回転
 addEventListener('keydown',e=>{if(e.key.toLowerCase()==='r'&&nodes.some(n=>n.selected&&n.type==='symbol')){nodes.filter(n=>n.selected&&n.type==='symbol').forEach(n=>n.rot=((n.rot||0)+90)%360);draw();save()}});
 // UI
 const wrap=document.createElement('div');wrap.style.cssText='position:absolute;top:10px;left:10px;z-index:40;width:260px;background:#0f172af2;border:1px solid #334155;border-radius:12px;overflow:hidden;backdrop-filter:blur(6px)';
 const tabs=document.createElement('div');tabs.style.cssText='display:flex;flex-wrap:wrap;background:#020617;border-bottom:1px solid #334155';
 const grid=document.createElement('div');grid.style.cssText='display:grid;grid-template-columns:repeat(4,1fr);gap:6px;padding:8px;max-height:280px;overflow:auto';
 wrap.append(tabs,grid);document.querySelector('main').append(wrap);
 const cats=Object.keys(SYM);let cur=cats[0];
 function render(){tabs.innerHTML='';grid.innerHTML='';cats.forEach(c=>{const b=document.createElement('button');b.textContent=c;b.style.cssText=`padding:6px 4px;font-size:11px;border:none;flex:1 0 auto;background:${c===cur?'#0369a1':'transparent'};color:#e2e8f0`;b.onclick=()=>{cur=c;render()};tabs.append(b)});Object.entries(SYM[cur]).forEach(([k,v])=>{const b=document.createElement('button');b.title=v.n;b.style.cssText='aspect-ratio:1;background:#1e293b;border:1px solid #334155;border-radius:8px;display:flex;align-items:center;justify-content:center';b.innerHTML=`<svg viewBox="-16 -16 32 32" width="28" height="28">${v.s}</svg>`;b.onclick=()=>{nodes.push({id:nextId++,type:'symbol',x:240,y:180,rot:0,svg:v.s,name:v.n,selected:true});draw();save()};grid.append(b)})}
 render();
});
})();
