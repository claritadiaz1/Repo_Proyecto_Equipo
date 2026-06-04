# Entrega 04 — Persona, Prototipo y Sistema de Diseño

## Shoan: El último guardián
### Webstory sobre el deshielo de los glaciares en Chile

---

## Manual de Identidad Visual

### Proceso de creación y moodboard

La identidad visual de *Shoan* nace del arco emocional de la historia misma:
partimos desde la frialdad serena de un glaciar intacto y avanzamos hacia
la urgencia de la crisis hídrica, para terminar en un destello de esperanza
y acción. El moodboard recoge referencias de tres universos visuales distintos
que conviven en el proyecto:

- **Ilustración:** acuarela digital de trazo orgánico, inspirada en campañas
  de WWF y National Geographic, que humaniza al huemul como personaje narrativo.
- **Datos:** estilo de The Pudding y Reuters Graphics, con visualizaciones
  limpias, mucho espacio en blanco y tipografía precisa.
- **Fotografía documental:** imágenes reales de glaciares chilenos y comunidades
  afectadas, sin filtros artificiales, que anclan la historia en la realidad.

El nombre *Shoan* proviene de la lengua tehuelche, pueblo originario de la
Patagonia, y es el nombre ancestral del huemul. Esta decisión busca conectar
el relato ambiental con la identidad territorial y cultural de Chile.

---

### Justificación de cada sección

#### Color
La paleta no es estática: evoluciona junto con la narrativa. Los azules fríos
(`#A8D8EA`, `#2E7DAF`) dominan las secciones iniciales, evocando el hielo y
el agua. A medida que la historia avanza hacia la crisis, aparecen los tonos
tierra y gris (`#C4845A`, `#6B6B6B`) que transmiten sequía y urgencia. La
sección final incorpora verdes y amarillos (`#5B8C5A`, `#E8B84B`) que señalan
esperanza sin caer en el optimismo forzado. Esta transición cromática guía
al usuario emocionalmente sin necesidad de texto explicativo.

#### Tipografía
Se eligieron tres familias con roles claros y diferenciados:
- **Playfair Display** para títulos y frases del huemul: su carácter serif
  evoca naturaleza, profundidad y narrativa literaria.
- **Inter** para el cuerpo del texto: máxima legibilidad en pantalla,
  especialmente en móvil, que es el dispositivo principal de nuestro
  usuario objetivo.
- **Space Mono** para datos numéricos y etiquetas: su estética monoespaciada
  da credibilidad técnica a las cifras sin intimidar al lector no especializado.

#### Recursos gráficos
Los botones siguen una jerarquía de tres niveles (acción principal, secundaria
y de esperanza) con colores que refuerzan su función. Los iconos en line art
fino mantienen coherencia con la ilustración sin competir con ella. Los
separadores de sección en forma de onda simulan agua en movimiento, reforzando
el tema central y marcando claramente las transiciones narrativas.

---

## Wireframes

### Link al prototipo
[→ Ver prototipo en Miro](https://miro.com/app/board/uXjVHKZ6ya4=/)
### Justificación de la estructura y flujo

La webstory funciona con scroll vertical continuo organizado en secciones
claramente marcadas, combinando la fluidez del storytelling con la orientación
espacial que necesita el usuario. Se eligió esta estructura por tres razones:

1. **Narrativa lineal:** la historia de Shoan tiene un arco claro (pasado →
   presente → futuro) que se lee mejor de arriba hacia abajo, sin menús
   que interrumpan el flujo emocional.
2. **Compatibilidad móvil:** el scroll vertical es el gesto más natural en
   celular, dispositivo principal de Valentina, nuestro arquetipo de usuario medio.
3. **Progresión emocional controlada:** cada sección tiene un tono y un
   objetivo emocional distinto. Las transiciones visuales (cambio de color,
   separadores de onda) preparan al usuario para lo que viene sin anticiparlo.

**Estructura de secciones:**

| # | Sección | Tono | Elemento central |
|---|---------|------|-----------------|
| 0 | Hero | Sereno | Animación glaciar + presentación de Shoan |
| 1 | ¿Quién soy? | Cálido | Narrativa + mapa interactivo de glaciares |
| 2 | El pasado | Nostálgico | Slider antes/después + línea de tiempo |
| 3 | La crisis | Urgente | Gráficos de pérdida + infografía hídrica |
| 4 | El impacto | Sombrío | Mapa regional + historias de comunidades |
| 5 | ¿Qué hacemos? | Esperanzador | Acciones concretas + botones de compartir |
| 6 | Cierre | Reflexivo | Ilustración final + créditos + fuentes |

El camino de lectura es intencionalmente irreversible en su arco emocional:
no se puede llegar a la esperanza sin pasar por la crisis. Esto es una
decisión narrativa deliberada, no una limitación técnica.

---

## Actualización de hipótesis y propuesta grupal

**Hipótesis original:**
> El retroceso acelerado de los glaciares en Chile está reduciendo
> significativamente la disponibilidad de agua, especialmente en la zona
> central, agravando la crisis hídrica.

**Actualización tras el proceso de diseño:**
La hipótesis se mantiene, pero el enfoque narrativo evolucionó. Inicialmente
concebimos la webstory como una visualización de datos con contexto narrativo.
Al desarrollar el personaje de Shoan y los perfiles de usuario, entendimos
que la historia necesitaba un ancla emocional humana (o animal) para que
los datos cobraran sentido para un público no especializado. La pregunta
que guía ahora el diseño no es solo *¿qué está pasando con los glaciares?*
sino *¿qué significa esto para quienes dependen de esa agua?*

**Propuesta de trabajo grupal actualizada:**
El equipo dividió los roles de la siguiente manera:
- Investigación y datos: [Valentina Sabag]
- Narrativa y guión de Shoan: [Clarita Díaz]
- Diseño visual e identidad: [Josefa Gallegos]
- Desarrollo y visualizaciones interactivas: [Valentina, Josefa y Clarita]

---

## Respaldo de visualización individual


Ver carpeta: `Gallegos_Josefa_vis_01/`
Contiene:
- `visualizacion/vis_01.html` — visualización final
- `visualizacion/codigo_visualizacion.ipynb` — notebook con el script
- `visualizacion/base_datos_01.csv` — base de datos utilizada
- `README.md` — análisis individual de la visualización

`Diaz_Clarita_vis_02/`
Contiene:
- `visualizacion/vis_02.html` — visualización final
- `visualizacion/codigo_visualizacion.ipynb` — notebook con el script
- `visualizacion/base_datos_02.csv` — base de datos utilizada
- `README.md` — análisis individual de la visualización

`Sabag_Valentina_vis_03/`
Contiene:
- `visualizacion/vis_03.html` — visualización final
- `visualizacion/codigo_visualizacion.ipynb` — notebook con el script
- `visualizacion/base_datos_03.csv` — base de datos utilizada
- `README.md` — análisis individual de la visualización



---

## Fuentes y referencias

- Dirección General de Aguas (DGA) — [dga.cl](https://dga.cl)
- Centro de Ciencia del Clima y la Resiliencia CR2 — [cr2.cl](https://www.cr2.cl)
- NASA Earthdata — [earthdata.nasa.gov](https://earthdata.nasa.gov)
- Greenpeace Chile — [greenpeace.org/chile](https://www.greenpeace.org/chile)
- AngloAmerican — Informe de glaciares
- Universidad de Chile — Estudios de cambio climático
