/* kairo-symbols_v33.js v2 - 完全独立 / 本体非干渉 */
(()=>{const KEY='kairo_sym_v2'; // ← 新キーで古いデータ無視
const SYM={
 "スイッチ":{single:{n:"片切",s:'<circle cx="0" cy="0" r="6" fill="#000"/>'},three:{n:"3路",s:'<circle cx="-6" cy="0" r="6" fill="#000"/><text x="7" y="4" font-size="14" fill="#000">3</text>'},four:{n:"4路",s:'<circle cx="-6" cy="0" r="6" fill="#000"/><text x="7" y="4" font-size="14" fill="#000">4</text>'},h:{n:"H",s:'<circle cx="-6" cy="0" r="6" fill="#000"/><text x="7" y="4" font-size="14" fill="#000">H</text>'},threeh:{n:"3H",s:'<circle cx="-6" cy="0" r="6" fill="#000"/><text x="7" y="4" font-size="13" fill="#000">3H</text>'}},
 "コンセント":{one:{n:"1口",s:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><path d="M-12,4 A12,12 0 0,0 12,4" fill="#000"/><path d="M-4,-10 V4 M4,-10 V4" stroke="#000" stroke-width="2" fill="none"/>'},two:{n:"2口",s:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><path d="M-12,4 A12,12 0 0,0 12,4" fill="#000"/><path d="M-4,-10 V4 M4,-10 V4" stroke="#000" stroke-width="2" fill="none"/><text x="15" y="5" font-size="12" fill="#000">2</text>'},et:{n:"E付",s:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><path d="M-12,4 A12,12 0 0,0 12,4" fill="#000"/><text x="15" y="5" font-size="11" fill="#000">E</text>'},wp:{n:"WP",s:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><path d="M-12,4 A12,12 0 0,0 12,4" fill="#000"/><text x="15" y="5" font-size="10" fill="#000">WP</text>'},ev:{n:"EV",s:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><path d="M-12,4 A12,12 0 0,0 12,4" fill="#000"/><text x="15" y="5" font-size="11" fill="#000">EV</text>'},v200:{n:"200V",s:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><path d="M-12,4 A12,12 0 0,0 12,4" fill="#000"/><text x="15" y="5" font-size="10" fill="#000">200</text>'}},
 "照明":{dl:{n:"DL",s:'<circle cx="0" cy="0" r="11" fill="none" stroke="#000" stroke-width="2"/><circle cx="0" cy="0" r="4" fill="none" stroke="#000" stroke-width="2"/>'},br:{n:"BL",s:'<circle cx="0" cy="0" r="11" fill="none" stroke="#000" stroke-width="2"/><path d="M0,-11 A11,11 0 0,11" fill="#000"/>'},cl:{n:"CL",s:'<circle cx="0" cy="0" r="11" fill="none" stroke="#000" stroke-width="2"/><path d="M-4,-5 A5,5 0 0,0 -4,5 M4,-5 A5,5 0 0,1 4,5" stroke="#000" fill="none" stroke-width="1.5"/>'}},
 "換気扇":{fan:{n:"換気",s:'<circle cx="0" cy="0" r="11" fill="none" stroke="#000" stroke-width="2"/><path d="M-7,-7 L7,7 M-7,7 L7,-7" stroke="#000" stroke-width="2"/><circle cx="0" cy="0" r="2.5" fill="#000"/>'},bath:{n:"浴室",s:'<rect x="-11" y="-7" width="22" height="14" fill="none" stroke="#000" stroke-width="2"/><path d="M-7,-5 L7,5 M-7,5 L7,-5" stroke="#000" stroke-width="1.5"/>'},hood:{n:"フード",s:'<path d="M-12,-5 L0,-10 L12,-5 L12,5 L-12,5 Z" fill="none" stroke="#000" stroke-width="2"/>'}},
 "分電盤":{main:{n:"分電盤",s:'<rect x="-12" y="-9" width="24" height="18" fill="none" stroke="#000" stroke-width="2"/><path d="M-12,9 L12,-9" stroke="#000" stroke-width="2"/>'},sub:{n:"サブ",s:'<rect x="-10" y="-7" width="20" height="14" fill="none" stroke="#000" stroke-width="2"/><text x="0" y="3" text-anchor="middle" font-size="9" fill="#000">S</text>'},info:{n:"情報",s:'<rect x="-12" y="-8" width="24" height="16" fill="none" stroke="#000" stroke-width="2"/><circle cx="0" cy="0" r="3.5" fill="none" stroke="#000" stroke-width="1.5"/>'}},
 "弱電":{tv:{n:"TV",s:'<circle cx="0" cy="0" r="11" fill="none" stroke="#000" stroke-width="2"/><text x="0" y="3" text-anchor="middle" font-size="10" fill="#000">TV</text>'},lan:{n:"LAN",s:'<rect x="-9" y="-6" width="18" height="12" fill="none" stroke="#000" stroke-width="2"/><text x="0" y="3" text-anchor="middle" font-size="7" fill="#000">LAN</text>'},tel:{n:"TEL",s:'<circle cx="0" cy="0" r="11" fill="none" stroke="#000" stroke-width="2"/><path d="M-5,-3 Q0,-8 5,-3" fill="none" stroke="#000" stroke-width="1.5"/>'}}
};
localStorage.setItem(KEY,JSON.stringify(SYM));

function wait(f){typeof window.draw==='function'&&window.nodes?f():setTimeout(()=>wait(f),30)}
wait(()=>{
 // 1. シンボルは配線計算から完全に分離
 const symbols=[];
 const origRebuild=window.rebuild;
 window.rebuild=function(){origRebuild();}; // 元のrebuildはそのまま使う
 const origDraw=window.draw;
 window.draw=function(){
   origDraw();
   const nl=document.getElementById('nodes');
   symbols.forEach(n=>{
     const g=document.createElementNS('http://www.w3.org/2000/svg','g');
     g.setAttribute('transform',`translate(${n.x},${n.y}) rotate(${n.rot||0}) scale(1.25)`);
     g.innerHTML=n.svg; g.style.cursor='pointer';
     if(n.sel)g.setAttribute('filter','url(#glow)');
     g.onmousedown=e=>{e.stopPropagation();if(window.mode==='move')n.drag=true};
     g.onmouseup=()=>n.drag=false;
     g.onmousemove=e=>{if(n.drag){const p=window.getM?window.getM(e):{x:n.x,y:n.y};n.x=Math.round(p.x/10)*10;n.y=Math.round(p.y/10)*10;draw()}};
     g.onclick=e=>{e.stopPropagation();n.sel=!n.sel;draw()};
     nl.appendChild(g);
   });
 };
 // 2. Rキー回転
 addEventListener('keydown',e=>{if(e.key.toLowerCase()==='r'){symbols.filter(s=>s.sel).forEach(s=>s.rot=(s.rot+90)%360);draw()}});
 // 3. UI
 const box=document.createElement('div');box.style.cssText='position:absolute;top:10px;left:10px;z-index:99;width:260px;background:#0f172ae6;border:1px solid #334155;border-radius:10px';
 const tabs=document.createElement('div');tabs.style.cssText='display:flex;flex-wrap:wrap;padding:5px;gap:3px;border-bottom:1px solid #334155';
 const grid=document.createElement('div');grid.style.cssText='display:grid;grid-template-columns:repeat(4,1fr);gap:5px;padding:6px;max-height:260px;overflow:auto';
 box.append(tabs,grid);document.querySelector('main').append(box);
 let cur=Object.keys(SYM)[0];
 function render(){tabs.innerHTML='';grid.innerHTML='';Object.keys(SYM).forEach(k=>{const b=document.createElement('button');b.textContent=k;b.style.cssText=`padding:4px 5px;font-size:11px;border-radius:5px;border:1px solid ${k===cur?'#0ea5e9':'#475569'};background:${k===cur?'#075985':'#1e293b'};color:#e2e8f0`;b.onclick=()=>{cur=k;render()};tabs.append(b)});Object.values(SYM[cur]).forEach(v=>{const b=document.createElement('button');b.style.cssText='background:#1e293b;border:1px solid #475569;border-radius:6px;height:56px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px';const prev=v.s.replace(/#000/g,'#cbd5e1');b.innerHTML=`<svg viewBox="-14 -14 28 28" width="26" height="26">${prev}</svg><span style="font-size:9px;color:#94a3b8">${v.n}</span>`;b.onclick=()=>{symbols.push({x:200,y:160,rot:0,svg:v.s,sel:true});draw()};grid.append(b)})}
 render();
});
})();
