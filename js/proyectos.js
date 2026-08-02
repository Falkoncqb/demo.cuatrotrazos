/* ============================================================
   PROYECTOS — Gestión de Galerías y Lightbox
   ============================================================ */

// Estructura de proyectos - Se actualiza manualmente o dinámicamente
const proyectos = [
  {
    nombre: 'Alba',
    descripcion: 'Proyecto residencial de arquitectura moderna con diseño contemporáneo.',
    imagenes: [
      'Proyectos/Alba/6V4A8195-HDR.jpg',
      'Proyectos/Alba/6V4A8209-HDR.jpg',
      'Proyectos/Alba/6V4A8215-HDR.jpg',
      'Proyectos/Alba/6V4A8248-HDR.jpg',
      'Proyectos/Alba/6V4A8254-HDR.jpg',
      'Proyectos/Alba/6V4A8269-HDR.jpg',
      'Proyectos/Alba/6V4A8273-HDR.jpg',
      'Proyectos/Alba/6V4A8276-HDR.jpg',
      'Proyectos/Alba/6V4A8285-HDR.jpg',
      'Proyectos/Alba/6V4A8291.jpg',
    ]
  },
  {
    nombre: 'Atenas',
    descripcion: 'Diseño de espacios con influencia clásica y elementos contemporáneos.',
    imagenes: [
      'Proyectos/Atenas/WhatsApp Image 2026-07-03 at 10.44.24 AM.jpeg',
      'Proyectos/Atenas/WhatsApp Image 2026-07-03 at 10.44.24 AM (1).jpeg',
      'Proyectos/Atenas/WhatsApp Image 2026-07-03 at 10.44.25 AM.jpeg',
      'Proyectos/Atenas/WhatsApp Image 2026-07-03 at 10.44.25 AM (1).jpeg',
    ]
  },
  {
    nombre: 'Augusto Legia',
    descripcion: 'Proyecto de remodelación integral con énfasis en funcionalidad.',
    imagenes: [
      'Proyectos/Augusto Legia/WhatsApp Image 2026-07-03 at 10.44.23 AM.jpeg',
      'Proyectos/Augusto Legia/WhatsApp Image 2026-07-03 at 10.44.23 AM (1).jpeg',
      'Proyectos/Augusto Legia/WhatsApp Image 2026-07-03 at 10.44.24 AM.jpeg',
      'Proyectos/Augusto Legia/WhatsApp Image 2026-07-03 at 10.44.24 AM (1).jpeg',
    ]
  },
  {
    nombre: 'Club Hipico',
    descripcion: 'Diseño de espacios para entretenimiento y recreación.',
    imagenes: [
      'Proyectos/club hipico/6V4A7903-HDR.jpg',
      'Proyectos/club hipico/6V4A7906-HDR.jpg',
      'Proyectos/club hipico/6V4A7909-HDR.jpg',
      'Proyectos/club hipico/6V4A7923-HDR.jpg',
      'Proyectos/club hipico/6V4A7927-HDR.jpg',
      'Proyectos/club hipico/6V4A7938-HDR.jpg',
      'Proyectos/club hipico/6V4A7960-HDR.jpg',
      'Proyectos/club hipico/6V4A7969-HDR.jpg',
    ]
  },
  {
    nombre: 'Huertos Familiares',
    descripcion: 'Proyecto de diseño paisajístico y espacios verdes.',
    imagenes: [
      'Proyectos/huertos familiares/WhatsApp Image 2026-07-03 at 10.44.25 AM.jpeg',
      'Proyectos/huertos familiares/WhatsApp Image 2026-07-03 at 10.44.25 AM (1).jpeg',
      'Proyectos/huertos familiares/WhatsApp Image 2026-07-03 at 10.44.26 AM.jpeg',
      'Proyectos/huertos familiares/WhatsApp Image 2026-07-03 at 10.44.26 AM (1).jpeg',
      'Proyectos/huertos familiares/WhatsApp Image 2026-07-03 at 10.44.26 AM (2).jpeg',
    ]
  },
  {
    nombre: 'Llico',
    descripcion: 'Proyecto residencial con vista al paisaje natural.',
    imagenes: [
      'Proyectos/Llico/WhatsApp Image 2026-07-03 at 10.56.39 AM.jpeg',
      'Proyectos/Llico/WhatsApp Image 2026-07-03 at 10.56.40 AM.jpeg',
      'Proyectos/Llico/WhatsApp Image 2026-07-03 at 10.56.40 AM (1).jpeg',
      'Proyectos/Llico/WhatsApp Image 2026-07-03 at 10.56.40 AM (2).jpeg',
    ]
  },
  {
    nombre: 'Parque Villarrica',
    descripcion: 'Diseño de espacios públicos y áreas verdes.',
    imagenes: [
      'Proyectos/Parque Villarrica/WhatsApp Image 2026-07-03 at 10.56.40 AM.jpeg',
      'Proyectos/Parque Villarrica/WhatsApp Image 2026-07-03 at 10.56.40 AM (1).jpeg',
      'Proyectos/Parque Villarrica/WhatsApp Image 2026-07-03 at 10.56.41 AM.jpeg',
      'Proyectos/Parque Villarrica/WhatsApp Image 2026-07-03 at 10.56.41 AM (1).jpeg',
      'Proyectos/Parque Villarrica/WhatsApp Image 2026-07-03 at 10.56.41 AM (2).jpeg',
      'Proyectos/Parque Villarrica/WhatsApp Image 2026-07-03 at 10.56.41 AM (3).jpeg',
      'Proyectos/Parque Villarrica/WhatsApp Image 2026-07-03 at 10.56.41 AM (4).jpeg',
      'Proyectos/Parque Villarrica/WhatsApp Image 2026-07-03 at 10.56.41 AM (5).jpeg',
    ]
  },
  {
    nombre: 'Pocuro',
    descripcion: 'Proyecto de arquitectura residencial contemporánea.',
    imagenes: [
      'Proyectos/Pocuro/6V4A8297-HDR.jpg',
      'Proyectos/Pocuro/6V4A8308-HDR.jpg',
      'Proyectos/Pocuro/6V4A8312-HDR.jpg',
      'Proyectos/Pocuro/6V4A8329-HDR.jpg',
      'Proyectos/Pocuro/6V4A8344-HDR.jpg',
      'Proyectos/Pocuro/6V4A8352-HDR.jpg',
    ]
  },
  {
    nombre: 'San Anselmo',
    descripcion: 'Diseño de vivienda con integración al entorno natural.',
    imagenes: [
      'Proyectos/San Anselmo/WhatsApp Image 2026-07-03 at 10.56.42 AM.jpeg',
      'Proyectos/San Anselmo/WhatsApp Image 2026-07-03 at 10.56.42 AM (1).jpeg',
      'Proyectos/San Anselmo/WhatsApp Image 2026-07-03 at 10.56.42 AM (2).jpeg',
      'Proyectos/San Anselmo/WhatsApp Image 2026-07-03 at 10.56.42 AM (3).jpeg',
      'Proyectos/San Anselmo/WhatsApp Image 2026-07-03 at 10.56.43 AM.jpeg',
      'Proyectos/San Anselmo/WhatsApp Image 2026-07-03 at 10.56.43 AM (1).jpeg',
      'Proyectos/San Anselmo/WhatsApp Image 2026-07-03 at 10.56.43 AM (2).jpeg',
    ]
  },
  {
    nombre: 'Santa Monica',
    descripcion: 'Proyecto de remodelación con estilo moderno y funcional.',
    imagenes: [
      'Proyectos/santa monica/6V4A7903-HDR.jpg',
      'Proyectos/santa monica/6V4A7906-HDR.jpg',
      'Proyectos/santa monica/6V4A7909-HDR.jpg',
      'Proyectos/santa monica/6V4A7923-HDR.jpg',
      'Proyectos/santa monica/6V4A7927-HDR.jpg',
      'Proyectos/santa monica/6V4A7938-HDR.jpg',
      'Proyectos/santa monica/6V4A7960-HDR.jpg',
      'Proyectos/santa monica/6V4A7969-HDR.jpg',
    ]
  }
];

