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
// Formulario con validación (demostración)
const fm=document.getElementById('formContacto');
if(fm)fm.addEventListener('submit',e=>{e.preventDefault();e.stopPropagation();fm.classList.add('was-validated');
 if(fm.checkValidity()){document.getElementById('okForm').classList.remove('d-none');fm.reset();fm.classList.remove('was-validated');}});
// Lista de hábitos
const rb=document.getElementById('reiniciar');
if(rb)rb.addEventListener('click',()=>document.querySelectorAll('.habito').forEach(h=>h.checked=false));
});
