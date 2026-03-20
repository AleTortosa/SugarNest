# DOCUMENTACIÓN DEL PROYECTO SugarNest

## 1. DESCRIPCIÓN GENERAL DEL PROYECTO
**Objetivo principal:**  
Crear una web de presentación para la pastelería ficticia SugarNest, con páginas de Home, Menú, Contacto y secciones legales (Aviso Legal, Privacidad, Cookies). También incluye un footer, navbar y hero visual.

**Qué problema resuelve:**  
Permite mostrar el concepto de la marca, su identidad visual y servicios al público. Es un proyecto en construcción.

**Estado actual del proyecto:**  
- Frontend funcional con React + Vite.  
- Routing con `react-router-dom`.  
- Footer y Navbar responsive implementados.  
- Secciones legales completas con contenido obligatorio para frontend, aunque sin marca registrada todavía.  
- Página Home con hero visual.

---

## 2. STACK TECNOLÓGICO
- **Frontend:** React + Vite  
- **Routing:** `react-router-dom`  
- **CSS:** CSS modular por componente (`App.css`, `Navbar.css`, `Footer.css`, `home.css`)  
- **Iconos:** `react-icons` (`FaInstagram`, `FaWhatsapp`, `MdEmail`)  
- **Tipografías:** Google Fonts (`Cormorant Garamond`, `Playfair Display`)  

---

## 3. ARQUITECTURA Y DISEÑO

**Estructura del proyecto:**

```
src/
├─ assets/
│  └─ images/
├─ components/
│  ├─ Carrusel.jsx
│  ├─ Navbar.jsx
│  ├─ Footer.jsx
│  └─ ScrollToTop.jsx
├─ pages/
│  ├─ home.jsx
│  ├─ Contact.jsx
│  ├─ Menu.jsx
│  └─ legal/
│     ├─ AvisoLegal.jsx
│     ├─ Privacidad.jsx
│     └─ Cookies.jsx
├─ styles/
│  ├─ app.css
│  ├─ navbar.css
│  ├─ footer.css
│  └─ home.css
├─ App.jsx
└─ main.jsx
```

**Patrones y organización:**

* **Componentes modulares**: Navbar y Footer separados, CSS independiente por componente para mantener modularidad.
* **Páginas organizadas por funcionalidad**: Carpeta `pages` para cada página y subcarpeta `legal` para las páginas legales.
* **Assets**: Imágenes en `assets/images` para fácil reutilización.
* **CSS separado**: Existen diferentes archivos CSS para las páginas, más `app.css` para estilos globales.
* **Routing limpio**: Cada página exporta su componente y se integra en `main.jsx` con React Router.
* **Convención de nombres**: CamelCase para componentes React, minúsculas para archivos de páginas, consistencia en carpetas y nombres de CSS.

**Organización de carpetas/componentes:**  
- `components/`: componentes reutilizables
- `pages/`: páginas principales
- `styles/`: CSS modular  

---

## 4. FUNCIONALIDADES IMPLEMENTADAS

### UI base
- Navbar responsive con navegación interna
- Footer responsive con enlaces legales y redes sociales
- Routing con `react-router-dom` hacia páginas legales y secciones principales.  
- Páginas legales (`AvisoLegal`, `Privacidad`, `Cookies`) con contenido obligatorio mínimo.  
- Home con hero visual

### Carrusel de imágenes
- Componente reutilizable `<Carrusel />`
- Render dinámico mediante `.map()`
- Duplicación de imágenes para simular loop infinito
- Pausa en hover

### Modal de imagen (zoom)
- Estado con `useState`
- Muestra imagen ampliada al hacer click
- Overlay con `position: fixed`
- Cierre mediante botón (SVG)

**Cómo funcionan internamente:**  
- Navbar y Footer permanecen fijos en todas las páginas  
- El contenido principal cambia según la ruta mediante React Router  
- Enlaces y elementos interactivos usan estilos con hover y transiciones CSS  

---

## 5. DECISIONES TÉCNICAS

- Páginas legales implementadas aunque la marca no esté registrada: se indica “proyecto en desarrollo” para cumplir requisitos legales mínimos.
- Uso de `.map()` para render dinámico de listas
- Uso de props para reutilización de componentes
- Duplicación de arrays (`[...imagenes, ...imagenes]`) para evitar cortes en carrusel infinito
- Uso de `background-image` en hero para mejor control responsive
- Separación de CSS por componente para mantener modularidad y facilidad de mantenimiento.
- Uso de `display: contents` para layout de footer en escritorio: permite que los hijos de `.footer-top` se comporten como si fueran hijos directos de `.footer-content`.

## 6. PROBLEMAS DETECTADOS Y SOLUCIONES

- ❌ Footer en móvil aparecía en tres líneas debido a tamaño de fuente →  
  ✔️ solucionado con flexbox y media queries.

- ❌ Scroll a top en rutas React no funcionaba con Link →  
  ✔️ se implementó `useEffect(() => window.scrollTo(0,0), [])` en componentes de página.

- ❌ Salto en carrusel →  
  ✔️ duplicación de imágenes + ajuste de `translateX`.

- ❌ `key` duplicadas →  
  ✔️ uso de combinación `src-index`.

- ❌ Doble render en desarrollo →  
  ✔️ identificado como comportamiento de React StrictMode.

- ❌ Hover afectando a todos los elementos →  
  ✔️ ajuste de selectores CSS.

## 7. ESTADO ACTUAL

- Layout principal completo  
- Routing funcional  
- Páginas legales implementadas  
- Carrusel reutilizable operativo  
- Modal de imágenes funcional  
- Home en desarrollo (estructura definida, contenido en progreso)  

## 8. PRÓXIMOS PASOS

- Completar contenido de la Home  
- Diseñar página Menú  
- Implementar página Contacto  
- Mejorar UX y animaciones  
- Optimización de imágenes  

## 9. CONTEXTO ADICIONAL

* Las imágenes de hero son de Unsplash, libres bajo su licencia.
* La web es un frontend de exposición, no recoge datos personales todavía.
* Los enlaces legales cumplen con lo mínimo necesario para frontend.
* Estilo general: estética elegante, paleta de rosas y rojos.