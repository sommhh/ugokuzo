// kairo-symbols.js - シンボル機能だけを追加するプラグイン
// 使い方: 完成品HTMLの </body> 直前に <script src="kairo-symbols.js"></script> を1行追加

(function(){
  // 既存のグローバルを待つ
  if(typeof nodes==='undefined'){window.addEventListener('load', arguments.callee); return;}

  const NS='http://www.w3.org/2000/svg';
  
  // --- 1. ツールバーにボタン追加 ---
  const toolbar = document.querySelector('button[data-mode="label"]').parentElement;
  function addModeBtn(mode,label){
    if(document.querySelector(`button[data-mode="${mode}"]`)) return;
    const b=document.createElement('button');
    b.dataset.mode=mode;
    b.className='mode-btn px-2.5 py-1.5 text-[13px] rounded-lg border border-slate-700 bg-slate-800/80';
    b.textContent=label;
    b.onclick=()=>setMode(mode);
    toolbar.appendChild(b);
  }
  addModeBtn('outlet','コンセント');
  addModeBtn('switch','スイッチ');

  // --- 2. シンボル定義（データだけ）---
  const SYM = {
    outlet(g,n){
      const c=document.createElementNS(NS,'circle');
      c.setAttribute('r','12');c.setAttribute('fill','white');
      c.setAttribute('stroke',n.selected?'#f97316':'#000');c.setAttribute('stroke-width','2');
      g.appendChild(c);
      [[-4,-6,-4,6],[4,-6,4,6]].forEach(([x1,y1,x2,y2])=>{
        const l=document.createElementNS(NS,'line');
        l.setAttribute('x1',x1);l.setAttribute('y1',y1);l.setAttribute('x2',x2);l.setAttribute('y2',y2);
        l.setAttribute('stroke','#000');l.setAttribute('stroke-width','1.8');
        g.appendChild(l);
      });
    },
    switch(g,n){
      const c=document.createElementNS(NS,'circle');
      c.setAttribute('r','10');c.setAttribute('fill','white');
      c.setAttribute('stroke',n.selected?'#f97316':'#000');c.setAttribute('stroke-width','2');
      g.appendChild(c);
      const l=document.createElementNS(NS,'line');
      l.setAttribute('x1','-7');l.setAttribute('y1','-7');l.setAttribute('x2','7');l.setAttribute('y2','7');
      l.setAttribute('stroke','#000');l.setAttribute('stroke-width','1.8');
      g.appendChild(l);
    }
  };

  // --- 3. 作成処理を追加（既存のmousedownの前に割り込み）---
  svg.addEventListener('mousedown', (e)=>{
    if(!['outlet','switch'].includes(mode)) return;
    if(e.button!==0 || spacePan) return;
    e.stopImmediatePropagation();
    const m=getM(e), x=snap(m.x), y=snap(m.y);
    const v=document.getElementById('voltage').value;
    const c=document.getElementById('circuit').value;
    nodes.push({id:nextId++, type:mode, x,y, voltage:v, circuit:c, color:currentLineColor, selected:false});
    rebuild(); save(); draw();
  }, true);

  // --- 4. drawを拡張（元をラップ）---
  const origDraw = window.draw;
  window.draw = function(){
    // 元のdrawは point/junction/label しか描けないので、一旦呼んでから上書きするのではなく、
    // ノード描画部分だけ差し替える
    linesLayer.innerHTML=''; nodesLayer.innerHTML=''; updateDeleteButton();
    // --- 線はそのまま ---
    edges.forEach(ed=>{const pts=[ed.a,...ed.bends,ed.b];for(let i=0;i<pts.length-1;i++){const l=document.createElementNS(NS,'line');l.setAttribute('x1',pts[i].x);l.setAttribute('y1',pts[i].y);l.setAttribute('x2',pts[i+1].x);l.setAttribute('y2',pts[i+1].y);l.setAttribute('stroke',ed.selected?'#f97316':(ed.color||'#000000'));l.setAttribute('stroke-width',ed.selected?'4':'2.3');l.setAttribute('stroke-linecap','round');l.style.cursor='pointer';l.addEventListener('click',e=>{e.stopPropagation();ed.selected=!ed.selected;draw();});l.addEventListener('contextmenu',e=>{e.preventDefault();deletedEdges.add(edgeKey(ed.a.id,ed.b.id));edges=edges.filter(ee=>ee!==ed);rebuild();draw();save();});linesLayer.appendChild(l);}if(bending?.edge===ed&&bending.temp){const last=ed.bends.length?ed.bends[ed.bends.length-1]:ed.a;const t=document.createElementNS(NS,'line');t.setAttribute('x1',last.x);t.setAttribute('y1',last.y);t.setAttribute('x2',bending.temp.x);t.setAttribute('y2',bending.temp.y);t.setAttribute('stroke',ed.color||'#000');t.setAttribute('stroke-width','2');t.setAttribute('stroke-dasharray','4 4');t.setAttribute('opacity','0.7');linesLayer.appendChild(t);}});
    // --- ノードは拡張 ---
    nodes.forEach(n=>{const g=document.createElementNS(NS,'g');g.setAttribute('transform','translate('+n.x+','+n.y+')');g.style.cursor=mode==='move'?'move':'pointer';if(n.selected)g.setAttribute('filter','url(#glow)');
      if(n.type==='point'){const c=document.createElementNS(NS,'circle');c.setAttribute('r','3.5');c.setAttribute('fill','#ef4444');c.setAttribute('stroke',n.selected?'#f97316':'#0f172a');c.setAttribute('stroke-width',n.selected?'3':'1.5');g.appendChild(c);}
      else if(n.type==='junction'){const c=document.createElementNS(NS,'circle');c.setAttribute('r',jointSize);c.setAttribute('fill','white');c.setAttribute('stroke',n.selected?'#f97316':'#0f172a');c.setAttribute('stroke-width',n.selected?'3.5':'2');g.appendChild(c);for(let i=-1;i<=1;i++){const l=document.createElementNS(NS,'line');const y=i*jointSize*0.34;l.setAttribute('x1',-jointSize*0.65);l.setAttribute('y1',y);l.setAttribute('x2',jointSize*0.65);l.setAttribute('y2',y);l.setAttribute('stroke','#0f172a');l.setAttribute('stroke-width','1.3');l.setAttribute('transform','rotate(-45)');g.appendChild(l);}}
      else if(n.type==='label'){const c=document.createElementNS(NS,'circle');c.setAttribute('r',labelSize+1);c.setAttribute('fill','white');c.setAttribute('stroke',n.selected?'#f97316':'#0f172a');c.setAttribute('stroke-width',n.selected?'3':'1.8');g.appendChild(c);if(n.voltage==='200V'){const c2=document.createElementNS(NS,'circle');c2.setAttribute('r',(labelSize+1)*0.6);c2.setAttribute('fill','none');c2.setAttribute('stroke',n.selected?'#f97316':'#000000');c2.setAttribute('stroke-width','1.5');g.appendChild(c2);}const t=document.createElementNS(NS,'text');t.setAttribute('text-anchor','middle');t.setAttribute('dominant-baseline','central');t.setAttribute('font-size',Math.round(labelSize*0.95));t.setAttribute('font-weight','800');t.setAttribute('fill',n.color||'#000000');t.textContent=n.circuit;g.appendChild(t);}
      else if(SYM[n.type]){SYM[n.type](g,n);}
      g.addEventListener('mousedown',e=>{e.stopPropagation();if(mode==='move')dragging=n;});
      g.addEventListener('click',e=>{e.stopPropagation();n.selected=!n.selected;draw();});
      g.addEventListener('contextmenu',e=>{e.preventDefault();const id=n.id;nodes=nodes.filter(nn=>nn.id!==id);edges.filter(ed=>ed.a.id===id||ed.b.id===id).forEach(ed=>{deletedEdges.add(edgeKey(ed.a.id,ed.b.id));});rebuild();draw();save();});
      nodesLayer.appendChild(g);
    });
    update();
  };

  // --- 5. 永続化（消えない対策）---
  const LS_KEY='kairo_symbols_v1';
  // カスタムシンボルを保存（今はプリセットのみだが将来用）
  function saveSymbols(){localStorage.setItem(LS_KEY, JSON.stringify({version:1, saved:Date.now()}));}
  function backup(){const data=JSON.stringify({nodes,edges},null,2);const blob=new Blob([data],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='kairo_backup_'+new Date().toISOString().slice(0,10)+'.json';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);}
  // 初回だけ自動バックアップ
  if(!localStorage.getItem(LS_KEY+'_first')){localStorage.setItem(LS_KEY+'_first','1'); setTimeout(backup,2000);}
  // ヘッダーにバックアップボタン追加
  const btn=document.createElement('button');btn.textContent='記号BK';btn.className='px-2.5 py-1.5 text-[12px] rounded-lg bg-slate-800/80 border border-slate-700';btn.onclick=backup;document.querySelector('#share').parentElement.prepend(btn);

  draw();
  console.log('kairo-symbols.js loaded: コンセント/スイッチ追加、自動バックアップ有効');
})();
