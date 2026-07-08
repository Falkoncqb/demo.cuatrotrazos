/* ============================================================
   CUATRO TRAZOS — JavaScript Principal
   Arquitectura · Diseño · Ejecución
   ============================================================ */

/* ------------------------------------------------------------
   1. NAVBAR — Cambio de color al scroll, siempre visible
   ------------------------------------------------------------ */
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  function updateNavbar() {
    const currentY = window.pageYOffset || document.documentElement.scrollTop || 0;

    if (currentY > 30) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  }

  window.addEventListener('scroll', () => {
    window.requestAnimationFrame(updateNavbar);
  }, { passive: true });

  // Ejecutar una vez al cargar
  updateNavbar();

  // Guardia para móvil: si el navbar desaparece del viewport (bug iOS Safari/Chrome),
  // forzarlo a top: 0 y re-aplicar el transform GPU
  function guardNavbar() {
    const rect = navbar.getBoundingClientRect();
    if (rect.top < -2 || rect.top > 2 || rect.width === 0) {
      navbar.style.top = '0px';
      navbar.style.left = '0px';
      navbar.style.width = '100%';
      navbar.style.position = 'fixed';
      navbar.style.transform = 'translateZ(0)';
      navbar.style.webkitTransform = 'translateZ(0)';
      navbar.style.opacity = '1';
      navbar.style.visibility = 'visible';
      navbar.style.display = 'block';
    }
  }

  // En móvil (< 1024px) verificar frecuentemente como respaldo
  const isMobile = () => window.innerWidth < 1024;
  let guardInterval = null;

  function startGuard() {
    if (guardInterval) return;
    guardInterval = setInterval(guardNavbar, 150);
  }

  function stopGuard() {
    if (guardInterval) {
      clearInterval(guardInterval);
      guardInterval = null;
    }
  }

  if (isMobile()) startGuard();

  window.addEventListener('resize', () => {
    if (isMobile()) startGuard(); else stopGuard();
  }, { passive: true });

  // Forzar visibilidad durante interacciones táctiles (bug común en iOS)
  ['touchstart', 'touchmove', 'touchend', 'scroll'].forEach((evt) => {
    window.addEventListener(evt, guardNavbar, { passive: true });
  });
})();

/* ------------------------------------------------------------
   2. MENÚ MÓVIL — Apertura, cierre, backdrop y bloqueo de scroll
   ------------------------------------------------------------ */
(function initMobileMenu() {
  const mobileMenuBtn   = document.getElementById('mobile-menu-btn');
  const mobileMenu      = document.getElementById('mobile-menu');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  const mobileMenuBackdrop = document.getElementById('mobile-menu-backdrop');
  const mobileLinks     = document.querySelectorAll('.mobile-link');

  if (!mobileMenuBtn || !mobileMenu || !mobileMenuClose) return;

  function openMenu() {
    mobileMenu.classList.add('open');
    if (mobileMenuBackdrop) mobileMenuBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
    mobileMenuBtn.setAttribute('aria-expanded', 'true');
    // Accesibilidad: foco en el botón de cierre al abrir
    setTimeout(() => mobileMenuClose.focus(), 50);
  }

  function closeMenu() {
    mobileMenu.classList.remove('open');
    if (mobileMenuBackdrop) mobileMenuBackdrop.classList.remove('open');
    document.body.style.overflow = '';
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    // Accesibilidad: devuelve el foco al botón que abrió el menú
    mobileMenuBtn.focus();
  }

  // Eventos de apertura y cierre del menú
  mobileMenuBtn.addEventListener('click', openMenu);
  mobileMenuBtn.addEventListener('touchend', (e) => { e.preventDefault(); openMenu(); }, { passive: false });
  
  mobileMenuClose.addEventListener('click', closeMenu);
  mobileMenuClose.addEventListener('touchend', (e) => { e.preventDefault(); closeMenu(); }, { passive: false });
  
  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
    // touchend omitido: el evento click nativo del navegador móvil maneja la navegación limpiamente
  });

  // Cerrar al hacer clic en el backdrop
  if (mobileMenuBackdrop) {
    mobileMenuBackdrop.addEventListener('click', closeMenu);
  }

  // Cerrar menú con tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
      closeMenu();
    }
  });

  // Cerrar menú si se redimensiona a desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024 && mobileMenu.classList.contains('open')) {
      closeMenu();
    }
  }, { passive: true });
})();

/* ------------------------------------------------------------
   3. SCROLL REVEAL — Animación de entrada con IntersectionObserver
   Observa elementos con clase .reveal y añade .visible al entrar
   en el viewport.
   ------------------------------------------------------------ */
(function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  if (!revealElements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold:  0.1,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  revealElements.forEach(el => observer.observe(el));
})();

