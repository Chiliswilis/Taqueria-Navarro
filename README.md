# Taquería Navarro — Sitio Web

Sitio web de una sola página para **Taquería Navarro**, negocio de tacos al carbón ubicado en Calle Díaz Ordaz, La Concepción. Desarrollado con HTML, CSS y JavaScript puro (sin frameworks ni dependencias externas de instalación).

## Demo

Una vez publicado con GitHub Pages, el sitio estará disponible en:
https://github.com/Chiliswilis/Taqueria-Navarro.git

## Contenido del sitio

- **Inicio** — branding, eslogan y horario de atención con indicador de "Abierto / Cerrado" en tiempo real.
- **Quiénes somos** — historia, misión, visión y equipo.
- **Menú** — tacos (asada, adobada, tripa, chorizo, aldilla), vampiros y quesadillas, con precios.
- **Galería** — espacio preparado para fotografías reales del negocio.
- **Contacto** — formulario que envía el pedido directamente por WhatsApp.
- **Pie de página** — redes sociales, dirección y derechos reservados.

## Estructura de archivos

```
taqueria-navarro/
├── index.html      # Estructura y contenido de la página
├── styles.css       # Estilos: colores, tipografía y diseño responsivo
├── script.js         # Interactividad: menú móvil, estado abierto/cerrado, formulario
└── README.md         # Este archivo
```

## Tecnologías utilizadas

- **HTML5** — estructura semántica del contenido.
- **CSS3** — variables personalizadas, Flexbox y Grid para el diseño responsivo.
- **JavaScript (Vanilla)** — sin librerías externas; controla el menú móvil, el cálculo de horario en vivo y el envío del formulario vía WhatsApp.
- **Google Fonts** — tipografías Anton y Work Sans.

## Cómo verlo localmente

1. Descarga o clona este repositorio.
2. Abre el archivo `index.html` con doble clic en cualquier navegador (Chrome, Firefox, Edge).
3. No requiere instalación, servidor local ni dependencias.

## Cómo publicarlo (GitHub Pages)

1. Sube los archivos a un repositorio público en GitHub.
2. Ve a **Settings → Pages**.
3. En **Source**, selecciona la rama `main` y la carpeta `/ (root)`.
4. Guarda los cambios y espera uno o dos minutos.
5. El enlace público aparecerá en la misma sección.

## Personalización pendiente

Antes de usar este sitio en producción, reemplazar:

- [ ] Número de WhatsApp real en `script.js` (variable `WHATSAPP_NUMBER`).
- [ ] Fotografías reales en la sección de Galería y de Equipo.
- [ ] Enlaces reales a redes sociales (Facebook, Instagram, WhatsApp).
- [ ] Precios definitivos del menú.
- [ ] Confirmar el horario de cierre (se asumió 12:30 **a.m.**).

## Autor

Proyecto escolar — Taquería Navarro.

## Licencia

Uso educativo. Todos los derechos del contenido del negocio (nombre, menú, imágenes) pertenecen a Taquería Navarro.
