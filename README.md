# Cuatro Trazos — Sitio Web Oficial

Estudio de arquitectura y diseño de ambientes con sede en Santiago, Chile. Sitio web institucional desarrollado con un enfoque elegante, minimalista y totalmente responsive, pensado para mostrar la identidad de la marca y su portfolio de proyectos.

---

## Información General

| Campo | Detalle |
|---|---|
| **Nombre** | Cuatro Trazos |
| **Rubro** | Arquitectura · Diseño de Interiores |
| **Ubicación** | Santiago, Chile |
| **Fundadoras** | Daphner Ibáñez & Camila Satorres |
| **Sitio** | 3 páginas estáticas (Home, Proyectos, Sobre Nosotros) |

---

## Stack Tecnológico

### Lenguajes Base
| Tecnología | Uso |
|---|---|
| **HTML5** | Estructura semántica, SEO optimizado, atributos ARIA |
| **CSS3** | Variables personalizadas, animaciones, responsive design |
| **JavaScript (Vanilla)** | Interactividad, navegación, galerías, lightbox, menú móvil |

### Frameworks y Librerías
| Tecnología | Implementación |
|---|---|
| **Tailwind CSS** | CDN con configuración personalizada de colores y tipografías propias de la marca |
| **Google Fonts** | Playfair Display (serif) + Manrope (sans-serif) |

### Técnicas y Patrones
- Mobile First Responsive Design
- CSS Custom Properties (Design Tokens)
- IntersectionObserver para animaciones y lazy loading
- requestAnimationFrame para scroll events
- GPU acceleration (translateZ / will-change)
- prefers-reduced-motion para accesibilidad

---

## Estructura del Proyecto

```
Cuatrotrazos/
├── index.html                       # Página principal (Home)
├── proyectos.html                   # Galería de proyectos
├── sobre-nosotros.html              # Página institucional
├── css/
│   ├── styles.css                   # Estilos globales (~900 líneas)
│   └── proyectos.css                # Estilos específicos de galería
├── js/
│   ├── main.js                      # Lógica principal (navbar, scroll, parallax, menú móvil)
│   └── proyectos.js                 # Gestión de galerías, lightbox, renderizado dinámico
├── assets/                          # Imágenes del sitio (logo, hero, iconos, oficinas)
├── Proyectos/                       # Fotografías de cada proyecto por carpeta
│   ├── Alba/
│   ├── Atenas/
│   ├── Augusto Legia/
│   ├── club hipico/
│   ├── huertos familiares/
│   ├── Llico/
│   ├── Parque Villarrica/
│   ├── Pocuro/
│   ├── San Anselmo/
│   └── santa monica/
├── OPTIMIZACIONES_REALIZADAS.md    # Registro de optimizaciones
├── REVISION_FINDINGS.md            # Hallazgos de revisión técnica
├── _Portafolio_CuatroTrazos.pdf    # Portafolio en PDF
├── cuatro-trazos.zip               # Backup del proyecto
└── README.md                        # Este archivo
```

---

## Páginas y Funcionalidades

### 1. Home (`index.html`)
- Hero section con logo centrado sobre fondo gris metálico
- Sección de servicios (Arquitectura, Diseño, Remodelación, Mobiliario)
- Slider horizontal de proyectos destacados
- Sección de proceso de trabajo
- Formulario de contacto
- Botón flotante de WhatsApp

### 2. Proyectos (`proyectos.html`)
- Galería dinámica renderizada desde JavaScript
- **10 proyectos** con título y descripción detallada:
  1. **Proyecto Alba** — Interiorismo moderno y lúdico, espacios multifuncionales
  2. **Proyecto Atenas** — Mobiliario focal que une living, comedor y cocina
  3. **Proyecto Augusto Legia** — Remodelación cocina estilo Farmhouse con isla y desayunador
  4. **Proyecto Club Hipico** — Cocina moderna con líneas limpias y materiales mate
  5. **Proyecto Huertos Familiares** — Cocina nueva contemporánea, cada cosa en su lugar
  6. **Proyecto Llico** — Interiorismo Airbnb atractivo, funcional y atemporal
  7. **Proyecto Parque Villarrica** — Remodelación multiespacio: dormitorio a oficina, sala hobby, closet
  8. **Proyecto Pocuro** — Interiorismo Airbnb atractivo, funcional y atemporal
  9. **Proyecto San Anselmo** — Paisajismo unificando quincho, piscina, patio y fogón
  10. **Proyecto Santa Mónica** — Cocina concepto abierto, estilo clásico contemporáneo
