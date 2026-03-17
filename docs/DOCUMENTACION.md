# DOCUMENTACIÓN DEL PROYECTO SugarNest

## 1. DESCRIPCIÓN GENERAL DEL PROYECTO
**Objetivo principal:**  
Crear una web de presentación para la pastelería ficticia SugarNest, con páginas de Home, Menú, Contacto y secciones legales (Aviso Legal, Privacidad, Cookies). También incluye un footer, navbar y hero visual.

**Qué problema resuelve:**  
Permite mostrar el concepto de la marca, su identidad visual y servicios al público. Es un proyecto para portfolio y TFG.

**Estado actual del proyecto:**  
- Frontend funcional con React + Vite.  
- Routing con `react-router-dom`.  
- Footer y Navbar responsive implementados.  
- Secciones legales completas con contenido obligatorio para frontend, aunque sin marca registrada todavía.  
- Página Home con hero visual aún pendiente de ajuste de imagen responsiva.

---

## 2. STACK TECNOLÓGICO
- **Frontend:** React + Vite  
- **Routing:** `react-router-dom`  
- **CSS:** CSS modular por componente (`App.css`, `Navbar.css`, `Footer.css`, `home.css`)  
- **Iconos:** `react-icons` (`FaInstagram`, `FaWhatsapp`, `MdEmail`)  
- **Tipografías:** Google Fonts (`Cormorant Garamond`, `Playfair Display`)  
- **Versiones:** No se especificaron versiones exactas.

---

## 3. ARQUITECTURA Y DISEÑO

**Estructura del proyecto:**

```
src/
├─ assets/
│  └─ images/
│     ├─ hero.png
│     └─ logoSugarNest.png
├─ components/
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
│  ├─ App.css
│  ├─ Navbar.css
│  ├─ Footer.css
│  └─ home.css
├─ App.jsx
└─ main.jsx
```

**Patrones y organización:**

* **Componentes modulares**: Navbar y Footer separados, CSS independiente por componente para mantener modularidad.
* **Páginas organizadas por funcionalidad**: Carpeta `pages` para cada página y subcarpeta `legal` para las páginas legales.
* **Assets centralizados**: Imágenes en `assets/images` para fácil reutilización.
* **CSS separado**: Cada componente/página tiene su archivo CSS, más `app.css` para estilos globales.
* **Routing limpio**: Cada página exporta su componente y se integra en `main.jsx` con React Router.
* **Convención de nombres**: CamelCase para componentes React, minúsculas para archivos de páginas, consistencia en carpetas y nombres de CSS.

**Patrones usados:**  
- Composición de componentes.  
- CSS modular por componente para aislar estilos.  
- Responsive design con media queries y `flex` para layout de footer y navbar.  

**Organización de carpetas/componentes:**  
- `components/`: componentes reutilizables (Navbar, Footer)  
- `pages/`: páginas principales (Home, Menu, Contacto, legales)  
- `styles/`: CSS por componente  

---

## 4. FUNCIONALIDADES IMPLEMENTADAS
- Navbar responsive con links internos.  
- Footer responsive:  
  - En móvil: `footer-brand` + `footer-social` arriba, `footer-links` abajo.  
  - En escritorio: tres hijos (`footer-brand`, `footer-social`, `footer-links`) con `space-between` usando `display: contents` y `flex: 1`.  
- Footer social con iconos interactivos y hover scale.  
- Routing con `react-router-dom` hacia páginas legales y secciones principales.  
- Páginas legales (`AvisoLegal`, `Privacidad`, `Cookies`) con contenido obligatorio mínimo.  
- Home con hero visual (`img`) y texto de bienvenida.  

**Cómo funcionan internamente:**  
- Navbar y Footer siempre visibles, Home y páginas legales renderizadas por rutas.  
- Footer utiliza flexbox con media queries y `display: contents` para layout adaptable sin duplicar elementos.  
- Enlaces sociales y legales estilizados y con hover.  

---

## 5. CÓDIGO RELEVANTE

**Footer.jsx**

