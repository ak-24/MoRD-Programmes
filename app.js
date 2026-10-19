/* MoRD Programmes · independent explainer · data: PRS Legislative Research, Lok Sabha answers (2025) */
(function(){



const ORDER = ['work','home','road','women','skills','pension','land'];
Object.keys(T).forEach(l=>{ Object.assign(T[l].ui, X[l].ui); ORDER.forEach(k=>{ T[l].p[k].st = X[l].st[k]; }); });

const I = {
  speaker:'<path d="M4 9.5v5h3.5L12 18V6L7.5 9.5z"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/>',
  stop:'<rect x="6.5" y="6.5" width="11" height="11" rx="1.5"/>',
  arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
  back:'<path d="M19 12H5M11 6l-6 6 6 6"/>',
  warn:'<path d="M12 4 2.8 19.5h18.4z"/><path d="M12 10v4.5M12 17v.2"/>',
  grid:'<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>',
  globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.8 3.8 5.8 3.8 9s-1.3 6.2-3.8 9c-2.5-2.8-3.8-5.8-3.8-9S9.5 5.8 12 3z"/>',
  dot:'<circle cx="12" cy="12" r="3" fill="currentColor" stroke="none"/>',
  down:'<path d="M12 5v14M6 13l6 6 6-6"/>',
  /* programmes */
  work:'<path d="M14 3.5 20.5 10"/><path d="M17.2 6.8 10 14"/><path d="M11.8 12.2 5.4 18.6a1.9 1.9 0 0 1-2.7-2.7L9.1 9.5z"/><path d="M8 11l5 5"/>',
  home:'<path d="M3.5 11 12 4l8.5 7"/><path d="M5.5 9.5V20h13V9.5"/><path d="M10 20v-5h4v5"/>',
  road:'<path d="M8.5 3 4 21M15.5 3 20 21"/><path d="M12 4v2.5M12 10v3M12 16.5V20"/>',
  women:'<circle cx="12" cy="8" r="3"/><path d="M6.5 20a5.5 5.5 0 0 1 11 0"/><circle cx="5" cy="10" r="2.1"/><circle cx="19" cy="10" r="2.1"/><path d="M1.8 18a3.4 3.4 0 0 1 4-3M22.2 18a3.4 3.4 0 0 0-4-3"/>',
  skills:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.4-3.4a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/>',
  pension:'<circle cx="15.5" cy="7" r="3.5"/><path d="M15.5 5.6v2.8"/><path d="M2.5 14.5H6l4.2 1.4h3.3a1.5 1.5 0 0 1 0 3H9.5"/><path d="M13.5 18.4 19 15.6a1.6 1.6 0 0 1 2 2.4L15 21H6"/><path d="M6 13.5V21"/>',
  land:'<path d="M12 21v-9"/><path d="M12 12c0-4 3-7 8-7 0 4-3 7-8 7z"/><path d="M12 14.5c0-3-2.5-5.5-7-5.5 0 3 2.5 5.5 7 5.5z"/><path d="M5 21h14"/>',
  /* facts + steps */
  rupee:'<circle cx="12" cy="12" r="9"/><path d="M8.5 7.5h7M8.5 10.5h7M10.5 7.5c3.6 0 3.6 6 0 6H9l5.5 3.5"/>',
  cal:'<rect x="3.5" y="5" width="17" height="15" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
  tag:'<path d="M3.5 12.2V4.5a1 1 0 0 1 1-1h7.7l8.3 8.3-8.7 8.7z"/><circle cx="8" cy="8" r="1.4"/>',
  card:'<rect x="3" y="5.5" width="18" height="13" rx="2"/><circle cx="8.5" cy="11" r="2"/><path d="M5.8 16a3 3 0 0 1 5.4 0M14 10h4M14 13.5h3"/>',
  ask:'<path d="M8 12.5V6a1.5 1.5 0 0 1 3 0v5M11 10.5V4.5a1.5 1.5 0 0 1 3 0v6M14 10.5V6a1.5 1.5 0 0 1 3 0v7.5c0 4-2.5 7-6.2 7-2.4 0-3.9-1.1-5.2-3.1L3.8 14.2a1.4 1.4 0 0 1 2.3-1.6L8 14.5"/>',
  pin:'<path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.4"/>',
  bank:'<path d="M3 9.5 12 4l9 5.5M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 20.5h18"/>',
  list:'<path d="M9 6h11M9 12h11M9 18h11"/><circle cx="4.5" cy="6" r="1"/><circle cx="4.5" cy="12" r="1"/><circle cx="4.5" cy="18" r="1"/>',
  check:'<circle cx="12" cy="12" r="9"/><path d="m8 12.5 2.8 2.8L16.5 9.5"/>',
  camera:'<path d="M3.5 8h3.2L8.3 5.5h7.4L17.3 8h3.2v11h-17z"/><circle cx="12" cy="13.2" r="3.3"/>',
  map:'<path d="M3 6.5 9 4l6 2.5L21 4v13.5L15 20l-6-2.5L3 20z"/><path d="M9 4v13.5M15 6.5V20"/>',
  hammer:'<path d="M13 9 4.6 17.4a2 2 0 0 0 2.8 2.8L15.8 11.8"/><path d="m11.5 6.5 3-3 6 6-3 3z"/>',
  shield:'<path d="M12 3 5 6v5.5c0 4.4 3 7.9 7 9.5 4-1.6 7-5.1 7-9.5V6z"/><path d="m9 12 2.2 2.2L15.5 10"/>',
  coins:'<ellipse cx="9" cy="7" rx="5" ry="2.5"/><path d="M4 7v4c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5V7"/><path d="M10 15.6c.9 1.1 2.9 1.9 5 1.9 2.8 0 5-1.1 5-2.5v-4c0-1.4-2.2-2.5-5-2.5"/>',
  gift:'<rect x="3.5" y="8" width="17" height="4" rx="1"/><path d="M5 12v8h14v-8M12 8v12"/><path d="M12 8C10.5 4.5 6.5 4.5 6.5 6.5S10 8 12 8zm0 0c1.5-3.5 5.5-3.5 5.5-1.5S14 8 12 8z"/>',
  trend:'<path d="M3 17 9.5 10.5l4 4L21 7"/><path d="M15 7h6v6"/>',
  enrol:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M19 8v6M16 11h6"/>',
  book:'<path d="M12 6.5C10 5 7 4.5 3.5 5v13c3.5-.5 6.5 0 8.5 1.5 2-1.5 5-2 8.5-1.5V5C17 4.5 14 5 12 6.5zM12 6.5v13"/>',
  brief:'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 12.5h18"/>',
  heart:'<path d="M12 20s-7.5-4.5-7.5-10A4.3 4.3 0 0 1 12 7.5 4.3 4.3 0 0 1 19.5 10c0 5.5-7.5 10-7.5 10z"/>',
  form:'<path d="M6 3h9l4 4v14H6z"/><path d="M15 3v4h4M9 12h7M9 16h5"/>',
  search:'<circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5"/>',
  drop:'<path d="M12 3.5s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
  monitor:'<rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M8.5 20h7M12 16v4"/>'
};
const ic = (k,cls) => `<svg class="ico${cls?' '+cls:''}" viewBox="0 0 24 24" aria-hidden="true">${I[k]}</svg>`;


Object.keys(MS).forEach(l=>Object.assign(T[l].ui, MS[l]));


const MAPK = ['home','road','work','women'];
const BRK = {home:[40,60,80,95], road:[2000,8000,16000,25000], work:[5,15,35,60], women:[20000,100000,300000,600000]};
const MSRC = {home:['https://eparlib.sansad.in/bitstream/123456789/2995490/1/AU3744_yZJWba.pdf','Lok Sabha, 12.08.2025'],
  road:['https://eparlib.sansad.in/bitstream/123456789/3013297/1/AU2852_q1vSiu.pdf','Lok Sabha, 18.03.2025'],
  work:['https://eparlib.sansad.in/bitstream/123456789/2997031/1/AU456_IxRjkP.pdf','Lok Sabha, 22.07.2025'],
  women:['https://eparlib.sansad.in/bitstream/123456789/2988504/1/AU1203_MfL9P6.pdf','Lok Sabha, 11.02.2025']};
let mapMetric='home', mapState=null;
const STEPI = {work:['card','ask','pin','bank'],home:['list','check','camera','rupee'],road:['map','check','hammer','shield'],women:['women','coins','gift','trend'],skills:['enrol','book','brief','heart'],pension:['form','search','check','bank'],land:['monitor','map','drop','land']};
const IMGW = {"hero": [480, 662], "band": [480, 960, 1400], "work": [480, 960, 1410], "home": [480, 750], "road": [480, 960, 1600], "women": [480, 960, 1280], "skills": [480, 960, 990], "pension": [480, 960, 1260], "land": [480, 960, 1024]};
const sa = (k,sizes) => { const w=IMGW[k], d=w[Math.min(1,w.length-1)]; return `src="img/${k}-${d}.webp" srcset="${w.map(x=>`img/${k}-${x}.webp ${x}w`).join(', ')}" sizes="${sizes}"`; };
const IMG = {work:'img/work.jpg',home:'img/home.jpg',road:'img/road.jpg',women:'img/women.jpg',skills:'img/skills.jpg',pension:'img/pension.jpg',land:'img/land.jpg'};
const POS = {work:'50% 45%',home:'50% 45%',road:'50% 62%',women:'50% 40%',skills:'50% 40%',pension:'45% 45%',land:'50% 55%'};
const META = {
  work:{scheme:'VB-G RAM G',full:'Viksit Bharat – Guarantee for Rozgar and Ajeevika Mission (Gramin)',year:'2026',budget:95692,pct:48},
  home:{scheme:'PMAY-G',full:'Pradhan Mantri Awaas Yojana – Gramin',year:'2016',budget:54917,pct:70},
  road:{scheme:'PMGSY',full:'Pradhan Mantri Gram Sadak Yojana',year:'2000',budget:19000,pct:94},
  women:{scheme:'DAY-NRLM',full:'Deendayal Antyodaya Yojana – National Rural Livelihoods Mission',year:'2011',budget:19200,pct:48},
  skills:{scheme:'DDU-GKY',full:'Deen Dayal Upadhyaya Grameen Kaushalya Yojana',year:'2014',budget:null,pct:69},
  pension:{scheme:'NSAP',full:'National Social Assistance Programme',year:'1995',budget:9671,pct:null},
  land:{scheme:'DILRMP · PMKSY-WDC',full:'Digital India Land Records Modernization Programme · PMKSY Watershed Development',year:'2008',budget:2625,pct:15}
};
const BARS = [['work',95692,'VB-G RAM G'],['home',54917,'PMAY-G'],['closing',30000,'MGNREGS'],['women',19200,'DAY-NRLM + DDU-GKY'],['road',19000,'PMGSY'],['pension',9671,'NSAP'],['land',2625,'PMKSY-WDC + DILRMP']];
const TIMELINE = [['1995','pension','NSAP'],['2000','road','PMGSY'],['2005','work','MGNREGA'],['2008','land','DILRMP'],['2011','women','NRLM'],['2014','skills','DDU-GKY'],['2016','home','PMAY-G'],['2026','work','VB-G RAM G']];
const SPEECH = {en:'en-IN',hi:'hi-IN',bn:'bn-IN',ta:'ta-IN',te:'te-IN',mr:'mr-IN'};
const LANGS = [['en','English','English'],['hi','हिन्दी','Hindi'],['bn','বাংলা','Bengali'],['ta','தமிழ்','Tamil'],['te','తెలుగు','Telugu'],['mr','मराठी','Marathi']];
const PRS = 'https://prsindia.org/files/budget/budget_parliament/2026/DfG_Analysis_2026-27-Rural_Development.pdf';

let lang='en', cur=null, tab=0, screen='home', large=false;
try { const s=localStorage.getItem('rde-lang'); if (s && T[s]) lang=s; } catch(e) {}
try { large = localStorage.getItem('rde-large')==='1'; } catch(e) {}
const $ = id => document.getElementById(id);
const L = () => T[lang];
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const num = n => n.toLocaleString('en-IN');
const budgetText = k => META[k].budget ? `₹${num(META[k].budget)} ${L().ui.crore}` : L().ui.within;
const ministry = () => L().ui.eyebrow.split('·')[0].trim();
const foot = () => `<footer class="foot"><div class="wrap">${esc(L().ui.disc)} <a href="${PRS}" target="_blank" rel="noopener">${esc(L().ui.source)} ↗</a></div></footer>`;

/* speech */
const synth = window.speechSynthesis; let speakTok=0, speaking=null;
function allVoices(){ try{ return (synth&&synth.getVoices())||[]; }catch(e){ return []; } }
function voicesFor(l){ const pre=SPEECH[l].split('-')[0]; return allVoices().filter(v=>v.lang&&v.lang.replace('_','-').toLowerCase().startsWith(pre)); }
function vScore(v,code){ const n=v.name||''; let s=0;
  if (/linda/i.test(n)) s+=9;
  if (/natural|neural|wavenet|studio/i.test(n)) s+=7;
  if (/google/i.test(n)) s+=5;
  if (/premium|enhanced/i.test(n)) s+=4;
  if (/online/i.test(n)) s+=1;
  if (v.lang.replace('_','-').toLowerCase()===code.toLowerCase()) s+=3;
  if (/espeak|compact|eloquence/i.test(n)) s-=6;
  return s; }
function prefKey(){ return 'rde-voice-'+lang; }
function pickVoice(){
  const list=voicesFor(lang); if (!list.length) return allVoices().length?null:undefined;
  let pref=null; try{ pref=localStorage.getItem(prefKey()); }catch(e){}
  if (pref){ const v=list.find(x=>x.voiceURI===pref||x.name===pref); if (v) return v; }
  const code=SPEECH[lang]; return list.slice().sort((a,b)=>vScore(b,code)-vScore(a,code))[0]; }
function chunks(text){
  const parts=String(text).replace(/([.!?।])\s+/g,'$1\u0001').split('\u0001'); const out=[]; let cur='';
  parts.forEach(p=>{ if ((cur+' '+p).length>220 && cur){ out.push(cur); cur=p; } else cur=cur?cur+' '+p:p; });
  if (cur) out.push(cur); return out; }
function toast(m){ const t=$('toast'); t.textContent=m; t.hidden=false; clearTimeout(toast._t); toast._t=setTimeout(()=>t.hidden=true,4500); }
function setListen(b,on){ if(!b) return; b.innerHTML=ic(on?'stop':'speaker')+`<span class="t">${esc(on?L().ui.stop:L().ui.listen)}</span>`; b.classList.toggle('on',on); b.setAttribute('aria-pressed',on?'true':'false'); b.setAttribute('aria-label',on?L().ui.stop:L().ui.listen); }
function stopSpeak(){ speakTok++; if (synth) synth.cancel(); speaking=null; document.querySelectorAll('.listen').forEach(b=>setListen(b,false)); }
function speak(text,b){
  if (!synth || typeof SpeechSynthesisUtterance==='undefined'){ toast(L().ui.noVoice); return; }
  if (b && speaking===b){ stopSpeak(); return; } stopSpeak();
  const v=pickVoice(); if (v===null){ toast(L().ui.noVoice); return; }
  const tok=++speakTok, q=chunks(text); speaking=b||null; setListen(b,true);
  const next=i=>{ if (tok!==speakTok) return; if (i>=q.length){ if (speaking===b) stopSpeak(); return; }
    const u=new SpeechSynthesisUtterance(q[i]); u.lang=SPEECH[lang]; if (v) u.voice=v; u.rate=0.95; u.pitch=1;
    u.onend=()=>next(i+1); u.onerror=()=>{ if (tok===speakTok) stopSpeak(); };
    synth.speak(u); };
  setTimeout(()=>next(0), 80);
}
function voiceOptions(){ const u=L().ui, list=voicesFor(lang); let pref='auto'; try{ pref=localStorage.getItem(prefKey())||'auto'; }catch(e){}
  return `<option value="auto">${esc(u.voiceAuto)}${list.length?` (${esc(pickVoice()?.name||'')})`:''}</option>`+
    list.map(v=>`<option value="${esc(v.voiceURI)}"${v.voiceURI===pref?' selected':''}>${esc(v.name)}</option>`).join(''); }
if (synth && 'onvoiceschanged' in synth) synth.onvoiceschanged=()=>{ const s=$('voiceSel'); if (s) s.innerHTML=voiceOptions(); };
function sayText(){
  const u=L().ui, P=L().p;
  if (screen==='lang') return u.choose;
  if (screen==='home') return [u.title, u.sub, ...ORDER.map(k=>P[k].name+'. '+P[k].line)].join('. ').replace(/([.।])\./g,'$1');
  const p=P[cur], parts=[p.name,p.line,u.tabs[tab]];
  if (tab===0) parts.push(...p.about);
  if (tab===1) p.st.forEach(([t,l],j)=>parts.push((j+1)+'. '+t+'. '+l));
  if (tab===2){ parts.push(p.s1v+' '+p.s1l, p.s2v+' '+p.s2l); if (META[cur].pct!=null&&p.pct) parts.push(p.pct); }
  if (tab===3) parts.push(...p.ch);
  return parts.join('. ').replace(/([.।])\./g,'$1');
}

/* fonts: Latin faces load with the page; Indian scripts load on demand */
const FONTS = {hi:'Devanagari',mr:'Devanagari',bn:'Bengali',ta:'Tamil',te:'Telugu'};
function ensureFonts(l){ const s=FONTS[l]; if (!s || document.getElementById('f-'+s)) return;
  const ln=document.createElement('link'); ln.id='f-'+s; ln.rel='stylesheet';
  ln.href=`https://fonts.googleapis.com/css2?family=Noto+Sans+${s}:wght@400;500;600&family=Noto+Serif+${s}:wght@500;600&display=swap`;
  document.head.appendChild(ln); }
/* chrome */
function chrome(){
  const u=L().ui;
  document.documentElement.lang=lang; ensureFonts(lang);
  const ml=$('miniLang'); if (ml) ml.setAttribute('aria-label', u.choose);
  document.documentElement.classList.toggle('lg',large);
  $('brandName').textContent=u.app; $('brandSub').textContent=ministry();
  const sel=$('langSel'); sel.innerHTML=LANGS.map(([c,n])=>`<option value="${c}" lang="${c}"${c===lang?' selected':''}>${n}</option>`).join('');
  sel.setAttribute('aria-label',u.choose);
  $('lgLabel').textContent=u.large;
  document.querySelectorAll('[data-large]').forEach(b=>b.setAttribute('aria-pressed',large?'true':'false'));
  setListen($('hdrListen'), speaking===$('hdrListen'));
}


const mv = (m,st) => { const v=MAPD[m][st]; return (v===undefined||v===null)?null:v; };
const mn = (m,v) => m==='home'?v[0]:v;
const mcls = (m,v) => v===null?'nd':'c'+(1+BRK[m].filter(b=>mn(m,v)>=b).length);
const lk = n => n>=100000 ? `${(n/100000).toLocaleString('en-IN',{maximumFractionDigits:1})} ${L().ui.lakh}` : num(n);
function mfmt(m,v,st){ const u=L().ui;
  if (v===null) return u.nodata;
  if (m==='home') return v[0]+'%';
  if (m==='road') return num(v)+' km';
  if (m==='work') return v===0 ? (st==='West Bengal'?'0':u.under1) : `${v} ${u.lakh}`;
  return num(v); }
function legendLabels(m){ const b=BRK[m], u=L().ui;
  const f = m==='home'?(x=>x+'%'):m==='work'?(x=>x):m==='women'?lk:num;
  const tail = m==='work'?' '+u.lakh:'';
  return ['< '+f(b[0])+tail, f(b[0])+'–'+f(b[1])+tail, f(b[1])+'–'+f(b[2])+tail, f(b[2])+'–'+f(b[3])+tail, f(b[3])+'+'+tail]; }
function mapBlock(m, tabs){
  const u=L().ui, names=Object.keys(GEO);
  const rows=names.filter(s=>mv(m,s)!==null).sort((a,b)=>mn(m,mv(m,b))-mn(m,mv(m,a)));
  const max=Math.max(...rows.map(s=>mn(m,mv(m,s))))||1;
  const sel=mapState && GEO[mapState] ? mapState : null;
  const order=names.filter(s=>s!==sel).concat(sel?[sel]:[]);
  const sv=sel?mv(m,sel):null;
  const card = sel ? `<div class="scard" aria-live="polite"><span class="sn">${esc(sel)}</span><span class="sv">${esc(mfmt(m,sv,sel))}</span>${m==='home'&&sv?`<span class="s2">${esc(u.ofTarget.replace('{c}',num(sv[1])).replace('{t}',num(sv[2])))}</span>`:''}</div>`
                   : `<div class="scard hint">${ic('pin')}<span>${esc(u.tapHint)}</span></div>`;
  const lab=legendLabels(m);
  return `<div class="mapbox" data-metric="${m}" data-tabs="${tabs?1:0}">
    ${tabs?`<div class="tabs mtabs" role="tablist">${MAPK.map(k=>`<button class="tab" type="button" role="tab" aria-selected="${k===m}" data-metric="${k}">${ic(k)}<span>${esc(L().p[k].name)}</span></button>`).join('')}</div>`:''}
    <div class="mapgrid">
      <figure class="map"><svg viewBox="0 0 ${600} ${670}" role="img" aria-label="${esc(u.m[m])}">
        <defs><pattern id="ndp" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect class="ndp-bg" width="6" height="6"/><line class="ndp-ln" x1="0" y1="0" x2="0" y2="6"/></pattern></defs>
        ${order.map(s=>{ const v=mv(m,s); return `<path d="${GEO[s]}" class="${mcls(m,v)}${s===sel?' on':''}" data-st="${esc(s)}"><title>${esc(s)}: ${esc(mfmt(m,v,s))}</title></path>`; }).join('')}
      </svg></figure>
      <div class="mside">
        <p class="eyebrow">${esc(u.m[m])}</p>
        ${card}
        <div class="legend">${lab.map((x,i)=>`<span><i class="c${i+1}"></i>${esc(x)}</span>`).join('')}<span><i class="nd"></i>${esc(u.nodata)}</span></div>
        ${u.mn[m]?`<p class="mnote">${esc(u.mn[m])}</p>`:''}
        <p class="msrc">${esc(u.sources)}: <a href="${MSRC[m][0]}" target="_blank" rel="noopener">${esc(MSRC[m][1])} ↗</a></p>
        <h3>${esc(u.allStates)}</h3>
        <ol class="rank">${rows.map((s,i)=>{ const v=mv(m,s); return `<li><button type="button" data-st="${esc(s)}" aria-current="${s===sel}"><span class="rn">${i+1}</span><span>${esc(s)}</span><span class="rv">${esc(mfmt(m,v,s))}</span><span class="rb"><i style="width:${Math.max(mn(m,v)/max*100,.8).toFixed(1)}%"></i></span></button></li>`; }).join('')}</ol>
      </div>
    </div></div>`;
}
function rerenderMap(box){ box.outerHTML = mapBlock(box.dataset.metric, box.dataset.tabs==='1'); }

function renderHome(){
  const u=L().ui, P=L().p, max=BARS[0][1];
  $('s-home').innerHTML = `
  <div class="wrap">
    <div class="hero">
      <div>
        <h1>${esc(u.title)}</h1>
        <p class="sub">${esc(u.sub)}</p>
        <button class="cta" type="button" data-scroll="progs"><span>${esc(u.explore)}</span>${ic('arrow')}</button>
      </div>
      <figure>
        <img ${sa('hero','(max-width:800px) 100vw, 46vw')} alt="${esc(P.women.name)}" fetchpriority="high" decoding="async">
        <figcaption class="chip"><b>${esc(u.budgetTotal)}</b><span>${esc(u.budget)}</span></figcaption>
      </figure>
    </div>

    <div class="ease">
      <button type="button" data-say="page" data-tile="listen"><span class="ic">${ic('speaker')}</span><span><b>${esc(u.listenT)}</b><small>${esc(u.listenS)}</small></span></button>
      <button type="button" data-go="lang"><span class="ic">${ic('globe')}</span><span><b>${esc(u.langT)}</b><small>${esc(u.langS)}</small></span></button>
      <button type="button" data-large="1" aria-pressed="${large}"><span class="ic"><span class="aa">Aa</span></span><span><b>${esc(u.largeT)}</b><small>${esc(u.largeS)}</small></span></button>
    </div>

    <div class="glance">
      <div><b>${esc(P.home.s1v)}</b><span>${esc(P.home.name)} · ${esc(P.home.s1l)}</span></div>
      <div><b>${esc(P.road.s1v)}</b><span>${esc(P.road.name)} · ${esc(P.road.s1l)}</span></div>
      <div><b>${esc(P.women.s1v)}</b><span>${esc(P.women.s1l)}</span></div>
      <div><b>${esc(P.skills.s1v)}</b><span>${esc(P.skills.s1l)}</span></div>
    </div>

    <section class="sec" id="progs">
      <div class="sh"><h2 class="h2">${esc(u.programmes)}</h2></div>
      <div class="grid">${ORDER.map(k=>`<button class="card" type="button" data-prog="${k}">
        <span class="ph"><img ${sa(k,'(max-width:640px) 100vw, (max-width:1000px) 50vw, 400px')} alt="" loading="lazy" decoding="async" style="object-position:${POS[k]}"><span class="tag">${esc(META[k].scheme)}</span></span>
        <span class="bd"><span class="pi">${ic(k)}</span><span class="nm">${esc(P[k].name)}</span><span class="go">${ic('arrow')}</span><span class="ln">${esc(P[k].line)}</span></span></button>`).join('')}</div>
    </section>

    <section class="sec" id="states">
      <div class="sh"><h2 class="h2">${esc(u.mapTitle)}</h2><p>${esc(u.mapSub)}</p></div>
      ${mapBlock(mapMetric,true)}
    </section>

    <section class="sec">
      <div class="money">
        <div>
          <p class="eyebrow">${esc(u.budget)}</p>
          <h2 class="h2">${esc(u.budgetTitle)}</h2>
          <div class="total"><b>${esc(u.budgetTotal)}</b><span>${esc(u.budgetUnit)}</span></div>
        </div>
        <div class="bars">${BARS.map(([k,v,ac])=>{
          const label=k==='closing'?u.closing:P[k].name, isBtn=k!=='closing', tagN=isBtn?'button':'div';
          return `<${tagN} class="brow${isBtn?'':' dim'}" ${isBtn?`type="button" data-prog="${k}"`:''}>
            <span class="bl">${esc(label)}<small>${esc(ac)}</small></span><span class="bv">${num(v)}</span>
            <span class="track"><span class="fill" style="width:${Math.max(v/max*100,1.2).toFixed(1)}%"></span></span></${tagN}>`;}).join('')}</div>
      </div>
    </section>

    <section class="sec">
      <div class="sh"><h2 class="h2">${esc(u.timeline)}</h2></div>
      <div class="rail">${TIMELINE.map(([y,k,ac])=>`<button class="yr" type="button" data-prog="${k}"><span class="y">${y}</span><b>${esc(ac)}</b><span>${esc(P[k].name)}</span></button>`).join('')}</div>
    </section>

    <section class="sec">
      <div class="band">
        <img ${sa('band','(max-width:1216px) 100vw, 1216px')} alt="" loading="lazy" decoding="async">
        <div class="in"><h2>${esc(u.closingLine)}</h2><button class="cta light" type="button" data-scroll="progs"><span>${esc(u.explore)}</span>${ic('arrow')}</button></div>
      </div>
    </section>
  </div>
  ${foot()}`;
}

function renderProg(){
  const k=cur, p=L().p[k], u=L().ui, m=META[k], i=ORDER.indexOf(k), nextK=ORDER[(i+1)%ORDER.length];
  let body='';
  if (tab===0) body=`<ul class="items">${p.about.map(x=>`<li><span class="mk">${ic(k)}</span><span>${esc(x)}</span></li>`).join('')}</ul>`;
  if (tab===1) body=`<ol class="steps">${p.st.map(([t,l],j)=>`<li><span class="num">${j+1}</span><span class="si">${ic(STEPI[k][j])}</span><b>${esc(t)}</b><span>${esc(l)}</span></li>`).join('')}</ol>`;
  if (tab===2) body=`<div class="pstats"><div><b>${esc(p.s1v)}</b><span>${esc(p.s1l)}</span></div><div><b>${esc(p.s2v)}</b><span>${esc(p.s2l)}</span></div></div>`+
    (m.pct!=null&&p.pct?`<div class="meter" role="img" aria-label="${esc(p.pct)}"><div class="top"><p>${esc(p.pct)}</p><b>${m.pct}%</b></div><div class="tr"><div class="fl" style="width:${m.pct}%"></div></div></div>`:'');
  if (tab===2 && MAPK.includes(k)) body+=`<div class="pmap"><h3 class="h2">${esc(u.mapTitle)}</h3>${mapBlock(k,false)}</div>`;
  if (tab===3) body=`<ul class="items warn">${p.ch.map(x=>`<li><span class="mk">${ic('warn')}</span><span>${esc(x)}</span></li>`).join('')}</ul>`;
  const others=ORDER.filter(o=>o!==k);
  $('s-prog').innerHTML = `
  <div class="wrap">
    <div class="crumbrow"><button class="crumb" type="button" data-go="home">${ic('back')}<span>${esc(u.home)}</span></button></div>
    <div class="pb">
      <img ${sa(k,'(max-width:1216px) 100vw, 1216px')} alt="${esc(p.name)}" decoding="async" style="object-position:${POS[k]}">
      <div class="in">
        <span class="pic">${ic(k)}</span>
        <h1>${esc(p.name)}</h1>
        <p class="full" lang="en">${esc(m.full)}</p>
        <p class="line">${esc(p.line)}</p>
      </div>
    </div>
    <div class="facts">
      <div><span class="fi">${ic('rupee')}</span><span><span class="dt">${esc(u.budget)}</span><span class="dd">${esc(budgetText(k))}</span></span></div>
      <div><span class="fi">${ic('cal')}</span><span><span class="dt">${esc(u.started)}</span><span class="dd">${esc(m.year)}</span></span></div>
      <div><span class="fi">${ic('tag')}</span><span><span class="dt">${esc(u.scheme)}</span><span class="dd">${esc(m.scheme)}</span></span></div>
    </div>
    <div class="tabs" role="tablist">${u.tabs.map((t,j)=>`<button class="tab" type="button" role="tab" aria-selected="${j===tab}" data-tab="${j}">${esc(t)}</button>`).join('')}</div>
    <div role="tabpanel">
      <div class="phead"><h2 class="h2">${esc(u.tabs[tab])}</h2><button class="pill accent listen" type="button" data-say="page"></button></div>
      ${body}
    </div>
    <div class="navrow">
      <button class="navbtn" type="button" data-go="home">${ic('grid')}<span>${esc(u.home)}</span></button>
      <div class="dots" aria-hidden="true">${ORDER.map((o,j)=>`<i class="${j===i?'on':''}"></i>`).join('')}</div>
      <button class="navbtn primary" type="button" data-prog="${nextK}"><span>${esc(u.next)}</span>${ic('arrow')}</button>
    </div>
    <div class="more"><h2 class="h2" style="font-size:clamp(1.4rem,2.4vw,1.8rem)">${esc(u.programmes)}</h2>
      <div class="row">${others.map(o=>`<button class="mini" type="button" data-prog="${o}"><img ${sa(o,'(max-width:640px) 60vw, 240px')} alt="" loading="lazy" decoding="async" style="object-position:${POS[o]}"><span>${ic(o)}${esc(L().p[o].name)}</span></button>`).join('')}</div></div>
  </div>
  ${foot()}`;
  document.querySelectorAll('#s-prog .listen').forEach(b=>setListen(b,false));
}

function renderLang(){
  $('s-lang').innerHTML=`<div class="wrap lwrap">
    <div class="crumbrow"><button class="crumb" type="button" data-go="back">${ic('back')}<span>${esc(cur&&lastScreen==='prog'?L().p[cur].name:L().ui.home)}</span></button></div>
    <p class="eyebrow">Language · भाषा · ভাষা · மொழி · భాష</p><h1 class="h2">${esc(L().ui.choose)}</h1>
    <div class="langs">${LANGS.map(([c,n,e])=>`<button class="lang" type="button" lang="${c}" data-lang="${c}" aria-pressed="${c===lang}"><b>${n}</b><small lang="en">${e}</small></button>`).join('')}</div>
    <div class="voicebox"><label for="voiceSel">${esc(L().ui.voice)}</label>
      <span class="sel"><select id="voiceSel">${voiceOptions()}</select><svg class="ico c" viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg></span>
      <button class="pill accent listen-test" type="button" data-vtest="1">${ic('speaker')}<span>${esc(L().ui.voiceTest)}</span></button>
      <p>${esc(L().ui.voiceNote)}</p></div></div>`;
}

let lastScreen='home';
function show(id){ ['s-home','s-prog','s-lang'].forEach(s=>$(s).hidden=(s!==id)); }
function setHash(h, push){ const url=h?'#'+h:location.pathname+location.search; if ((location.hash||'')===(h?'#'+h:'')) return;
  try{ push ? history.pushState(null,'',url) : history.replaceState(null,'',url); }catch(e){} }
function render(){ if (screen==='prog') renderProg(); else if (screen==='lang') renderLang(); else renderHome(); }
function go(scr,k,fromHistory){ stopSpeak();
  if (scr!=='lang') lastScreen=scr;
  screen=scr; mapState=null; if (scr==='prog'){ cur=k; tab=0; }
  render(); show('s-'+scr); window.scrollTo(0,0);
  if (!fromHistory) setHash(scr==='prog'?k:scr==='lang'?'languages':'', true); }
function setLang(c){ lang=c; try{localStorage.setItem('rde-lang',c);}catch(e){} stopSpeak(); chrome(); }
function setLarge(on){ large=on; try{localStorage.setItem('rde-large',on?'1':'0');}catch(e){} chrome(); }

document.addEventListener('change', e=>{ if (e.target.id==='voiceSel'){ try{ if (e.target.value==='auto') localStorage.removeItem(prefKey()); else localStorage.setItem(prefKey(), e.target.value); }catch(err){} } });
document.addEventListener('click', e=>{ const p=e.target.closest('path[data-st]'); if (!p) return; const box=p.closest('.mapbox'); mapState=p.dataset.st; rerenderMap(box); });
$('langSel').addEventListener('change', e=>{ const y=window.scrollY; setLang(e.target.value); render(); window.scrollTo(0,y); });

document.addEventListener('click', e=>{
  const b=e.target.closest('button'); if (!b) return;
  if (b.dataset.skip){ const m=$('main'); m.focus(); m.scrollIntoView(); return; }
  if (b.dataset.metric){ mapMetric=b.dataset.metric; mapState=null; const box=b.closest('.mapbox'); box.dataset.metric=mapMetric; rerenderMap(box); return; }
  if (b.dataset.st){ const box=b.closest('.mapbox'); mapState=b.dataset.st; rerenderMap(box); return; }
  if (b.dataset.vtest){ stopSpeak(); speak(L().ui.title+'. '+L().ui.sub, null); return; }
  if (b.dataset.lang){ setLang(b.dataset.lang); go(lastScreen, cur); return; }
  if (b.dataset.prog){ go('prog',b.dataset.prog); return; }
  if (b.dataset.tab){ stopSpeak(); tab=+b.dataset.tab; renderProg(); return; }
  if (b.dataset.large){ setLarge(!large); return; }
  if (b.dataset.scroll){ const t=$(b.dataset.scroll); if (t) t.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'}); return; }
  if (b.dataset.say){ const target = b.dataset.tile ? $('hdrListen') : b; speak(sayText(), target); return; }
  if (b.dataset.go==='back'){ if (history.length>1 && location.hash==='#languages') history.back(); else go(lastScreen, cur); return; }
  if (b.dataset.go==='lang'){ go('lang'); return; }
  if (b.dataset.go==='home'||b.id==='brand'){ go('home'); return; }
});

chrome();
function route(fromHistory){ const h=(location.hash||'').replace('#','');
  if (ORDER.includes(h)) go('prog',h,fromHistory); else if (h==='languages') go('lang',null,fromHistory); else go('home',null,fromHistory); }
window.addEventListener('popstate', ()=>route(true));
route(true);
})();
