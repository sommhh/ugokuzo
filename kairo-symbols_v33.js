// kairo-symbols v33
const LS='kairo_user_symbols_v33';
function load(){try{return JSON.parse(localStorage.getItem(LS)||'{}')}catch(e){return {}}}
function save(){localStorage.setItem(LS,JSON.stringify(symbols))}
let symbols = load();
if(!symbols['照明器具']) symbols['照明器具']={};
if(!symbols['スイッチ']) symbols['スイッチ']={};
if(!symbols['コンセント']) symbols['コンセント']={};
if(!symbols['換気扇']) symbols['換気扇']={};
if(!symbols['ボックス']) symbols['ボックス']={};
if(!symbols['分電盤他']) symbols['分電盤他']={};
if(!symbols['弱電']) symbols['弱電']={};

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
if(!symbols['スイッチ']['single']){
  symbols['スイッチ']['single']={name:'片切スイッチ', svg:'<circle cx="0" cy="0" r="6" fill="#000" stroke="#000" stroke-width="1"/>'};
  save();
}
if(!symbols['スイッチ']['threeway']){
  symbols['スイッチ']['threeway']={name:'3路スイッチ', svg:'<circle cx="-6" cy="0" r="6" fill="#000" stroke="#000" stroke-width="1"/><text x="6" y="4" font-family="sans-serif" font-size="14" font-weight="700" fill="#000">3</text>'};
  save();
}
if(!symbols['スイッチ']['fourway']){
  symbols['スイッチ']['fourway']={name:'4路スイッチ', svg:'<circle cx="-6" cy="0" r="6" fill="#000" stroke="#000" stroke-width="1"/><text x="6" y="4" font-family="sans-serif" font-size="14" font-weight="700" fill="#000">4</text>'};
  save();
}
if(!symbols['スイッチ']['pilot']){
  symbols['スイッチ']['pilot']={name:'パイロットスイッチ', svg:'<circle cx="-6" cy="0" r="6" fill="#000" stroke="#000" stroke-width="1"/><path d="M6,-4 V8 H14" fill="none" stroke="#000" stroke-width="2"/>'};
  save();
}
if(!symbols['スイッチ']['hotaru']){
  symbols['スイッチ']['hotaru']={name:'片切ホタルスイッチ', svg:'<circle cx="-6" cy="0" r="6" fill="#000" stroke="#000" stroke-width="1"/><text x="6" y="4" font-family="sans-serif" font-size="14" font-weight="700" fill="#000">H</text>'};
  save();
}
if(!symbols['コンセント']['double']){
  symbols['コンセント']['double']={name:'2口コンセント', svg:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><path d="M-12,4 A12,12 0 0,0 12,4 Z" fill="#000"/><path d="M-4,-10 V4 M4,-10 V4" fill="none" stroke="#000" stroke-width="2"/><text x="16" y="6" font-family="sans-serif" font-size="14" font-weight="700" fill="#000">2</text>'};
  save();
}
if(!symbols['コンセント']['single']){
  symbols['コンセント']['single']={name:'シングルコンセント', svg:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><path d="M-12,4 A12,12 0 0,0 12,4 Z" fill="#000"/><path d="M-4,-10 V4 M4,-10 V4" fill="none" stroke="#000" stroke-width="2"/>'};
  save();
}
if(!symbols['コンセント']['triple']){
  symbols['コンセント']['triple']={name:'3口コンセント', svg:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><path d="M-12,4 A12,12 0 0,0 12,4 Z" fill="#000"/><path d="M-4,-10 V4 M4,-10 V4" fill="none" stroke="#000" stroke-width="2"/><text x="16" y="6" font-family="sans-serif" font-size="14" font-weight="700" fill="#000">3</text>'};
  save();
}
if(!symbols['コンセント']['et']){
  symbols['コンセント']['et']={name:'アースターミナル付', svg:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><path d="M-12,4 A12,12 0 0,0 12,4 Z" fill="#000"/><path d="M-4,-10 V4 M4,-10 V4" fill="none" stroke="#000" stroke-width="2"/><text x="16" y="6" font-family="sans-serif" font-size="14" font-weight="700" fill="#000">ET</text>'};
  save();
}
if(!symbols['コンセント']['2et']){
  symbols['コンセント']['2et']={name:'2口アースターミナル付', svg:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><path d="M-12,4 A12,12 0 0,0 12,4 Z" fill="#000"/><path d="M-4,-10 V4 M4,-10 V4" fill="none" stroke="#000" stroke-width="2"/><text x="16" y="6" font-family="sans-serif" font-size="14" font-weight="700" fill="#000">2ET</text>'};
  save();
}
if(!symbols['コンセント']['eet']){
  symbols['コンセント']['eet']={name:'接地極付接地端子付', svg:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><path d="M-12,4 A12,12 0 0,0 12,4 Z" fill="#000"/><path d="M-4,-10 V4 M4,-10 V4" fill="none" stroke="#000" stroke-width="2"/><text x="16" y="6" font-family="sans-serif" font-size="14" font-weight="700" fill="#000">EET</text>'};
  save();
}
if(!symbols['コンセント']['2eet']){
  symbols['コンセント']['2eet']={name:'2口接地極付接地端子付', svg:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><path d="M-12,4 A12,12 0 0,0 12,4 Z" fill="#000"/><path d="M-4,-10 V4 M4,-10 V4" fill="none" stroke="#000" stroke-width="2"/><text x="16" y="6" font-family="sans-serif" font-size="14" font-weight="700" fill="#000">2EET</text>'};
  save();
}
if(!symbols['コンセント']['wp']){
  symbols['コンセント']['wp']={name:'防水コンセント', svg:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><path d="M-12,4 A12,12 0 0,0 12,4 Z" fill="#000"/><path d="M-4,-10 V4 M4,-10 V4" fill="none" stroke="#000" stroke-width="2"/><text x="16" y="6" font-family="sans-serif" font-size="14" font-weight="700" fill="#000">WP</text>'};
  save();
}
if(!symbols['コンセント']['2wp']){
  symbols['コンセント']['2wp']={name:'2口防水コンセント', svg:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><path d="M-12,4 A12,12 0 0,0 12,4 Z" fill="#000"/><path d="M-4,-10 V4 M4,-10 V4" fill="none" stroke="#000" stroke-width="2"/><text x="16" y="6" font-family="sans-serif" font-size="14" font-weight="700" fill="#000">2WP</text>'};
  save();
}
if(!symbols['コンセント']['ac']){
  symbols['コンセント']['ac']={name:'エアコン用コンセント', svg:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><path d="M-12,4 A12,12 0 0,0 12,4 Z" fill="#000"/><path d="M-4,-10 V4 M4,-10 V4" fill="none" stroke="#000" stroke-width="2"/><text x="16" y="6" font-family="sans-serif" font-size="14" font-weight="700" fill="#000">AC</text>'};
  save();
}
if(!symbols['コンセント']['senyo']){
  symbols['コンセント']['senyo']={name:'専用コンセント', svg:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><path d="M-12,4 A12,12 0 0,0 12,4 Z" fill="#000"/><path d="M-4,-10 V4 M4,-10 V4" fill="none" stroke="#000" stroke-width="2"/><text x="16" y="6" font-family="sans-serif" font-size="14" font-weight="700" fill="#000">専用</text>'};
  save();
}

if(!symbols['コンセント']['ev']){
  symbols['コンセント']['ev']={name:'EVコンセント', svg:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><path d="M-12,4 A12,12 0 0,0 12,4 Z" fill="#000"/><path d="M-4,-10 V4 M4,-10 V4" fill="none" stroke="#000" stroke-width="2"/><text x="16" y="6" font-family="sans-serif" font-size="14" font-weight="700" fill="#000">EV</text>'};
  save();
}

if(!symbols['コンセント']['v200']){
  symbols['コンセント']['v200']={name:'200Vコンセント', svg:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><path d="M-12,4 A12,12 0 0,0 12,4 Z" fill="#000"/><path d="M-4,-10 V4 M4,-10 V4" fill="none" stroke="#000" stroke-width="2"/><text x="16" y="6" font-family="sans-serif" font-size="14" font-weight="700" fill="#000">200V</text>'};
  save();
}










if(!symbols['ボックス']['joint']){
  symbols['ボックス']['joint']={name:'ジョイントボックス', svg:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><text x="0" y="5" text-anchor="middle" dominant-baseline="middle" font-family="sans-serif" font-size="18" font-weight="700" fill="#000">J</text>'};
  save();
}

if(!symbols['分電盤他']['bundempan']){
  symbols['分電盤他']['bundempan']={name:'分電盤', svg:'<rect x="-20" y="-10" width="40" height="20" fill="none" stroke="#000" stroke-width="2"/><path d="M-20,10 L20,-10 L20,10 Z" fill="#000"/>'};
  save();
}

if(!symbols['分電盤他']['joho']){
  symbols['分電盤他']['joho']={name:'情報盤', svg:'<rect x="-20" y="-10" width="40" height="20" fill="none" stroke="#000" stroke-width="2"/><path d="M-20,10 L20,-10" fill="none" stroke="#000" stroke-width="3"/>'};
  save();
}

if(!symbols['スイッチ']['threeway_hotaru']){
  symbols['スイッチ']['threeway_hotaru']={name:'3路ホタルスイッチ', svg:'<circle cx="-6" cy="0" r="6" fill="#000" stroke="#000" stroke-width="1"/><text x="6" y="4" font-family="sans-serif" font-size="14" font-weight="700" fill="#000">3H</text>'};
  save();
}

if(!symbols['弱電']['tel']){
  symbols['弱電']['tel']={name:'電話', svg:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><path d="M0,-12 A12,12 0 0,0 0,12 Z" fill="#000"/><circle cx="0" cy="0" r="5" fill="#000" stroke="#000" stroke-width="1"/>'};
  save();
}
if(!symbols['弱電']['tv']){
  symbols['弱電']['tv']={name:'TV', svg:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><text x="0" y="5" text-anchor="middle" dominant-baseline="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#000">TV</text>'};
  save();
}
if(!symbols['弱電']['lan']){
  symbols['弱電']['lan']={name:'LAN', svg:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><text x="0" y="5" text-anchor="middle" dominant-baseline="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#000">LAN</text>'};
  save();
}
if(!symbols['弱電']['intercom']){
  symbols['弱電']['intercom']={name:'インターホン', svg:'<circle cx="0" cy="0" r="12" fill="none" stroke="#000" stroke-width="2"/><text x="0" y="5" text-anchor="middle" dominant-baseline="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#000">I</text>'};
  save();
}
