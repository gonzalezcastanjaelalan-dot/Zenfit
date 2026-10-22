/* Zenbot - asistente de ZenFit. Los textos y las preguntas están en el objeto D (abajo). */
(function(){'use strict';
const S=document.currentScript.src,ROOT=new URL('../',S).href,AUD=ROOT+'audio/';
const D={
 "vozProvisional": true,
 "extensiones": [
  "mp3",
  "wav"
 ],
 "intro": {
  "bienvenida": "¡Hola! Soy Zenbot, el asistente virtual de ZenFit. Estoy aquí para ayudarte a recorrer el sitio. ZenFit es un espacio sobre deporte, alimentación equilibrada y bienestar, con rutinas, información de nutrición, hábitos saludables y un test para evaluar los tuyos. Puedes moverte con el menú de arriba, o pedirme que te cuente qué hay en cada sección y en cada tarjeta. ¡Tracción explosiva, fuerza mental!",
  "menu": "Aquí abajo tienes el menú de dudas frecuentes. Elige una y te la explico, o pídeme un recorrido por la página. Cuando quieras volver a verme, toca el círculo de la esquina."
 },
 "faq": [
  {
   "id": "recorrido",
   "q": "Hazme un recorrido por esta página",
   "act": "tour"
  },
  {
   "id": "zenfit",
   "q": "¿Qué es ZenFit?",
   "a": "ZenFit es un sitio informativo sobre deporte, alimentación equilibrada y bienestar. Su lema es tracción explosiva, fuerza mental: moverte con energía y cuidar también tu mente. Aquí encontrarás rutinas, información de nutrición, hábitos saludables y un test para evaluar los tuyos."
  },
  {
   "id": "secciones",
   "q": "¿Qué secciones tiene el sitio?",
   "a": "El sitio tiene seis secciones en el menú de arriba: Inicio, Nosotros, Rutinas, Nutrición, Bienestar y Contacto. ¿A cuál quieres ir?",
   "ir": [
    [
     "Inicio",
     "index.html"
    ],
    [
     "Nosotros",
     "paginas/nosotros.html"
    ],
    [
     "Rutinas",
     "paginas/rutinas.html"
    ],
    [
     "Nutrición",
     "paginas/nutricion.html"
    ],
    [
     "Bienestar",
     "paginas/bienestar.html"
    ],
    [
     "Contacto",
     "paginas/contacto.html"
    ]
   ]
  },
  {
   "id": "rutinas",
   "q": "¿Qué encuentro en Rutinas?",
   "a": "En Rutinas hay seis deportes en tarjetas: baloncesto, fútbol, voleibol, atletismo, natación y boxeo. También seis circuitos de ejercicios con pasos, dosis y cuidados, una semana de ejemplo para principiantes, y guías de calentamiento y recuperación.",
   "ir": [
    [
     "Rutinas",
     "paginas/rutinas.html"
    ]
   ]
  },
  {
   "id": "nutricion",
   "q": "¿Qué hay en Nutrición?",
   "a": "Nutrición tiene una tabla de nutrientes, el plato equilibrado, qué comer antes, durante y después de entrenar, consejos de hidratación y un acordeón con ejemplos de desayuno, comida, cena y colaciones.",
   "ir": [
    [
     "Nutrición",
     "paginas/nutricion.html"
    ]
   ]
  },
  {
   "id": "bienestar",
   "q": "¿Qué hay en Bienestar?",
   "a": "Bienestar reúne seis tarjetas sobre descanso, hidratación, organización del tiempo, emociones, hábitos saludables y constancia. Al final está el test de hábitos, con una calificación sobre cien.",
   "ir": [
    [
     "Bienestar",
     "paginas/bienestar.html"
    ]
   ]
  },
  {
   "id": "nosotros",
   "q": "¿Qué es la sección Nosotros?",
   "a": "En Nosotros conocerás la misión y la filosofía de ZenFit, el significado del logotipo, una animación hecha con Canvas, nuestros valores y pestañas con tips, consejos e ideas.",
   "ir": [
    [
     "Nosotros",
     "paginas/nosotros.html"
    ]
   ]
  },
  {
   "id": "contacto",
   "q": "¿Cómo puedo escribirles?",
   "a": "En Contacto hay un formulario. Escribe tu nombre, tu correo, elige un tema y cuéntanos tu duda o sugerencia. Nos encantará leerte.",
   "ir": [
    [
     "Contacto",
     "paginas/contacto.html"
    ]
   ]
  },
  {
   "id": "tarjetas",
   "q": "¿Qué son las tarjetas que se elevan?",
   "a": "Son los recuadros que se levantan y se resaltan en rojo cuando pasas el cursor. En Inicio te llevan a Rutinas, Nutrición, Bienestar y Nosotros. En Rutinas muestran deportes y circuitos, en Nutrición los grupos de alimentos y en Bienestar los hábitos clave. Si quieres, te las señalo en un recorrido."
  },
  {
   "id": "test",
   "q": "¿Cómo funciona el test de hábitos?",
   "a": "Está en Bienestar. Contestas quince preguntas con tres opciones: casi siempre, a veces o casi nunca. Al final recibes una calificación sobre cien, tu resultado por área y consejos. Es orientativo y no sustituye a un profesional de la salud.",
   "ir": [
    [
     "Bienestar",
     "paginas/bienestar.html"
    ]
   ]
  },
  {
   "id": "celular",
   "q": "¿Se ve bien en celular?",
   "a": "Sí. ZenFit se adapta a computadoras, tabletas y celulares. En pantallas pequeñas, el menú se convierte en un botón de hamburguesa."
  },
  {
   "id": "repetir",
   "q": "Escuchar de nuevo tu presentación",
   "act": "intro"
  }
 ],
 "tour": {
  "index": [
   [
    ".navbar",
    0,
    "Este es el menú de navegación. Siempre está fijo arriba: desde aquí llegas a las seis secciones. La sección activa se marca con una línea roja."
   ],
   [
    "#hero",
    0,
    "Este es el carrusel principal. Cambia solo cada pocos segundos y presenta cuatro temas: rutinas, alimentación, descanso y bienestar integral. También lo mueves con las flechas o los puntos."
   ],
   [
    "section.oscura",
    0,
    "Aquí están las tarjetas de acceso rápido: Rutinas, Nutrición, Bienestar y Nosotros. Pasa el cursor sobre una y verás cómo se eleva y se resalta en rojo. Tócala para ir a esa sección."
   ],
   [
    ".destacado",
    0,
    "Este bloque resume la idea central de ZenFit: el equilibrio también es rendimiento. Movimiento, alimentación y descanso se complementan."
   ]
  ],
  "nosotros": [
   [
    ".banner",
    0,
    "Bienvenido a Nosotros, la sección donde conocerás el propósito de ZenFit."
   ],
   [
    ".claro-s .row",
    0,
    "Aquí están la misión y la filosofía del proyecto."
   ],
   [
    ".claro-s .row",
    1,
    "Estas tarjetas muestran la identidad visual: el logotipo, una animación GIF y otra hecha con Canvas. Pasa el cursor para verlas elevarse."
   ],
   [
    ".nav-tabs",
    0,
    "Estas pestañas reúnen tips, consejos e ideas para tus hábitos. Cámbialas con un clic."
   ]
  ],
  "rutinas": [
   [
    ".banner",
    0,
    "Esta es la sección de Rutinas, para moverte a tu manera."
   ],
   [
    ".claro-s .row.g-4",
    0,
    "Estas son las tarjetas de deportes. Cada una resume las habilidades que desarrolla esa disciplina."
   ],
   [
    ".claro-s .row.g-4",
    1,
    "Estos son los circuitos de ejercicios. Cada tarjeta indica el objetivo, los pasos, la dosis sugerida y qué cuidar."
   ],
   [
    ".table-responsive",
    0,
    "Esta es una semana de ejemplo para principiantes. Ajústala a tu horario y a cómo te sientas."
   ],
   [
    "section.sec:not(.claro-s)",
    0,
    "Aquí están el calentamiento paso a paso y la guía de recuperación. Son clave para entrenar bien."
   ]
  ],
  "nutricion": [
   [
    ".table-responsive",
    0,
    "Esta tabla explica qué hace cada nutriente y en qué alimentos lo encuentras."
   ],
   [
    "section.claro-s",
    0,
    "Aquí está el plato equilibrado y qué comer antes, durante y después de entrenar. Las tarjetas se elevan al pasar el cursor."
   ],
   [
    ".accordion",
    0,
    "Este acordeón muestra ejemplos de desayuno, comida, cena y colaciones. Toca cada título para abrirlo."
   ]
  ],
  "bienestar": [
   [
    "section.claro-s .row.g-4",
    0,
    "Estas seis tarjetas resumen los hábitos que apoyan tu bienestar: descanso, hidratación, organización, emociones, hábitos saludables y constancia."
   ],
   [
    "#test",
    0,
    "Este es el test de hábitos. Responde las quince preguntas y recibirás tu calificación y consejos."
   ],
   [
    ".destacado",
    0,
    "Y esta es la frase que lo resume todo: cuerpo sano, mente fuerte."
   ]
  ],
  "contacto": [
   [
    "#formContacto",
    0,
    "Este es el formulario de contacto. Llena todos los campos y presiona enviar."
   ],
   [
    ".gracias",
    0,
    "Y aquí tenemos un agradecimiento para ti. ¡Gracias por ser parte de ZenFit!"
   ]
  ]
 }
};
const LS=(k,v)=>{try{if(v===undefined)return localStorage.getItem(k);localStorage.setItem(k,v);}catch(e){return null;}};
const pag=((location.pathname.split('/').pop()||'index.html').replace('.html',''))||'index';
const $=(t,c,h)=>{const e=document.createElement(t);if(c)e.className=c;if(h!==undefined)e.innerHTML=h;return e;};
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
let mudo=LS('zb_mudo')==='1',aud=null,iniciado=false,oyo=false;
const ic=ROOT+'img/zenbot.png',TTS='speechSynthesis' in window;
const btn=$('button','','<img src="'+ic+'" alt=""><span class="zb-punto"></span>');
btn.id='zb-btn';btn.setAttribute('aria-label','Abrir chat con Zenbot');btn.setAttribute('aria-expanded','false');
const box=$('div','','<div class="zb-h"><img src="'+ic+'" alt=""><div><strong>Zenbot</strong><small>Tu guía en ZenFit</small></div><button class="zb-i" id="zb-mu" aria-label="Activar o silenciar la voz"></button><button class="zb-i" id="zb-x" aria-label="Cerrar chat">✕</button></div><div class="zb-msgs" aria-live="polite"></div><div class="zb-ops"></div>');
box.id='zb';box.setAttribute('role','dialog');box.setAttribute('aria-label','Chat con Zenbot');
document.body.append(box,btn);
const M=box.querySelector('.zb-msgs'),O=box.querySelector('.zb-ops'),MU=box.querySelector('#zb-mu');
const pintaMu=()=>{MU.textContent=mudo?'🔇':'🔊';MU.title=mudo?'Voz desactivada':'Voz activada';};pintaMu();

/* ---- Audio: busca audio/<id>.mp3 (o .wav); si no existe usa la voz provisional del navegador ---- */
function parar(){if(aud){aud.pause();aud=null;}if(TTS)speechSynthesis.cancel();}
const hablando=()=>(aud&&!aud.paused)||(TTS&&speechSynthesis.speaking);
function sonar(id,txt,fin,forzar){
 parar();if(mudo&&!forzar)return Promise.resolve('no');
 return new Promise(res=>{let i=0;const ex=D.extensiones;
  const voz=()=>{if(!D.vozProvisional||!TTS||!txt)return res('no');
   const u=new SpeechSynthesisUtterance(txt);u.lang='es-MX';
   const v=speechSynthesis.getVoices().find(x=>/^es/i.test(x.lang));if(v)u.voice=v;
   u.onstart=()=>res('ok');u.onend=()=>fin&&fin();u.onerror=e=>res(e.error==='not-allowed'?'bloq':'no');
   speechSynthesis.speak(u);};
  const prox=()=>{if(i>=ex.length)return voz();
   const a=new Audio(AUD+id+'.'+ex[i++]);let h=false;
   const falla=()=>{if(!h){h=true;prox();}};
   a.addEventListener('error',falla);a.addEventListener('ended',()=>fin&&fin());
   a.play().then(()=>{h=true;aud=a;res('ok');}).catch(e=>{if(e.name==='NotAllowedError'){h=true;res('bloq');}else falla();});};
  prox();});}

/* ---- Mensajes ---- */
function msg(h,c){const e=$('div','zb-m '+(c||'zb-b'),h);M.append(e);M.scrollTop=M.scrollHeight;return e;}
async function bot(txt,o){o=o||{};const t=msg('<span class="zb-t"><i></i><i></i><i></i></span>');await sleep(550);
 t.innerHTML='<p>'+txt+'</p>';const a=$('div','zb-a');
 (o.ir||[]).forEach(l=>{const b=$('a','zb-ir',l[0]);b.href=ROOT+l[1];a.append(b);});
 if(o.so){const b=$('button','zb-so','🔊 Escuchar');b.onclick=()=>{if(hablando()){parar();return;}sonar(o.so,txt,null,true);};a.append(b);}
 if(o.acc){const b=$('button','zb-ir',o.acc[0]);b.onclick=o.acc[1];a.append(b);}
 if(a.children.length)t.append(a);M.scrollTop=M.scrollHeight;return t;}
function ops(l){O.innerHTML='';l.forEach(x=>{const b=$('button','zb-chip',x[0]);b.onclick=x[1];O.append(b);});}
const menu=()=>ops(D.faq.map(f=>[f.q,()=>responder(f)]));
async function responder(f){parar();ops([]);msg(f.q,'zb-u');
 if(f.act==='tour')return recorrido();if(f.act==='intro')return repetir();
 await bot(f.a,{ir:f.ir,so:f.id,acc:f.id==='tarjetas'?['Hacer recorrido',()=>responder(D.faq[0])]:null});menu();}

/* ---- Presentación (solo la primera vez) ---- */
async function intro(){LS('zb_intro','1');
 await bot(D.intro.bienvenida);
 const f2=async son=>{await bot(D.intro.menu);menu();if(son)sonar('menu',D.intro.menu);};
 const r=await sonar('bienvenida',D.intro.bienvenida,()=>f2(true));
 if(r==='ok'){oyo=true;return;}
 await f2(false);
 if(r==='bloq'){
  const oir=()=>{if(oyo)return;oyo=true;document.removeEventListener('pointerdown',g,true);document.removeEventListener('keydown',g,true);
   sonar('bienvenida',D.intro.bienvenida,()=>sonar('menu',D.intro.menu,null,true),true);};
  const g=e=>{if(!box.contains(e.target))oir();};
  document.addEventListener('pointerdown',g,true);document.addEventListener('keydown',g,true);
  bot('Tu navegador bloquea el audio automático. Toca el botón o haz clic en cualquier parte de la página para escuchar mi presentación.',{acc:['🔊 Escuchar presentación',oir]});}}
async function repetir(){await bot(D.intro.bienvenida);sonar('bienvenida',D.intro.bienvenida,()=>sonar('menu',D.intro.menu,null,true),true);menu();}

/* ---- Recorrido guiado ---- */
const quitar=()=>document.querySelectorAll('.zb-resalte').forEach(e=>e.classList.remove('zb-resalte'));
async function recorrido(){const p=D.tour[pag];
 if(!p){await bot('En esta página no tengo recorrido, pero puedes preguntarme por cualquier sección.');return menu();}
 box.classList.add('zb-t');let i=0;
 const fin=async()=>{quitar();box.classList.remove('zb-t');ops([]);await bot('¡Eso fue todo! Si quieres saber más, elige otra duda del menú.');menu();};
 const paso=async()=>{quitar();ops([]);const s=p[i],el=document.querySelectorAll(s[0])[s[1]||0];
  if(el){el.classList.add('zb-resalte');el.scrollIntoView({behavior:'smooth',block:'start'});}
  await bot('<strong>'+(i+1)+'/'+p.length+'</strong> '+s[2]);
  ops(i<p.length-1?[['Siguiente →',()=>{i++;paso();}],['Terminar recorrido',fin]]:[['Terminar recorrido',fin]]);};
 paso();}

/* ---- Apertura y cierre ---- */
function abrir(){box.classList.add('abierto');btn.setAttribute('aria-expanded','true');btn.querySelector('.zb-punto').style.display='none';
 if(!iniciado){iniciado=true;if(!LS('zb_intro'))intro();else bot('¡Hola de nuevo! Soy Zenbot. Elige una duda o pídeme un recorrido.').then(menu);}}
function cerrar(){box.classList.remove('abierto','zb-t');btn.setAttribute('aria-expanded','false');parar();quitar();}
btn.onclick=()=>box.classList.contains('abierto')?cerrar():abrir();
box.querySelector('#zb-x').onclick=()=>{cerrar();btn.focus();};
MU.onclick=()=>{mudo=!mudo;LS('zb_mudo',mudo?'1':'0');pintaMu();if(mudo)parar();};
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&box.classList.contains('abierto'))cerrar();});
window.addEventListener('load',()=>setTimeout(()=>{if(!LS('zb_intro'))abrir();},1400));
})();
