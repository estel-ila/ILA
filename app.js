const ITEMS = [
{key:"video",num:"▶",kind:"video",title:"Spot de lancement",sub:"Vidéo · 59 s",src:"https://cdn.jsdelivr.net/gh/estel-ila/ILA@d7e492bbf1f930073d2308d3d387341ace1886e8/spot-v2.mp4",poster:"https://cdn.jsdelivr.net/gh/estel-ila/ILA@d7e492bbf1f930073d2308d3d387341ace1886e8/poster-v2.jpg",onVisual:[],text:""},
{key:"s01",num:"01",title:"L'affiche principale",onVisual:["LA DRAFT 2K27","ILA × Banlieusard Nouveau","10 jeunes cracks. 2 équipes. Et toi ?","Réalisation / Tournage","Communication digitale","Appel à candidatures","16–30 ans · Île-de-France","Jusqu'au 30 novembre 2026","Découvre ce qui t'attend →"],
text:`10 talents. 2 équipes. Une première sélection à marquer de ton empreinte.

LA DRAFT 2K27 débarque avec ILA et Banlieusard Nouveau. On cherche 10 jeunes cracks d'Île-de-France qui veulent faire de la création leur métier.

5 titulaires en Réalisation / Tournage.
5 titulaires en Communication digitale.

Un espace de 1 000 m², des coachs, des projets concrets et de nouvelles rencontres : de quoi donner une autre dimension à ton ambition.

Tu te vois dans l'équipe ? Fais défiler.

16–30 ans · Candidatures en DM jusqu'au 30 novembre 2026.`},
{key:"s02",num:"02",title:"Le média et le réseau",onVisual:["Crée pour le média du peuple.","Banlieusard Nouveau × ILA","LA DRAFT 2K27","Fais découvrir ton travail.","Élargis ton réseau."],
text:`Ton regard. Tes idées. Des contenus pour le média du peuple.

Avec Banlieusard Nouveau, tu participes à des projets qui te connectent à un média, à ses équipes et à leurs attentes.

Tu rencontres, tu proposes, tu crées. Ton réseau s'élargit au fil des collaborations et du travail que tu partages.

C'est l'occasion de faire découvrir ton univers et de donner envie de construire la suite avec toi.

Tu imagines déjà ce que tu pourrais apporter ? Garde cette énergie.`},
{key:"s03",num:"03",title:"Le lieu",onVisual:["1 000 m²","Pour voir plus grand.","Accède à un espace dédié à la création audiovisuelle et à la communication.","Nanterre"],
text:`Imagine : tu arrives avec une idée. Ton équipe est là. Vous avez un lieu pour lui donner vie.

À Nanterre, LA DRAFT te donne accès à un espace de 1 000 m² dédié à la création audiovisuelle et à la communication.

Un point de rendez-vous pour imaginer vos concepts, préparer vos productions, tester et créer ensemble.

Des idées qui circulent, des projets qui avancent, un collectif qui prend forme.

Bienvenue sur ton prochain terrain de création.`},
{key:"s04",num:"04",title:"Le choix de l'équipe",onVisual:["Dans quelle équipe vas-tu faire la différence ?","Réalisation / Tournage · 5 titulaires","Communication digitale · 5 titulaires","2 équipes complémentaires.","10 talents à révéler."],
text:`Deux équipes. Des personnalités différentes. Une connexion à créer.

Réalisation / Tournage : donner vie aux images.
Communication digitale : donner de la force aux concepts et aux campagnes.

5 titulaires de chaque côté, un Head Coach par équipe et des projets à construire ensemble.

On veut des regards singuliers, des idées qui se répondent et des talents capables de se faire progresser mutuellement.

À toi de choisir où tu veux faire la différence.`},
{key:"s05",num:"05",title:"Réalisation / Tournage",onVisual:["Tu filmes ?","Tu cadres ?","Tu photographies ?","Tu montes ?","Ton regard mérite le terrain.","Réalisation / Tournage — 5 places"],
text:`Le cadre que tu vois. L'émotion que tu captes. Le montage qui change tout.

Tu as ta façon de raconter ? On veut la découvrir.

Rejoins l'équipe Réalisation / Tournage pour participer à des tournages, des shootings et des productions qui feront grandir ton expérience.

De la première intention au dernier ajustement, tu développes ton regard et tu apprends à aller au bout de tes choix.

5 places pour des profils image qui veulent passer un cap. Montre-nous ton univers.`},
{key:"s06",num:"06",title:"Communication digitale",onVisual:["Tu crées des visuels ?","Tu imagines des concepts ?","Tu penses réseaux sociaux ?","Donne de l'impact à tes idées.","Communication digitale — 5 places"],
text:`Tu vois une campagne et tu te dis : « Moi, j'aurais fait ça autrement » ?

Viens nous montrer comment.

Concepts, graphisme, identités visuelles, contenus pour les réseaux : l'équipe Communication digitale cherche 5 talents avec des idées et une vraie envie de les concrétiser.

Tu pourras proposer, expérimenter et défendre une direction créative face à de vrais briefs.

Fais-nous découvrir ta patte. La prochaine idée que l'équipe développe pourrait partir de toi.`},
{key:"s07",num:"07",title:"Ce que tu construis",onVisual:["Des projets réels.","Un portfolio qui grandit.","Tournages · Shootings · Campagnes","De l'expérience.","Du concret à montrer."],
text:`« Ça, j'ai participé à le créer. »

Un film, un shooting, une campagne. Pouvoir montrer le résultat, raconter les coulisses et expliquer ce que tu as apporté.

C'est aussi ce que tu construis avec LA DRAFT : une expérience concrète et un portfolio qui prend de l'ampleur.

Avec des briefs, des délais et des responsabilités, tu apprends à livrer un travail que tu peux défendre.

De quoi arriver à tes prochaines rencontres avec des projets à montrer et des choses à raconter.`},
{key:"s08",num:"08",title:"L'accompagnement",onVisual:["Ton talent.","Ton équipe.","Ton coach.","Un Head Coach par équipe pour t'aider à passer un cap."],
text:`Parfois, un regard extérieur te fait voir ce que tu peux aller chercher de plus.

Ton Head Coach est là pour ça : repérer tes forces, challenger tes idées et t'aider à franchir des étapes.

Il y aura des déclics, des essais et des versions à reprendre. Viens avec ton ambition et l'humilité de continuer à apprendre.

Tu avances avec un coach et une équipe qui, eux aussi, ont envie de te voir réussir.

À toi de saisir cet accompagnement.`},
{key:"s09",num:"09",title:"Les profils recherchés",onVisual:["Tu as du potentiel ?","Montre-nous le tien.","Créativité.","Rigueur.","Esprit d'équipe.","Envie de progresser.","16–30 ans · Île-de-France"],
text:`Tu t'es reconnu dans les slides ? On veut maintenant découvrir qui tu es.

Ce que tu crées, ce qui t'inspire, les idées que tu gardes dans tes notes et les projets que tu rêves de réaliser.

On cherche des personnalités, du potentiel et l'envie de s'investir. Des jeunes capables de prendre des initiatives, d'écouter les autres et de tenir leurs engagements.

Tu veux faire de la création une vraie direction dans ta vie ?

16–30 ans · Île-de-France.
Ta place commence peut-être par le prochain message.`},
{key:"s10",num:"10",title:"La candidature",onVisual:["Le prochain choix, c'est peut-être toi.","Candidate en DM jusqu'au 30 novembre 2026.","1. Présente-toi.","2. Choisis ton équipe.","3. Partage tes créations.","16–30 ans · Île-de-France","5 places par équipe"],
text:`Tu t'imagines déjà dans l'équipe ? À toi de te présenter.

Envoie-nous en DM :

• Ton prénom, ton âge et ta ville.
• L'équipe que tu souhaites rejoindre.
• Une sélection de tes créations ou ton portfolio.
• Ce que tu veux construire et pourquoi tu veux rejoindre LA DRAFT.

Choisis ce qui te représente, précise ton rôle dans les projets et parle-nous avec tes mots. On veut découvrir ton univers autant que ton ambition.

10 places. 5 titulaires par équipe.
16–30 ans · Île-de-France.
Candidatures jusqu'au 30 novembre 2026.

LA DRAFT 2K27 - ILA × BANLIEUSARD NOUVEAU.

Le prochain choix, c'est peut-être toi.`}
];
ITEMS.forEach(it=>{ if(it.key!=="video") it.img="https://cdn.jsdelivr.net/gh/estel-ila/ILA@8883bb21752ca93d63d8d46b75429d2a6ed4e83c/img/"+it.key+".jpg"; });
const BYKEY = Object.fromEntries(ITEMS.map(i=>[i.key,i]));
const STATUS = {todo:"À valider",ok:"Validé",changes:"Modifs demandées",edited:"Modifié · à revalider",empty:"Description à ajouter"};
const KIND = {ok:"a validé",changes:"demande des modifs",edit:"a modifié le texte",comment:"a commenté",restore:"a restauré une version",todo:"a remis à valider"};
const IG_MAX = 2200;

