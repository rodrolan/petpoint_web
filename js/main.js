/* ==========================
   CARRUSEL AUTOMÁTICO
========================== */
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel img');
if (slides.length > 0) {
  slides[0].classList.add('active');
  setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }, 5000);
}

/* ==========================
   OPINIONES AUTOMÁTICAS
========================== */
let currentOpinion = 0;
const opinions = document.querySelectorAll('.opinion');
if (opinions.length > 0) {
  opinions[0].classList.add('active');
  setInterval(() => {
    opinions[currentOpinion].classList.remove('active');
    currentOpinion = (currentOpinion + 1) % opinions.length;
    opinions[currentOpinion].classList.add('active');
  }, 6000);
}

/* ==========================
   CABECERA OCULTA AL SCROLL
========================== */
let lastScroll = 0;
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > lastScroll && currentScroll > 100) {
    header.classList.add('hidden');
  } else {
    header.classList.remove('hidden');
  }
  lastScroll = currentScroll;
});

/* ==========================
   POPUP DE CITA / WHATSAPP
========================== */
const popup = document.getElementById('popup');
const openPopupBtn = document.getElementById('open-popup');
const closePopupBtn = document.getElementById('close-popup');
const sendBtn = document.getElementById('send-btn');

if (openPopupBtn) {
  openPopupBtn.addEventListener('click', () => {
    popup.style.display = 'flex';
  });
}

if (closePopupBtn) {
  closePopupBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });
}

if (sendBtn) {
  sendBtn.addEventListener('click', () => {
    const nombre = document.getElementById('nombre').value.trim();
    const raza = document.getElementById('raza').value.trim();
    const fecha = document.getElementById('fecha').value;
    const telefono = "+34698448103";
    const mensaje = `Hola, soy ${nombre}. Quisiera reservar una cita para mi perro de raza ${raza} el día ${fecha}.`;
    window.open(`https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`, '_blank');
  });
}

/* ==========================
   BOTÓN FLOTANTE WHATSAPP
========================== */
const whatsappBtn = document.getElementById('whatsapp-btn');
if (whatsappBtn) {
  whatsappBtn.addEventListener('click', () => {
    window.open('https://wa.me/34698448103', '_blank');
  });
}
