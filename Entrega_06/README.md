# README – Entrega 06

# Mi Hogar Se Está Derritiendo
*La historia del deshielo de los glaciares en Chile contada por su guardián.*

🔗 Sitio web: https://claritadiaz1.github.io/Repo_Proyecto_Equipo/

---

## Proceso de construcción de la página web

La webstory se construyó como un sitio estático con **HTML, CSS y JavaScript puro**, publicado en GitHub Pages desde la carpeta `docs/`. No se usó ningún framework: se priorizó tener control total sobre las animaciones de scroll, el mapa interactivo y el comparador de imágenes.

El desarrollo se organizó en capas:

1. **Estructura (`index.html`)** – Se definieron las siete escenas de la historia como `<section>` independientes (inicio, historia, comunidades, datos, tipos, glaciares, antes/después, contacto), cada una asociada a un ancla del menú de navegación.
2. **Estilo (`style.css`)** – Se trabajó con variables CSS (`:root`) para mantener una paleta de hielo/tierra consistente en todo el sitio, y con `clamp()` para que la tipografía y los espaciados fueran responsivos sin tener que duplicar reglas por breakpoint.
3. **Interactividad (`script.js`)** – Controla el audio de fondo, las animaciones de aparición al hacer scroll (`IntersectionObserver`), el conteo animado de las estadísticas, el mapa SVG interactivo de glaciares (clic en un punto → panel de información) y el carrusel del comparador antes/después.
4. **Datos y gráficos (`data/`, `charts.js`)** – Los gráficos de tipos de glaciar por región se recalcularon a partir del dataset limpio del IPG 2022 (`IPG2022_limpio.csv`, trabajado originalmente en Python/Altair en la Entrega 03) y se incrustaron como gráficos interactivos con Vega-Lite, en lugar de exportarlos como imagen estática.

El mayor desafío técnico fue balancear la narrativa (el personaje de Shoan, los globos de diálogo) con la parte de datos duros (gráficos, mapa, estadísticas), sin que la página se sintiera como dos proyectos distintos pegados uno al lado del otro.

---

## Cambios aplicados en esta entrega (según retroalimentación)

A partir de los comentarios recibidos en la Entrega 05, se hicieron los siguientes ajustes:

- Se cambió la primera aparición de Shoan (de una expresión feliz a una preocupada), para que sea coherente con el tono del relato desde el inicio.
- Se revisó el uso del epígrafe/kicker, eliminándolo de las tarjetas donde era redundante con el título.
- Se revisó la consistencia de la voz narrativa de Shoan a lo largo del sitio.
- Los gráficos de tipos de glaciar por región ahora están incrustados como gráficos interactivos (Vega-Lite), no como imágenes.
- Se quitaron los títulos tipo "Gráfico 1 - Composición proporcional" de los gráficos.
- La sección "El agua que se pierde también tiene voces" se movió desde el final del recorrido hacia el inicio (justo después de la presentación del problema), se reforzó su tono de crónica y se agregó una visualización para el dato de los embalses de Coquimbo.
- La sección de la Ley de Glaciares se conectó explícitamente con las historias de las comunidades mostradas antes, en vez de aparecer como un dato aislado al final.
- Se quitaron los textos de fuente sueltos dentro de las tarjetas de estadísticas y se reemplazaron por una línea de fuentes con enlaces reales a CR2 y DGA.
- Se agregó un texto de transición entre el mapa interactivo y las tarjetas de glaciares.
- Se agregó una declaración explícita del hallazgo principal del reportaje al cierre de la sección de historia.

---

## Tecnologías

- HTML
- CSS
- JavaScript
- Vega-Lite / vega-embed (gráficos interactivos)
- GitHub Pages

---

## Tema

- Glaciares en Chile
- Cambio climático
- Deshielo y transformación del paisaje
