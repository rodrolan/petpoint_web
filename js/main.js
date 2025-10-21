// Carrusel automático (5s)
document.addEventListener('DOMContentLoaded', function(){
  const slides = document.querySelectorAll('.carousel-slide');
  let idx = 0;
  if(slides.length){
    setInterval(()=> {
      slides[idx].classList.remove('active');
      idx = (idx+1) % slides.length;
      slides[idx].classList.add('active');
    }, 5000);
  }

  // Popup citas
  const openBtns = [document.getElementById('openCitas'), document.getElementById('citasBtn')].filter(Boolean);
  const overlay = document.getElementById('popupOverlay');
  const closeBtn = document.getElementById('closePopup');
  openBtns.forEach(b => b && b.addEventListener('click', () => { overlay.style.display = 'flex'; overlay.setAttribute('aria-hidden','false'); }));
  closeBtn && closeBtn.addEventListener('click', () => { overlay.style.display = 'none'; overlay.setAttribute('aria-hidden','true'); });
  overlay && overlay.addEventListener('click', (e)=>{ if(e.target === overlay) { overlay.style.display='none'; overlay.setAttribute('aria-hidden','true'); } });

  // Enviar por WhatsApp desde popup
  const sendBtn = document.getElementById('sendWhatsapp');
  if(sendBtn){
    sendBtn.addEventListener('click', ()=> {
      const nombre = document.getElementById('p_nombre').value || '---';
      const telefono = document.getElementById('p_telefono').value || '---';
      const raza = document.getElementById('p_raza').value || '---';
      const fecha = document.getElementById('p_fecha').value || '---';
      const text = `Hola, soy ${nombre}. Deseo agendar una cita para mi perro (${raza}) el ${fecha}. Mi teléfono: ${telefono}.`;
      window.open(`https://wa.me/34698448103?text=${encodeURIComponent(text)}`, '_blank');
    });
  }

  // Reseñas rotativas
  const opiniones = document.querySelectorAll('.opinion');
  let r = 0;
  if(opiniones.length){
    setInterval(()=> {
      opiniones[r].classList.remove('active');
      r = (r+1) % opiniones.length;
      opiniones[r].classList.add('active');
    }, 5000);
  }
});
