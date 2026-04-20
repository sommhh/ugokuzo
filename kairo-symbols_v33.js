/* kairo-symbols_v33.js v2.2 - 選択ハイライト / ユーザー登録保持 */
(()=>{const USER_KEY='kairo_symbols_v33'; // あなたが前に入れたデータ
const DEF={
 "スイッチ":{s1:{n:"片切",s:'<circle cx="0" cy="0" r="6" fill="#000"/>'},s3:{n:"3路",s:'<circle cx="-6" cy="0" r="6" fill="#000"/><text x="7" y="4" font-size="14" fill="#000">3</text>'}},
 "コンセント":{c1:{n:"1口",s:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><path d="M-12,4 A12,12 0 0,0 12,4" fill="#000"/>'},c2:{n:"2口",s:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><path d="M-12,4 A12,12 0 0,0 12,4" fill="#000"/><text x="15" y="5" font-size="12" fill="#000">2</text>'}},
 "照明":{dl:{n:"DL",s:'<circle cx="0" cy="0" r="11" fill="none" stroke="#000" stroke-width="2"/>'}},
 "換気扇":{vf:{n:"換気",s:'<circle cx="0" cy="0" r="11" fill="none" stroke="#000" stroke-width="2"/><path d="M-7,-7 L7,7 M-7,7 L7,-7" stroke="#000" stroke-width="2"/>'}},
 "分電盤":{mp:{n:"分電盤",s:'<rect x="-12" y="-9" width="24" height="18" fill="none" stroke="#000" stroke-width="2"/><path d="M-12,9 L12,-9" stroke="#000" stroke-width="2"/>'}},
 "弱電":{tv:{n:"TV",s:'<circle cx="0" cy="0" r="11" fill="none" stroke="#000" stroke-width="2"/><text x="0" y="3" text-anchor="middle" font-size="10" fill="#000">TV</text>'}}
};
// ユーザーデータを優先
let SYM;
try{SYM=JSON.parse(localStorage.getItem(USER_KEY))||DEF}catch{SYM=DEF}
// もしユーザーがコンセントを登録してたらそれを使う
if(!SYM["コンセント"]) SYM["コンセント"]=DEF["コンセント"];

function init(){if(!window.draw)return setTimeout(init,40)
 const symbols=[]; let pending=null; let activeBtn=null;
 const origDraw=window.draw;
 window.draw=function(){origDraw();const nl=document.getElementById('nodes');symbols.forEach(o=>{const g=document.createElementNS('http://www.w3.org/2000/svg','g');g.setAttribute('transform',`translate(${o.x},${o.y}) rotate(${o.r}) scale(1.25)`);g.innerHTML=o.svg;g.style.cursor='move';if(o.sel)g.setAttribute('filter','url(#glow)');g.onmousedown=e=>{e.stopPropagation();o.drag=true};g.onmouseup=()=>o.drag=false;g.onmousemove=e=>{if(o.drag){const m=window.getM(e);o.x=Math.round(m.x/10)*10;o.y=Math.round(m.y/10)*10;draw()}};g.onclick=e=>{e.stopPropagation();o.sel=!o.sel;draw()};nl.appendChild(g)})};

 const svg=document.getElementById('svg');
 svg.addEventListener('mousedown',e=>{if(!pending)return;e.stopPropagation();e.preventDefault();const m=window.getM(e);symbols.push({x:Math.round(m.x/10)*10,y:Math.round(m.y/10)*10,r:0,svg:pending.s,sel:false});pending=null;svg.style.cursor='';if(activeBtn){activeBtn.style.background='#1e293b';activeBtn.style.borderColor='#475569';activeBtn=null}draw()},{capture:true});
 addEventListener('keydown',e=>{if(e.key.toLowerCase()==='r'){symbols.filter(s=>s.sel).forEach(s=>s.r=(s.r+90)%360);draw()}});

 const box=document.createElement('div');box.style.cssText='position:absolute;top:10px;left:10px;z-index:100;width:268px;background:#0f172af2;border:1px solid #334155;border-radius:10px';
 const tabs=document.createElement('div');tabs.style.cssText='display:flex;flex-wrap:wrap;padding:5px;gap:3px';
 const grid=document.createElement('div');grid.style.cssText='display:grid;grid-template-columns:repeat(4,1fr);gap:5px;padding:6px;max-height:260px;overflow:auto';
 box.append(tabs,grid);document.querySelector('main').append(box);
 let cur=Object.keys(SYM)[0];
 function render(){tabs.innerHTML='';grid.innerHTML='';Object.keys(SYM).forEach(k=>{const b=document.createElement('button');b.textContent=k;b.style.cssText=`padding:4px 6px;font-size:11px;border-radius:5px;border:1px solid ${k===cur?'#0ea5e9':'#475569'};background:${k===cur?'#075985':'#1e293b'};color:#e2e8f0`;b.onclick=()=>{cur=k;render()};tabs.append(b)});Object.entries(SYM[cur]||{}).forEach(([id,v])=>{const b=document.createElement('button');b.style.cssText='height:56px;background:#1e293b;border:1px solid #475569;border-radius:6px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;transition:all .15s';b.innerHTML=`<svg viewBox="-14 -14 28 28" width="24" height="24">${v.s.replace(/#000/g,'#cbd5e1')}</svg><span style="font-size:9px;color:#94a3b8">${v.n}</span>`;b.onclick=()=>{if(activeBtn){activeBtn.style.background='#1e293b';activeBtn.style.borderColor='#475569'}activeBtn=b;b.style.background='#ea580c';b.style.borderColor='#f97316';pending=v;svg.style.cursor='crosshair'};grid.append(b)})}
 render();
}
init();
})();
