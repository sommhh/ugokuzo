// kairo-symbols.js v3 - プルダウンでシンボル管理、ユーザーが登録
(function(){
  if(typeof nodes==='undefined'){window.addEventListener('load', arguments.callee); return;}
  const NS='http://www.w3.org/2000/svg';
  const CATS=['コンセント','スイッチ','情報','分電盤','コメント','換気扇','照明器具'];
  const LS='kairo_user_symbols_v13';
  
  let symbols = JSON.parse(localStorage.getItem(LS)||'{}');
  CATS.forEach(c=>{if(!symbols[c]) symbols[c]={};});
  // --- 初期シンボル（換気扇）を自動登録 ---
  if(!symbols['換気扇']['wall']){
    symbols['換気扇']['wall']={name:'換気扇', svg:'<circle cx="0" cy="0" r="12" fill="white" stroke="#000" stroke-width="2"/><circle cx="-5.5" cy="0" r="5" fill="none" stroke="#000" stroke-width="1.8"/><circle cx="5.5" cy="0" r="5" fill="none" stroke="#000" stroke-width="1.8"/>'};
    symbols['換気扇']['ceiling']={name:'天井換気扇', svg:'<rect x="-12" y="-12" width="24" height="24" fill="white" stroke="#000" stroke-width="2"/><circle cx="-6" cy="0" r="5.5" fill="none" stroke="#000" stroke-width="1.8"/><circle cx="6" cy="0" r="5.5" fill="none" stroke="#000" stroke-width="1.8"/>'};
    save();
  }
  if(!symbols['分電盤']['breaker']){
    symbols['分電盤']['breaker']={name:'ブレーカー', svg:'<rect x="-12" y="-12" width="24" height="24" fill="white" stroke="#000" stroke-width="2"/><text x="0" y="2" text-anchor="middle" dominant-baseline="middle" font-family="sans-serif" font-size="18" font-weight="700" fill="#000">B</text>'};
    symbols['分電盤']['elcb']={name:'漏電遮断器', svg:'<rect x="-12" y="-12" width="24" height="24" fill="white" stroke="#000" stroke-width="2"/><text x="0" y="2" text-anchor="middle" dominant-baseline="middle" font-family="sans-serif" font-size="16" font-weight="700" fill="#000">BE</text>'};
    symbols['分電盤']['meter']={name:'メーター', svg:'<rect x="-18" y="-10" width="36" height="20" fill="white" stroke="#000" stroke-width="2"/><text x="0" y="1" text-anchor="middle" dominant-baseline="middle" font-family="sans-serif" font-size="16" font-weight="700" fill="#000">WH</text>'};
    save();
  }
  if(!symbols['照明器具']['base']){
    symbols['照明器具']['base']={name:'天付ベースライト', svg:'<rect x="-20" y="-6" width="40" height="12" fill="none" stroke="#000" stroke-width="2"/><circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/>'};
    save();
  }
  if(!symbols['照明器具']['bracket']){
    symbols['照明器具']['bracket']={name:'ブラケット', svg:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><path d="M0,-12 A12,12 0 0,0 0,12 Z" fill="#000"/>'};
    save();
  }
  if(!symbols['照明器具']['downlight']){
    symbols['照明器具']['downlight']={name:'ダウンライト', svg:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><text x="0" y="2" text-anchor="middle" dominant-baseline="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#000">DL</text>'};
    save();
  }
  if(!symbols['照明器具']['ceiling']){
    symbols['照明器具']['ceiling']={name:'シーリングライト', svg:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><text x="0" y="2" text-anchor="middle" dominant-baseline="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#000">CL</text>'};
    save();
  }
  if(!symbols['照明器具']['ceiling_base']){
    symbols['照明器具']['ceiling_base']={name:'シーリング', svg:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><path d="M-4,-6 A6,6 0 0,0 -4,6" fill="none" stroke="#000" stroke-width="2"/><path d="M4,-6 A6,6 0 0,1 4,6" fill="none" stroke="#000" stroke-width="2"/>'};
    save();
  }



  
  function save(){localStorage.setItem(LS, JSON.stringify(symbols));}
  function backup(){const blob=new Blob([JSON.stringify(symbols,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='kairo_symbols_'+new Date().toISOString().slice(0,10)+'.json';a.click();}
  
  // --- UI作成 ---
  const toolbar = document.querySelector('button[data-mode="label"]').parentElement;
  const wrap=document.createElement('div');wrap.className='flex items-center gap-1 pl-2 border-l border-slate-800';
  CATS.forEach(cat=>{
    const box=document.createElement('div');box.className='flex items-center gap-1 bg-slate-800/40 rounded-lg border border-slate-700/50 px-1.5 py-1';
    const lab=document.createElement('label');lab.className='text-[11px] text-slate-400';lab.textContent=cat.slice(0,2);
    const sel=document.createElement('select');sel.className='bg-transparent text-xs w-20';sel.dataset.cat=cat;sel.style.color='#e2e8f0';
    const updateSel=()=>{sel.innerHTML='<option value="" style="color:#000;background:#fff">-</option>';Object.keys(symbols[cat]).forEach(id=>{const o=document.createElement('option');o.value=id;o.textContent=symbols[cat][id].name;o.style.color='#000';o.style.background='#fff';sel.appendChild(o);});const add=document.createElement('option');add.value='__new__';add.textContent='＋登録';add.style.color='#000';add.style.background='#fff';sel.appendChild(add);};
    updateSel();
    sel.onchange=()=>{
      if(sel.value==='__new__'){
        const name=prompt(cat+'の名前は？'); if(!name) return updateSel();
        const svg=prompt('SVGコードを貼り付けてください（<svg>の中身だけでもOK）\n例: <circle r=10 fill=white stroke=black/>'); if(!svg) return updateSel();
        const id='s'+Date.now(); symbols[cat][id]={name,svg}; save(); updateSel(); sel.value=id;
      }
      window.currentSymbol = sel.value ? {cat, id:sel.value} : null;
      if(window.currentSymbol) setMode('symbol');
    };
    box.appendChild(lab);box.appendChild(sel);wrap.appendChild(box);
  });
  
  toolbar.after(wrap);
  // シンボルサイズスライダー
  const sizeBox=document.createElement('div');sizeBox.className='flex items-center gap-1 bg-slate-800/40 rounded-lg border border-slate-700/50 px-1.5 py-1 ml-1';
  sizeBox.innerHTML='<label class="text-[11px] text-slate-400">記号大</label><input id="symbolSize" type="range" min="0.8" max="2.5" step="0.05" value="'+(localStorage.getItem('kairo_symbol_scale')||'1.35')+'" class="w-16 accent-sky-400">';
  wrap.after(sizeBox);
  const symbolSizeInput=document.getElementById('symbolSize');
  symbolSizeInput.oninput=()=>{localStorage.setItem('kairo_symbol_scale', symbolSizeInput.value); draw();};

  
  // バックアップボタン
  const bk=document.createElement('button');bk.textContent='記号BK';bk.className='px-2.5 py-1.5 text-[12px] rounded-lg bg-slate-800/80 border border-slate-700 ml-1';bk.onclick=backup;
  document.querySelector('#share').parentElement.prepend(bk);
  // 選択中のシンボルの色を変更
  document.getElementById('lineColor')?.addEventListener('change', e=>{
    const sels=nodes.filter(n=>n.selected && n.type==='symbol');
    if(sels.length){sels.forEach(n=>n.color=e.target.value); draw(); save();}
  });

  
  // --- 作成処理 ---
  svg.addEventListener('mousedown', (e)=>{
    if(mode!=='symbol' || !window.currentSymbol) return;
    if(e.button!==0 || spacePan) return;
    e.stopImmediatePropagation();
    const m=getM(e), x=snap(m.x), y=snap(m.y);
    const col=document.getElementById('lineColor')?.value||'#000000'; nodes.push({id:nextId++, type:'symbol', x,y, cat:currentSymbol.cat, sid:currentSymbol.id, rotation:0, selected:false, color:col});
    rebuild(); save(); draw();
  }, true);
  
  // --- 回転 ---
  window.addEventListener('keydown', e=>{
    if(e.key.toLowerCase()==='r' && !e.ctrlKey){
      const sels=nodes.filter(n=>n.selected && n.type==='symbol');
      if(sels.length){sels.forEach(n=>n.rotation=((n.rotation||0)+(e.shiftKey?-90:90)+360)%360); draw(); save();}
    }
  });
  
  // --- draw拡張 ---
  const origDraw=window.draw;
  window.draw=function(){
    linesLayer.innerHTML=''; nodesLayer.innerHTML=''; updateDeleteButton();
    edges.forEach(ed=>{const pts=[ed.a,...ed.bends,ed.b];for(let i=0;i<pts.length-1;i++){const l=document.createElementNS(NS,'line');l.setAttribute('x1',pts[i].x);l.setAttribute('y1',pts[i].y);l.setAttribute('x2',pts[i+1].x);l.setAttribute('y2',pts[i+1].y);l.setAttribute('stroke',ed.selected?'#f97316':(ed.color||'#000000'));l.setAttribute('stroke-width',ed.selected?'4':'2.3');l.setAttribute('stroke-linecap','round');l.style.cursor='pointer';l.addEventListener('click',e=>{e.stopPropagation();ed.selected=!ed.selected;draw();});l.addEventListener('contextmenu',e=>{e.preventDefault();deletedEdges.add(edgeKey(ed.a.id,ed.b.id));edges=edges.filter(ee=>ee!==ed);rebuild();draw();save();});linesLayer.appendChild(l);}if(bending?.edge===ed&&bending.temp){const last=ed.bends.length?ed.bends[ed.bends.length-1]:ed.a;const t=document.createElementNS(NS,'line');t.setAttribute('x1',last.x);t.setAttribute('y1',last.y);t.setAttribute('x2',bending.temp.x);t.setAttribute('y2',bending.temp.y);t.setAttribute('stroke',ed.color||'#000');t.setAttribute('stroke-width','2');t.setAttribute('stroke-dasharray','4 4');t.setAttribute('opacity','0.7');linesLayer.appendChild(t);}});
    nodes.forEach(n=>{const g=document.createElementNS(NS,'g');const rot=n.rotation||0;g.setAttribute('transform',`translate(${n.x},${n.y}) rotate(${rot})`);g.style.cursor=mode==='move'?'move':'pointer';if(n.selected)g.setAttribute('filter','url(#glow)');
      if(n.type==='point'){const c=document.createElementNS(NS,'circle');c.setAttribute('r','3.5');c.setAttribute('fill','#ef4444');c.setAttribute('stroke',n.selected?'#f97316':'#0f172a');c.setAttribute('stroke-width',n.selected?'3':'1.5');g.appendChild(c);}
      else if(n.type==='junction'){const c=document.createElementNS(NS,'circle');c.setAttribute('r',jointSize);c.setAttribute('fill','white');c.setAttribute('stroke',n.selected?'#f97316':'#0f172a');c.setAttribute('stroke-width',n.selected?'3.5':'2');g.appendChild(c);for(let i=-1;i<=1;i++){const l=document.createElementNS(NS,'line');const y=i*jointSize*0.34;l.setAttribute('x1',-jointSize*0.65);l.setAttribute('y1',y);l.setAttribute('x2',jointSize*0.65);l.setAttribute('y2',y);l.setAttribute('stroke','#0f172a');l.setAttribute('stroke-width','1.3');l.setAttribute('transform','rotate(-45)');g.appendChild(l);}}
      else if(n.type==='label'){const c=document.createElementNS(NS,'circle');c.setAttribute('r',labelSize+1);c.setAttribute('fill','white');c.setAttribute('stroke',n.selected?'#f97316':'#0f172a');c.setAttribute('stroke-width',n.selected?'3':'1.8');g.appendChild(c);if(n.voltage==='200V'){const c2=document.createElementNS(NS,'circle');c2.setAttribute('r',(labelSize+1)*0.6);c2.setAttribute('fill','none');c2.setAttribute('stroke',n.selected?'#f97316':'#000000');c2.setAttribute('stroke-width','1.5');g.appendChild(c2);}const t=document.createElementNS(NS,'text');t.setAttribute('text-anchor','middle');t.setAttribute('dominant-baseline','central');t.setAttribute('font-size',Math.round(labelSize*0.95));t.setAttribute('font-weight','800');t.setAttribute('fill',n.color||'#000000');t.textContent=n.circuit;g.appendChild(t);}
      else if(n.type==='symbol'){const def=symbols[n.cat]?.[n.sid];if(def){const wrapper=document.createElementNS(NS,'g');
        // 個別色とサイズ
        const col = n.color || '#000000';
        let svgContent = def.svg.replace(/stroke="#000"/g, `stroke="${col}"`).replace(/fill="#000"/g, `fill="${col}"`);
        const scale = parseFloat(document.getElementById('symbolSize')?.value || localStorage.getItem('kairo_symbol_scale') || '1.35');
        wrapper.setAttribute('transform','scale('+scale+')');
        wrapper.innerHTML=svgContent;
        // 選択時は枠を付ける
        if(n.selected){const s=18*scale; const box=document.createElementNS(NS,'rect');box.setAttribute('x',-s);box.setAttribute('y',-s);box.setAttribute('width',s*2);box.setAttribute('height',s*2);box.setAttribute('fill','none');box.setAttribute('stroke','#f97316');box.setAttribute('stroke-width','2');box.setAttribute('stroke-dasharray','3 3');g.appendChild(box);}
        g.appendChild(wrapper);
      }}
      g.addEventListener('mousedown',e=>{e.stopPropagation();if(mode==='move')dragging=n;});
      g.addEventListener('click',e=>{e.stopPropagation();n.selected=!n.selected;draw();});
      g.addEventListener('contextmenu',e=>{e.preventDefault();const id=n.id;nodes=nodes.filter(nn=>nn.id!==id);edges.filter(ed=>ed.a.id===id||ed.b.id===id).forEach(ed=>{deletedEdges.add(edgeKey(ed.a.id,ed.b.id));});rebuild();draw();save();});
      nodesLayer.appendChild(g);
    });
    update();
  };
  
  // 初回バックアップ
  if(!localStorage.getItem('kairo_sym_first')){localStorage.setItem('kairo_sym_first','1'); setTimeout(backup,1500);}
  draw();
  console.log('kairo-symbols v13: プルダウン登録式');
})();