const S = {items:{}, history:[], mode:"loading", db:null, uid:null, ui:{}, filter:"all"};
const $ = s=>document.querySelector(s);
const esc = s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const ls = {get(k,d){try{const v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
const fmt = t=>{try{return new Date(t).toLocaleString("fr-FR",{day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"})}catch(e){return ""}};

function cur(key){
  const base = BYKEY[key]; const d = S.items[key];
  const text = d && typeof d.text==="string" ? d.text : base.text;
  let status = d && d.status ? d.status : "todo";
  if(!text.trim() && status!=="changes") status="empty";
  return {text, status, changed: !!(d && typeof d.text==="string" && d.text!==base.text), by:d&&d.author, at:d&&d.at};
}

/* Identité */
const nameIn=$("#me-name"), orgIn=$("#me-org");
const me = ls.get("ld27-me",{name:"",org:"Banlieusard Nouveau"});
nameIn.value=me.name; orgIn.value=me.org;
function saveMe(){me.name=nameIn.value.trim();me.org=orgIn.value;ls.set("ld27-me",me);$("#who").classList.toggle("need",false)}
nameIn.addEventListener("input",saveMe); orgIn.addEventListener("change",saveMe);
function author(){ if(!me.name){ $("#who").classList.add("need"); nameIn.focus(); toast("Indique ton prénom en haut de la page"); return null } return me.name+" · "+me.org }

function toast(m){const t=$("#toast");t.textContent=m;t.classList.add("on");clearTimeout(t._h);t._h=setTimeout(()=>t.classList.remove("on"),2400)}

/* Stockage : partagé (db) sinon local */
function setMode(m,why){
  S.mode=m; const s=$("#sync");
  s.className="sync "+(m==="live"?"live":m==="local"?"local":"");
  s.textContent = m==="live"?"Synchronisé":m==="local"?"Sur cet appareil":"Connexion…";
  const slot=$("#banner-slot");
  if(m==="local"){
    slot.innerHTML=`<div class="banner"><b>Mode appareil</b><span style="flex:1;min-width:220px">${esc(why||"La sauvegarde partagée n'est pas disponible dans cette vue.")} Tes retours restent enregistrés sur cet appareil : quand tu as fini, copie le récap et envoie-le à l'équipe ILA.</span><button class="btn paper" onclick="copyRecap()">Copier le récap</button></div>`;
  } else slot.innerHTML="";
}
function loadLocal(){const d=ls.get("ld27-local",{items:{},history:[]});S.items=d.items||{};S.history=d.history||[];}
function persistLocal(){ls.set("ld27-local",{items:S.items,history:S.history.slice(0,400)})}

async function commit(key, patch, ev){
  const by = author(); if(!by) return false;
  const at = Date.now();
  const prev = S.items[key]||{};
  const next = {...prev, ...patch, author:by, at, uid:S.uid||null};
  const entry = {item:key, author:by, at, uid:S.uid||null, ...ev};
  if(S.mode==="live"){
    try{
      const row={key, text: typeof next.text==="string"?next.text:null, status: next.status||"todo", author:by, at, updated_at:new Date(at).toISOString()};
      const r1=await SB.from("draft2k27_validation_items").upsert(row);
      if(r1.error) throw r1.error;
      const r2=await SB.from("draft2k27_validation_history").insert({item:key, kind:ev.kind, text:ev.text??null, note:ev.note||null, author:by, at});
      if(r2.error) throw r2.error;
      S.items[key]=row; S.history.unshift(entry); render();
      return true;
    }catch(e){
      console.error(e); toast("Enregistrement impossible, vérifie ta connexion et réessaie");
      return false;
    }
  }
  S.items[key]=next; S.history.unshift(entry); persistLocal(); render(); return true;
}

/* Rendu */
function itemHTML(it,bodyOnly){
  const c=cur(it.key), ui=S.ui[it.key]||{}, isV=it.kind==="video";
  const hist=S.history.filter(h=>h.item===it.key);
  const media = isV
    ? `<div class="media"><video controls playsinline preload="metadata" poster="${it.poster}" src="${it.src}"></video></div>`
    : `<div class="media"><img loading="lazy" width="1122" height="1402" src="${it.img}" alt="Slide ${it.num} : ${esc(it.title)}" data-a="zoom" data-k="${it.key}"><button class="zoom" data-a="zoom" data-k="${it.key}">⤢ Plein écran</button></div>`;
  const vis = it.onVisual.length ? `<div><span class="k">Sur le visuel</span><div class="onvis" style="margin-top:6px">${it.onVisual.map(v=>`<span>${esc(v)}</span>`).join("")}</div></div>` : "";
  let desc;
  if(ui.edit){
    desc=`<div class="panel">
      <label class="k" for="ed-${it.key}">${isV&&!c.text.trim()?"Description de la vidéo":"Modifier la description"}</label>
      <textarea class="main" id="ed-${it.key}" data-cnt="${it.key}">${esc(ui.draft ?? c.text)}</textarea>
      <input id="edn-${it.key}" placeholder="Pourquoi ce changement ? (facultatif)">
      <div class="row"><button class="btn ok" data-a="save" data-k="${it.key}">Enregistrer la version</button><button class="btn" data-a="cancel" data-k="${it.key}">Annuler</button><span class="cnt" id="cnt-${it.key}"></span></div>
    </div>`;
  } else if(!c.text.trim()){
    desc=`<div class="desc empty">${isV?"Aucune description pour l'instant":"Description vide"}<div style="margin-top:12px"><button class="btn red" data-a="edit" data-k="${it.key}">＋ Ajouter la description</button></div></div>`;
  } else {
    desc=`<div class="desc"><span class="ig">Description Instagram</span>${esc(c.text)}</div>`;
  }
  const meta = c.by ? `<div class="meta">Dernière action : <b>${esc(c.by)}</b> · ${fmt(c.at)}${c.changed&&!isV?` · <button class="linkbtn" data-a="orig" data-k="${it.key}">${ui.orig?"Masquer":"Voir"} le texte d'origine</button>`:""}</div>` : "";
  const orig = ui.orig && c.changed ? `<div class="orig">${esc(it.text)}</div>`:"";
  const acts = ui.edit ? "" : `<div class="acts">
      <button class="btn ok" data-a="ok" data-k="${it.key}" ${!c.text.trim()||c.status==="ok"?"disabled":""}>✓ Valider</button>
      <button class="btn" data-a="edit" data-k="${it.key}">Modifier</button>
      <button class="btn" data-a="comment" data-k="${it.key}">Demander une modif</button>
      <button class="btn" data-a="hist" data-k="${it.key}">Historique (${hist.length})</button>
      ${c.status==="ok"?`<button class="btn" data-a="reopen" data-k="${it.key}">Rouvrir</button>`:""}
    </div>`;
  const com = ui.comment ? `<div class="panel">
      <label class="k" for="cm-${it.key}">Ce qu'il faut changer</label>
      <textarea id="cm-${it.key}" rows="3" placeholder="Ex. : remplacer « cracks » par « talents » dans la première phrase"></textarea>
      <div class="row"><button class="btn red" data-a="sendc" data-k="${it.key}">Envoyer la demande</button><button class="btn" data-a="closec" data-k="${it.key}">Annuler</button></div>
    </div>`:"";
  const hl = ui.hist ? `<div class="panel"><span class="k">Historique de ${isV?"la vidéo":"la slide "+it.num}</span><div class="hist">${hist.length?hist.map(h=>evHTML(h,true)).join(""):`<p class="empty-note">Aucune action pour l'instant. Le texte affiché est la version d'origine.</p>`}</div></div>`:"";
  const body=`
      <div class="ihead"><div><span class="k">${isV?it.sub:"Slide "+it.num+" / 10"}</span><h3>${esc(it.title)}</h3></div><span class="pill st-${c.status}">${STATUS[c.status]}</span></div>
      ${vis}${desc}${meta}${orig}${acts}${com}${hl}`;
  if(bodyOnly) return body;
  return `<article class="item ${isV?"video":""}" id="it-${it.key}" data-status="${c.status}">${media}<div class="body">${body}</div></article>`;
}
function evHTML(h,inItem){
  const it=BYKEY[h.item]; const tgt = inItem?"":`<span class="tgt">${it?(it.kind==="video"?"Spot":"Slide "+it.num):esc(h.item)}</span>`;
  const txt = (h.kind==="edit"||h.kind==="restore") && h.text!=null ? `<div class="x">${esc(h.text)}</div>`:"";
  const note = h.note ? `<div class="note">« ${esc(h.note)} »</div>`:"";
  const rest = inItem && (h.kind==="edit"||h.kind==="restore") && h.text!=null ? `<div style="margin-top:6px"><button class="linkbtn" data-a="restore" data-k="${h.item}" data-t="${encodeURIComponent(h.text)}">Restaurer cette version</button></div>`:"";
  return `<div class="ev k-${h.kind}"><span class="dot"></span><div><div class="t">${tgt}<b>${esc(h.author||"?")}</b> ${KIND[h.kind]||h.kind} · ${fmt(h.at)}</div>${note}${txt}${rest}</div></div>`;
}
function render(){
  // préserver les brouillons en cours
  ITEMS.forEach(it=>{const ta=document.getElementById("ed-"+it.key); if(ta&&S.ui[it.key]) S.ui[it.key].draft=ta.value; const cm=document.getElementById("cm-"+it.key); if(cm&&S.ui[it.key]) S.ui[it.key].cdraft=cm.value;});
  const vb=document.querySelector("#it-video .body");
  if(vb) vb.innerHTML=itemHTML(ITEMS[0],true); else $("#list-video").innerHTML=itemHTML(ITEMS[0]);
  $("#list-slides").innerHTML=ITEMS.slice(1).filter(it=>{const s=cur(it.key).status;return S.filter==="all"||(S.filter==="todo"&&(s==="todo"||s==="edited"))||(S.filter==="changes"&&s==="changes")||(S.filter==="ok"&&s==="ok")}).map(it=>itemHTML(it)).join("") || `<p class="empty-note">Aucune slide dans ce filtre.</p>`;
  ITEMS.forEach(it=>{const ta=document.getElementById("ed-"+it.key); if(ta){upd(it.key)} const cm=document.getElementById("cm-"+it.key); if(cm&&S.ui[it.key]?.cdraft) cm.value=S.ui[it.key].cdraft;});
  const n=ITEMS.filter(it=>cur(it.key).status==="ok").length;
  $("#prog-big").innerHTML=`${n}<small>/ ${ITEMS.length}</small>`; $("#prog-bar").style.width=(n/ITEMS.length*100)+"%";
  $("#vid-status-txt").textContent=STATUS[cur("video").status];
  $("#journal-list").innerHTML = S.history.length ? S.history.map(h=>evHTML(h,false)).join("") : `<p class="empty-note">${S.mode==="loading"?"Chargement de l'historique…":"Rien pour l'instant. Chaque validation, modification ou commentaire apparaîtra ici, signé et daté."}</p>`;
}
function upd(key){const ta=document.getElementById("ed-"+key),c=document.getElementById("cnt-"+key);if(!ta||!c)return;const n=ta.value.length;c.textContent=n+" / "+IG_MAX+" caractères";c.classList.toggle("over",n>IG_MAX)}
document.addEventListener("input",e=>{if(e.target.dataset&&e.target.dataset.cnt)upd(e.target.dataset.cnt)});

document.addEventListener("click",async e=>{
  const b=e.target.closest("[data-a]"); if(!b) return;
  const a=b.dataset.a,k=b.dataset.k; const ui=S.ui[k]=S.ui[k]||{};
  if(a==="zoom"){ openLb(k); return }
  if(a==="edit"){ if(!author()) return; ui.edit=true; ui.comment=false; ui.draft=undefined; render(); document.getElementById("ed-"+k)?.focus(); return }
  if(a==="cancel"){ ui.edit=false; ui.draft=undefined; render(); return }
  if(a==="orig"){ ui.orig=!ui.orig; render(); return }
  if(a==="hist"){ ui.hist=!ui.hist; render(); return }
  if(a==="comment"){ if(!author()) return; ui.comment=true; render(); document.getElementById("cm-"+k)?.focus(); return }
  if(a==="closec"){ ui.comment=false; ui.cdraft=""; render(); return }
  if(a==="save"){
    const t=document.getElementById("ed-"+k).value.replace(/\s+$/,""), note=document.getElementById("edn-"+k).value.trim();
    if(t===cur(k).text && !note){ ui.edit=false; render(); return }
    b.disabled=true;
    if(await commit(k,{text:t,status:t.trim()?"edited":"empty"},{kind:"edit",text:t,note})){ ui.edit=false; ui.draft=undefined; toast("Nouvelle version enregistrée"); }
    render(); return }
  if(a==="ok"){ b.disabled=true; if(await commit(k,{status:"ok"},{kind:"ok"})) toast("Validé ✓"); render(); return }
  if(a==="reopen"){ if(await commit(k,{status:"todo"},{kind:"todo"})) toast("Remis à valider"); render(); return }
  if(a==="sendc"){
    const t=document.getElementById("cm-"+k).value.trim(); if(!t){toast("Écris ce qu'il faut changer");return}
    b.disabled=true;
    if(await commit(k,{status:"changes"},{kind:"comment",note:t})){ ui.comment=false; ui.cdraft=""; toast("Demande envoyée"); }
    render(); return }
  if(a==="restore"){ const t=decodeURIComponent(b.dataset.t); if(await commit(k,{text:t,status:"edited"},{kind:"restore",text:t})) toast("Version restaurée"); render(); return }
});
document.querySelectorAll(".chip").forEach(c=>c.addEventListener("click",()=>{S.filter=c.dataset.f;document.querySelectorAll(".chip").forEach(x=>x.setAttribute("aria-pressed",x===c));render()}));

function recapText(){
  const L=["LA DRAFT 2K27 — retours sur la com (spot + carrousel)", (me.name?("Par "+me.name+" · "+me.org):"")+" — "+new Date().toLocaleDateString("fr-FR"),""];
  ITEMS.forEach(it=>{
    const c=cur(it.key); const lab=it.kind==="video"?"SPOT VIDÉO":"SLIDE "+it.num+" — "+it.title.toUpperCase();
    L.push("■ "+lab+" : "+STATUS[c.status]);
    S.history.filter(h=>h.item===it.key&&h.kind==="comment").reverse().forEach(h=>L.push("  → "+h.author+" : "+h.note));
    if(c.changed||(it.kind==="video"&&c.text.trim())) L.push("  Texte proposé :","  "+c.text.split("\n").join("\n  "));
    L.push("");
  });
  return L.join("\n");
}
async function copyRecap(){
  const t=recapText();
  try{ await navigator.clipboard.writeText(t); toast("Récap copié, colle-le dans WhatsApp ou un mail"); }
  catch(e){ const ta=document.createElement("textarea"); ta.value=t; ta.style.cssText="position:fixed;inset:10% 5%;width:90%;height:80%;z-index:90;background:#fff;color:#000;padding:12px"; document.body.appendChild(ta); ta.select(); toast("Sélectionné : copie avec Ctrl/Cmd + C"); ta.addEventListener("blur",()=>ta.remove()); }
}
window.copyRecap=copyRecap;
$("#copy-recap").addEventListener("click",copyRecap);

/* Plein écran */
const SLIDES=ITEMS.filter(i=>i.img); let lbI=-1;
function openLb(k){ lbI=SLIDES.findIndex(i=>i.key===k); drawLb(); }
function drawLb(){
  let el=document.getElementById("lb");
  if(lbI<0){ el&&el.remove(); return }
  if(!el){ el=document.createElement("div"); el.id="lb"; el.className="lb"; el.setAttribute("role","dialog"); el.setAttribute("aria-label","Visuel en plein écran"); document.body.appendChild(el);
    el.addEventListener("click",e=>{ const t=e.target.closest("[data-lb]"); if(t){ e.stopPropagation(); const v=t.dataset.lb; if(v==="x") lbI=-1; else lbI=(lbI+(+v)+SLIDES.length)%SLIDES.length; drawLb(); } else if(e.target===el){ lbI=-1; drawLb(); } }); }
  const it=SLIDES[lbI];
  el.innerHTML=`<button class="lbb" data-lb="-1" aria-label="Slide précédente">‹</button><img src="${it.img}" alt="Slide ${it.num} : ${esc(it.title)}"><button class="lbb" data-lb="1" aria-label="Slide suivante">›</button><button class="lbb lbx" data-lb="x">Fermer ✕</button><span class="cap">Slide ${it.num} / 10 · ${esc(it.title)} · ${STATUS[cur(it.key).status]}</span>`;
  el.querySelector(".lbx").focus();
}
document.addEventListener("keydown",e=>{ if(lbI<0) return; if(e.key==="Escape"){lbI=-1;drawLb()} if(e.key==="ArrowRight"){lbI=(lbI+1)%SLIDES.length;drawLb()} if(e.key==="ArrowLeft"){lbI=(lbI-1+SLIDES.length)%SLIDES.length;drawLb()} });

/* Démarrage */
render();
const SB_URL="https://tmlpxvahhsepxxqcnlrv.supabase.co", SB_KEY="sb_publishable_K5GgHOTYXFRD7rBe1_zemg_Ir8I1sMf";
let SB=null;
async function pull(){
  const [a,b]=await Promise.all([
    SB.from("draft2k27_validation_items").select("key,text,status,author,at"),
    SB.from("draft2k27_validation_history").select("item,kind,text,note,author,at").order("at",{ascending:false}).limit(500)
  ]);
  if(a.error) throw a.error; if(b.error) throw b.error;
  const m={}; a.data.forEach(r=>m[r.key]=r); S.items=m; S.history=b.data; render();
}
let pullT=null; const schedulePull=()=>{clearTimeout(pullT);pullT=setTimeout(()=>pull().catch(()=>{}),250)};
(async()=>{
  try{
    if(!window.supabase) throw new Error("lib");
    SB=window.supabase.createClient(SB_URL,SB_KEY,{auth:{persistSession:false}});
    await Promise.race([pull(), new Promise((_,r)=>setTimeout(()=>r(new Error("timeout")),10000))]);
    setMode("live"); render();
    SB.channel("ld27").on("postgres_changes",{event:"*",schema:"public",table:"draft2k27_validation_items"},schedulePull)
      .on("postgres_changes",{event:"*",schema:"public",table:"draft2k27_validation_history"},schedulePull).subscribe();
    document.addEventListener("visibilitychange",()=>{ if(!document.hidden) schedulePull(); });
  }catch(e){
    console.error(e); loadLocal(); setMode("local","La sauvegarde en ligne ne répond pas."); render();
  }
})();