- Lightbox con navegación por teclado (flechas + ESC)
- Galería expandible "Ver más / Ver menos"

### 3. Sobre Nosotras (`sobre-nosotros.html`)
- Historia del estudio y fundadoras
- Filosofía de diseño (neuroarquitectura, biofílico)
- Equipo y valores
- Imagen de oficinas

---

## Características Técnicas Destacadas

### Diseño Visual
- **Paleta cálida**: cream `#FAF8F5`, beige `#F5F0EB`, warm-taupe `#C8A98F`
- **Tipografía dual**: Playfair Display (títulos serif elegantes) + Manrope (cuerpo sans moderno)
- **Navbar transparente** en desktop que gana fondo sólido al hacer scroll
- **Botón WhatsApp flotante** circular con imagen personalizada

### Interactividad
- Scroll reveal con IntersectionObserver (fade + slide up)
- Parallax suave en desktop
- Menú móvil full-screen con animaciones
- Navegación por teclado en lightbox
- Toasts informativos ("Saber más")
- Efectos hover en tarjetas y botones (lift + zoom)

### Rendimiento
- Lazy loading en imágenes del sitio
- CSS crítico inline en cada página
- JavaScript diferido (`defer`)
- Preconnect a Google Fonts
- Event listeners pasivos para scroll

### Accesibilidad (a11y)
- Atributos `alt` descriptivos en todas las imágenes
- Labels ARIA en botones y menú móvil
- Navegación por teclado completa
- Respeto a `prefers-reduced-motion`
- Contraste de colores verificado
- Estructura semántica HTML5

### SEO
- Meta descriptions optimizadas por página
- Jerarquía correcta de headings (`h1` → `h6`)
- Etiquetas `robots` para indexación
- Viewport configurado
- Enlaces internos entre páginas

---

## Historial de Optimizaciones

| Fecha | Cambio |
|---|---|
| Julio 2026 | Corrección meta description (Buenos Aires → Santiago, Chile) |
| Julio 2026 | Eliminación de código muerto (`initHablemosToast`, `initVerTodosToast`) |
| Julio 2026 | Navbar rediseñada: sin logo, links centrados, fondo transparente en desktop |
| Julio 2026 | Hero section con logo flotante sobre fondo gris metálico |
| Julio 2026 | Botón WhatsApp rediseñado: imagen circular sin fondo verde |
| Julio 2026 | Agregados atributos `alt` a todas las imágenes |
| Julio 2026 | Consolidación de estilos y media queries en CSS |
| Agosto 2026 | Actualización de títulos: formato "Proyecto [Nombre] \| Diseño e implementación" |
| Agosto 2026 | Descripciones detalladas personalizadas para cada uno de los 10 proyectos |

---

## Cómo Ejecutar Localmente

1. Clonar o descargar el repositorio
2. Abrir el archivo `index.html` en cualquier navegador moderno
3. No requiere servidor ni dependencias adicionales (todo via CDN)

---

## Navegadores Soportados

- Chrome / Edge (últimas versiones)
- Firefox (últimas versiones)
- Safari (macOS / iOS)
- Dispositivos móviles (iOS / Android)

---

## Estado del Proyecto

**Versión actual:** Optimizada y lista para producción  
**Última actualización:** Agosto 2026  
**Mantenido por:** OpenCode AI Assistant  

---

> *"Cuatro Trazos — Arquitectura · Diseño"*  
> Transformamos espacios con diseño innovador y profesional en Santiago, Chile.