```jsx
<footer className="footer">
  <div className="footer-content">
    <div className="footer-top">
      <div className="footer-brand">
        <h3><Link to="/">SugarNest</Link></h3>
        <p>Pastelería artesanal</p>
      </div>
      <div className="footer-social">
        <h3>Síguenos en redes sociales</h3>
        <div className="links-redes">
          <a href="https://instagram.com/sugarnest.bakery/" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
          <a href="https://wa.me/34621387716" target="_blank"><FaWhatsapp/></a>
          <a href="mailto:sugarnest.contacto@gmail.com"><MdEmail/></a>
        </div>
      </div>
    </div>
    <div className="footer-links">
      <h4><Link to="/aviso-legal">Aviso legal</Link></h4>
      <h4><Link to="/privacidad">Privacidad</Link></h4>
      <h4><Link to="/cookies">Cookies</Link></h4>
    </div>
  </div>
  <p className="copy">© 2026 SugarNest | Todos los derechos reservados</p>
</footer>
```

**Ejemplo de página legal (AvisoLegal.jsx)**

```jsx
export function AvisoLegal() {
  return (
    <main className="legal">
      <h1>Aviso legal</h1>
      <p><strong>Titular:</strong> SugarNest (proyecto en desarrollo)</p>
      <p><strong>Email:</strong> sugarnest.contacto@gmail.com</p>
      <p>El acceso y uso de este sitio web atribuye la condición de usuario e implica la aceptación de las condiciones aquí descritas.</p>
    </main>
  )
}
```

**CSS Footer y legal**

* `.footer-content` con `flex-wrap` y `gap`, `.footer-top` para organizar branding/social, `.footer-links` con `flex`.
* `.legal` centrado y con máximo ancho 900px.
* Hover y transform en iconos y links.
* Media queries para responsive y `display: contents` para escritorio.

## 6. DECISIONES TÉCNICAS IMPORTANTES

* Uso de `display: contents` para layout de footer en escritorio: permite que los hijos de `.footer-top` se comporten como si fueran hijos directos de `.footer-content`.
* Separación de CSS por componente para mantener modularidad y facilidad de mantenimiento.
* Hero en Home inicialmente con `<img>` y clase `.home-hero`.
* Decidido usar colores rosas y rojo de la paleta estética para branding.
* Páginas legales implementadas aunque la marca no esté registrada: se indica “proyecto en desarrollo” para cumplir requisitos legales mínimos.
* Alternativas descartadas:

  * Crear un hero con `<img>` directamente en lugar de `<div>` con `background-image`. Se decidió usar `<div>` para control de cover y `vh` adaptativo.

## 7. PROBLEMAS DETECTADOS Y SOLUCIONES

* Footer en móvil aparecía en tres líneas debido a tamaño de fuente: solucionado con flexbox y media queries.
* `transform: scale` no funcionaba en `h3:hover` aplicado a `<a>` interno: se corrigió apuntando directamente al `<a>` en CSS.
* Scroll a top en rutas React no funcionaba con Link: se implementó `useEffect(() => window.scrollTo(0,0), [])` en componentes de página.
* Hero con imagen vertical y hueco en pantalla: se decidió usar `<div>` con `background-image` y `background-size: cover` para cubrir toda la pantalla.

## 8. ESTADO ACTUAL EXACTO

* Footer y Navbar terminados y responsivos.
* Páginas legales implementadas con contenido mínimo.
* Home con hero visual pendiente de ajuste completo responsive.
* Routing entre páginas funcionando correctamente.

## 9. PRÓXIMOS PASOS

* Ajustar hero de Home para cubrir viewport completo (`height: 100vh`) y mantener estética.
* Revisar imágenes y adaptarlas a horizontal cuando sea necesario.
* Continuar diseño y contenido de página Home.
* Optimizar CSS y reducir subclases redundantes.
* Revisar compatibilidad con navegadores modernos (`display: contents` y flex).
* Implementar meta tags y favicon definitivo.

## 10. CONTEXTO ADICIONAL

* Las imágenes de hero son de Unsplash, libres bajo su licencia.
* La web es un frontend de exposición, no recoge datos personales todavía.
* Los enlaces legales cumplen con lo mínimo necesario para frontend.
* Estilo general: estética elegante, paleta de rosas y rojos para remarcar.