document.addEventListener('DOMContentLoaded',()=>{
// Canvas: Z estilizada en movimiento
const c=document.getElementById('lienzo');
if(c){const x=c.getContext('2d');let t=0;
function Z(px,py,s,col){x.save();x.translate(px,py);x.transform(1,0,-.3,1,0,0);x.fillStyle=col;x.beginPath();
x.moveTo(0,0);x.lineTo(s,0);x.lineTo(s*.35,s*.62);x.lineTo(s*1.05,s*.62);x.lineTo(s*1.05,s);x.lineTo(-s*.05,s);x.lineTo(s*.62,s*.38);x.lineTo(0,s*.38);x.closePath();x.fill();x.restore();}
(function f(){x.clearRect(0,0,c.width,c.height);t+=.02;
for(let i=0;i<6;i++){x.fillStyle='rgba(225,6,0,'+(.5-i*.07)+')';x.fillRect(0,40+i*30,60+((t*120+i*70)%(c.width-60)),3);}
const px=60+(Math.sin(t)+1)/2*(c.width-200);
Z(px-26,c.height/2-52,104,'rgba(139,0,0,.7)');Z(px,c.height/2-52,104,'#e10600');
requestAnimationFrame(f)})();}

// Formulario de contacto (envío con Formspree: reemplaza TU_ID en contacto.html)
const fm=document.getElementById('formContacto');
if(fm)fm.addEventListener('submit',async e=>{
 e.preventDefault();fm.classList.add('was-validated');
 if(!fm.checkValidity())return;
 const ok=document.getElementById('okForm'),btn=fm.querySelector('[type=submit]');
 const msg=(t,k)=>{ok.textContent=t;ok.className='alert mt-3 alert-'+k;};
 if(fm.action.includes('TU_ID')){msg('Estamos terminando de activar el envío. Inténtalo de nuevo pronto.','warning');return;}
 btn.disabled=true;
 try{
  const r=await fetch(fm.action,{method:'POST',body:new FormData(fm),headers:{Accept:'application/json'}});
  if(!r.ok)throw 0;
  msg('¡Mensaje enviado! Gracias por escribirnos, te responderemos pronto.','success');
  fm.reset();fm.classList.remove('was-validated');
 }catch{msg('No se pudo enviar. Inténtalo de nuevo en unos minutos.','danger');}
 btn.disabled=false;
});

// Test de hábitos (edita las preguntas aquí)
const T=document.getElementById('test');
if(T){
const Q=[['Descanso','Duermo entre 8 y 10 horas la mayoría de las noches.'],['Descanso','Me acuesto y me levanto casi a la misma hora.'],['Descanso','Evito usar pantallas durante la hora previa a dormir.'],
['Hidratación','Bebo agua a lo largo del día, no solo cuando tengo mucha sed.'],['Hidratación','Elijo agua con más frecuencia que bebidas azucaradas.'],
['Actividad física','Me muevo al menos 60 minutos al día (deporte, caminar, bailar, jugar).'],['Actividad física','Hago ejercicios de fuerza o resistencia al menos 3 veces por semana.'],['Actividad física','Evito pasar muchas horas seguidas sentado.'],
['Alimentación','Incluyo frutas y verduras en la mayoría de mis comidas.'],['Alimentación','Desayuno y hago varias comidas durante el día.'],['Alimentación','Mi alimentación es variada: cereales, legumbres, proteínas y lácteos o alternativas.'],
['Bienestar emocional','Dedico tiempo a actividades que disfruto y me relajan.'],['Bienestar emocional','Cuando me siento mal, hablo con alguien de confianza.'],
['Organización','Organizo mi tiempo para estudiar, moverme y descansar.'],['Organización','Me pongo metas pequeñas y realistas y reviso mis avances.']];
const O=[['Casi siempre',2],['A veces',1],['Casi nunca',0]];
const TIP={'Descanso':'Fija una hora para dormir y apaga las pantallas 60 minutos antes.','Hidratación':'Lleva una botella contigo y bebe agua en cada pausa.','Actividad física':'Suma una caminata o un juego activo de 20 minutos y auméntalo poco a poco.','Alimentación':'Agrega una fruta o verdura a cada comida y procura variar tus alimentos.','Bienestar emocional':'Reserva un momento diario para algo que disfrutes y platica con alguien de confianza.','Organización':'Elige una meta pequeña para esta semana y anótala en una agenda.'};
let h='<form id="formTest" novalidate>',cat='';
Q.forEach((q,i)=>{if(q[0]!==cat){cat=q[0];h+='<h3>'+cat+'</h3>';}
 h+='<div class="pregunta" id="p'+i+'"><p>'+(i+1)+'. '+q[1]+'</p>'+O.map((o,j)=>'<div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="q'+i+'" id="q'+i+'_'+j+'" value="'+o[1]+'"><label class="form-check-label" for="q'+i+'_'+j+'">'+o[0]+'</label></div>').join('')+'</div>';});
h+='<div class="mt-3"><button class="btn btn-zen" type="submit">Ver mi calificación</button> <button class="btn btn-outline-dark ms-2" type="reset" id="reinicio">Reiniciar</button></div></form><div id="resultado" aria-live="polite"></div>';
T.innerHTML=h;
const F=document.getElementById('formTest'),Rz=document.getElementById('resultado');
F.addEventListener('submit',e=>{e.preventDefault();
 let falta=null,tot=0;const por={};
 Q.forEach((q,i)=>{const s=F.querySelector('input[name=q'+i+']:checked'),b=document.getElementById('p'+i);
  b.classList.toggle('falta',!s);
  if(!s){if(!falta)falta=b;return;}
  const v=+s.value;tot+=v;por[q[0]]=por[q[0]]||{p:0,m:0};por[q[0]].p+=v;por[q[0]].m+=2;});
 if(falta){Rz.innerHTML='<div class="alert alert-danger mt-3">Responde todas las preguntas para ver tu resultado.</div>';falta.scrollIntoView({behavior:'smooth',block:'center'});return;}
 const n=Math.round(tot/(Q.length*2)*100);
 const L=n>=85?['Excelente','¡Tus hábitos son muy sólidos! Sigue así y comparte lo que haces con tus amigos.']:n>=65?['Muy bien','Vas por muy buen camino. Con pequeños ajustes puedes mejorar aún más.']:n>=40?['En construcción','Tienes una base. Elige un hábito y trabaja en él esta semana.']:['Punto de partida','Todos empezamos en algún lugar. Elige un cambio pequeño y constante para comenzar.'];
 const ar=Object.entries(por).map(([k,v])=>[k,Math.round(v.p/v.m*100)]);
 const dbl=[...ar].sort((a,b)=>a[1]-b[1]).filter(a=>a[1]<80).slice(0,2);
 Rz.innerHTML='<div class="resultado"><div class="row align-items-center g-3"><div class="col-md-4 text-center"><div class="puntaje">'+n+'<small style="font-size:1.6rem"> / 100</small></div><h3>'+L[0]+'</h3></div><div class="col-md-8"><p>'+L[1]+'</p>'+
 ar.map(a=>'<div class="d-flex justify-content-between small"><span>'+a[0]+'</span><span>'+a[1]+'%</span></div><div class="progress mb-2"><div class="progress-bar" style="width:'+a[1]+'%"></div></div>').join('')+'</div></div>'+
 '<h3 class="mt-4">Consejos para ti</h3>'+(dbl.length?'<ul>'+dbl.map(a=>'<li><strong>'+a[0]+':</strong> '+TIP[a[0]]+'</li>').join('')+'</ul>':'<p>¡Todas tus áreas van muy bien! Mantén la constancia.</p>')+
 '<p class="small mb-0">Este test es orientativo y educativo; no sustituye la opinión de un profesional de la salud.</p></div>';
 Rz.firstChild.scrollIntoView({behavior:'smooth',block:'start'});});
F.addEventListener('reset',()=>{Rz.innerHTML='';document.querySelectorAll('.pregunta').forEach(b=>b.classList.remove('falta'));});
}
});