/* ------------------------------------------------------------
   4. GALERÍA — Navegación con botones anterior / siguiente
   ------------------------------------------------------------ */
(function initGallery() {
  const gallery = document.getElementById('gallery');
  const prevBtn = document.getElementById('gallery-prev');
  const nextBtn = document.getElementById('gallery-next');

  if (!gallery || !prevBtn || !nextBtn) return;

  const SCROLL_AMOUNT = 520; // ancho aproximado de tarjeta + gap

  prevBtn.addEventListener('click', () => {
    gallery.scrollBy({ left: -SCROLL_AMOUNT, behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    gallery.scrollBy({ left: SCROLL_AMOUNT, behavior: 'smooth' });
  });
})();

/* ------------------------------------------------------------
   5. PARALLAX — Motor de desplazamiento por capas
   Alto rendimiento: usa requestAnimationFrame + will-change + GPU
   Se desactiva automáticamente en móvil y con prefers-reduced-motion
   ------------------------------------------------------------ */
(function initParallax() {
  // Respetar preferencia de movimiento reducido
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  // Solo activo en tablet y desktop (>= 768px)
  const isDesktop = () => window.innerWidth >= 768;

  // Recopilar todos los elementos con data-parallax-speed
  const parallaxElements = Array.from(
    document.querySelectorAll('[data-parallax-speed]')
  ).map(el => ({
    el,
    speed: parseFloat(el.dataset.parallaxSpeed) || 0.3,
    currentY: 0,
  }));

  if (!parallaxElements.length) return;

  let ticking = false;
  let lastScrollY = window.pageYOffset;

  function updateParallax() {
    if (!isDesktop()) {
      // En móvil: resetear transformaciones
      parallaxElements.forEach(({ el }) => {
        el.style.transform = 'translateY(0)';
      });
      ticking = false;
      return;
    }

    const scrollY = window.pageYOffset;

    parallaxElements.forEach(({ el, speed }) => {
      const rect    = el.parentElement.getBoundingClientRect();
      const centerY = rect.top + rect.height / 2 - window.innerHeight / 2;
      const offset  = centerY * speed;

      // Aplicar transform con translate3d para forzar compositing en GPU
      el.style.transform = `translate3d(0, ${offset}px, 0)`;
    });

    lastScrollY = scrollY;
    ticking     = false;
  }

  // Ejecutar una vez al cargar para posición inicial correcta
  updateParallax();

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }, { passive: true });

  // Re-calcular al cambiar tamaño de ventana
  window.addEventListener('resize', () => {
    window.requestAnimationFrame(updateParallax);
  }, { passive: true });
})();

/* ------------------------------------------------------------
   6. TOAST "SABER MÁS" — Globo de mensaje al hacer clic
   ------------------------------------------------------------ */
(function initSaberMasToast() {
  const saberMasLinks = document.querySelectorAll('.js-saber-mas');
  const toast = document.getElementById('saber-mas-toast');
  if (!saberMasLinks.length || !toast) return;

  let hideTimeout = null;

  function showToast(e) {
    e.preventDefault();
    toast.classList.add('visible');

    if (hideTimeout) clearTimeout(hideTimeout);
    hideTimeout = setTimeout(() => {
      toast.classList.remove('visible');
    }, 2800);
  }

  saberMasLinks.forEach(link => {
    link.addEventListener('click', showToast);
  });
})();

/* ------------------------------------------------------------
   7. TOAST "HABLEMOS" — Globo de mensaje al hacer clic
   ------------------------------------------------------------ */
(function initHablemosToast() {
  const hablemosLinks = document.querySelectorAll('.js-hablemos');
  const toast = document.getElementById('hablemos-toast');
  if (!hablemosLinks.length || !toast) return;

  let hideTimeout = null;

  function showToast(e) {
    e.preventDefault();
    toast.classList.add('visible');

    if (hideTimeout) clearTimeout(hideTimeout);
    hideTimeout = setTimeout(() => {
      toast.classList.remove('visible');
    }, 2800);
  }

  hablemosLinks.forEach(link => {
    link.addEventListener('click', showToast);
  });
})();

/* ------------------------------------------------------------
   8. TOAST "VER TODOS LOS PROYECTOS" — Globo de mensaje al hacer clic
   ------------------------------------------------------------ */
(function initVerTodosToast() {
  const verTodosLinks = document.querySelectorAll('.js-ver-todos');
  const toast = document.getElementById('ver-todos-toast');
  if (!verTodosLinks.length || !toast) return;

  let hideTimeout = null;

  function showToast(e) {
    e.preventDefault();
    toast.classList.add('visible');

    if (hideTimeout) clearTimeout(hideTimeout);
    hideTimeout = setTimeout(() => {
      toast.classList.remove('visible');
    }, 3500);
  }

  verTodosLinks.forEach(link => {
    link.addEventListener('click', showToast);
  });
})();