// Variables globales para el lightbox
let lightboxActual = null;
let imagenActualIndex = 0;

// Inicializar la página
document.addEventListener('DOMContentLoaded', () => {
  renderizarProyectos();
  inicializarLightbox();
  inicializarNavbar();
  inicializarMenuMovil();
});

// Renderizar todos los proyectos
function renderizarProyectos() {
  const container = document.getElementById('proyectos-container');
  
  container.innerHTML = proyectos.map((proyecto, index) => `
    <div class="proyecto-item" style="animation-delay: ${index * 0.1}s;">
      <div class="proyecto-header-flex">
        <div class="proyecto-info">
          <h2>${proyecto.nombre}</h2>
          <p>${proyecto.descripcion}</p>
          <button class="btn-ver-mas" data-proyecto="${proyecto.nombre}" aria-expanded="false">
            <span>Ver más</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        </div>
        <div class="proyecto-imagen-principal">
          <img src="${proyecto.imagenes[0]}" alt="${proyecto.nombre} - Imagen principal" loading="lazy">
          <div class="galeria-overlay">
            <div class="galeria-overlay-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <div class="proyecto-galeria-expandible" data-proyecto="${proyecto.nombre}" style="display: none;">
        <div class="proyecto-galeria">
          ${proyecto.imagenes.map((imagen, imgIndex) => `
            <div class="galeria-imagen" data-proyecto="${proyecto.nombre}" data-index="${imgIndex}">
              <img src="${imagen}" alt="${proyecto.nombre} - Imagen ${imgIndex + 1}" loading="lazy">
              <div class="galeria-overlay">
                <div class="galeria-overlay-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');
  
  // Agregar event listeners a los botones Ver más
  document.querySelectorAll('.btn-ver-mas').forEach(btn => {
    btn.addEventListener('click', () => {
      const proyecto = btn.dataset.proyecto;
      toggleGaleria(proyecto, btn);
    });
  });
}

// Toggle galería expandible
function toggleGaleria(proyecto, btn) {
  const galeria = document.querySelector(`.proyecto-galeria-expandible[data-proyecto="${proyecto}"]`);
  const isOpen = galeria.style.display !== 'none';
  
  if (isOpen) {
    galeria.style.display = 'none';
    btn.setAttribute('aria-expanded', 'false');
    btn.classList.remove('active');
  } else {
    galeria.style.display = 'block';
    btn.setAttribute('aria-expanded', 'true');
    btn.classList.add('active');
    
    // Scroll suave a la galería
    setTimeout(() => {
      galeria.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
  }
}

// Inicializar eventos del lightbox
function inicializarLightbox() {
  const galerias = document.querySelectorAll('.galeria-imagen');
  
  galerias.forEach(galeria => {
    galeria.addEventListener('click', (e) => {
      e.preventDefault();
      const proyecto = galeria.dataset.proyecto;
      const index = parseInt(galeria.dataset.index);
      abrirLightbox(proyecto, index);
    });
  });
  
  // Cerrar con ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') cerrarLightbox();
  });
}

// Abrir lightbox
function abrirLightbox(proyecto, index) {
  lightboxActual = proyecto;
  imagenActualIndex = index;
  
  // Crear modal si no existe
  let modal = document.getElementById('lightbox-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'lightbox-modal';
    modal.className = 'lightbox-modal';
    modal.innerHTML = `
      <div class="lightbox-content">
        <img id="lightbox-image" class="lightbox-image" src="" alt="">
        <div class="lightbox-overlay"></div>
        <button class="lightbox-nav-btn prev" aria-label="Imagen anterior">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button class="lightbox-nav-btn next" aria-label="Imagen siguiente">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
        <button class="lightbox-close-btn" aria-label="Cerrar">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div class="lightbox-counter">
          <span id="lightbox-current">1</span> / <span id="lightbox-total">1</span>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    
    // Event listeners
    modal.querySelector('.lightbox-close-btn').addEventListener('click', cerrarLightbox);
    modal.querySelector('.lightbox-nav-btn.prev').addEventListener('click', imagenAnterior);
    modal.querySelector('.lightbox-nav-btn.next').addEventListener('click', imagenSiguiente);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) cerrarLightbox();
    });
    
    // Navegación con teclado
    document.addEventListener('keydown', (e) => {
      if (lightboxActual) {
        if (e.key === 'ArrowLeft') imagenAnterior();
        if (e.key === 'ArrowRight') imagenSiguiente();
      }
    });
  }
  
  actualizarLightbox();
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Cerrar lightbox
function cerrarLightbox() {
  const modal = document.getElementById('lightbox-modal');
  if (modal) {
    modal.classList.remove('active');
    lightboxActual = null;
    document.body.style.overflow = '';
  }
}

// Imagen anterior
function imagenAnterior() {
  if (!lightboxActual) return;
  const proyecto = proyectos.find(p => p.nombre === lightboxActual);
  imagenActualIndex = (imagenActualIndex - 1 + proyecto.imagenes.length) % proyecto.imagenes.length;
  actualizarLightbox();
}

// Imagen siguiente
function imagenSiguiente() {
  if (!lightboxActual) return;
  const proyecto = proyectos.find(p => p.nombre === lightboxActual);
  imagenActualIndex = (imagenActualIndex + 1) % proyecto.imagenes.length;
  actualizarLightbox();
}

// Actualizar lightbox
function actualizarLightbox() {
  const proyecto = proyectos.find(p => p.nombre === lightboxActual);
  const imagen = proyecto.imagenes[imagenActualIndex];
  
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxCurrent = document.getElementById('lightbox-current');
  const lightboxTotal = document.getElementById('lightbox-total');
  
  lightboxImage.src = imagen;
  lightboxImage.alt = `${proyecto.nombre} - Imagen ${imagenActualIndex + 1}`;
  lightboxCurrent.textContent = imagenActualIndex + 1;
  lightboxTotal.textContent = proyecto.imagenes.length;
}

// Inicializar navbar
function inicializarNavbar() {
  const navbar = document.getElementById('navbar');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  
  if (!navbar) return;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });
  
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      const mobileMenu = document.getElementById('mobile-menu');
      const backdrop = document.getElementById('mobile-menu-backdrop');
      mobileMenu.classList.toggle('active');
      backdrop.classList.toggle('active');
      mobileMenuBtn.setAttribute('aria-expanded', mobileMenu.classList.contains('active'));
    });
  }
}

// Inicializar menú móvil
function inicializarMenuMovil() {
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  const mobileMenu = document.getElementById('mobile-menu');
  const backdrop = document.getElementById('mobile-menu-backdrop');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  
  function cerrarMenu() {
    mobileMenu.classList.remove('active');
    backdrop.classList.remove('active');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
  }
  
  if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', cerrarMenu);
  }
  
  if (backdrop) {
    backdrop.addEventListener('click', cerrarMenu);
  }
  
  // Cerrar al hacer clic en un enlace
  const mobileLinks = document.querySelectorAll('.mobile-link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', cerrarMenu);
  });
  
  // Cerrar con ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
      cerrarMenu();
    }
  });
}

// Lazy loading de imágenes
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });
  
  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// Scroll reveal para elementos
const revealElements = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  revealElements.forEach(el => {
    revealObserver.observe(el);
  });
}
