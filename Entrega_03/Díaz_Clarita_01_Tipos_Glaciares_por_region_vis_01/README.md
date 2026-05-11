# Documentación del proceso de visualización
**Proyecto:** Deshielo de glaciares y crisis hídrica en Chile  
**Integrante:** Clarita Díaz  
**Visualización:** Composición porcentual de glaciares por tipo y región en Chile (IPG 2022)
 
---
 
## 1. Base de datos utilizada
 
### Archivo: `IPG2022_limpio.csv`
 
La base de datos utilizada es una versión limpia del **Inventario Público de Glaciares 2022 (IPG 2022)**, elaborado por la Dirección General de Aguas (DGA) del Ministerio de Obras Públicas de Chile. El archivo original (`IPG2022_v2.dbf.xlsx`) contiene 26.169 glaciares registrados con 45 variables cada uno.
 
**Por qué se seleccionó esta base:** Es la fuente oficial más completa sobre el estado de los glaciares en Chile. Contiene la variable `tipo_glaciar`, que permite clasificar cada cuerpo de hielo según la tipología UNESCO (glaciar de montaña, glaciarete, glaciar de valle, glaciar efluente y glaciar rocoso). Esta clasificación es clave para entender no solo cuántos glaciares existen en cada región, sino qué tipo de hielo predomina y qué vulnerabilidad hídrica implica esa composición. Sirve como base de información para poder analizar profundamente los glaciares por región.
 
### Procesamiento previo al CSV limpio
 
Desde el archivo original se seleccionaron las variables más relevantes para el análisis y se descartaron las columnas técnicas que no aportan a la historia visual (coordenadas detalladas, resolución de imagen, códigos de cuenca, etc.). Las variables conservadas fueron: `codigo_glaciar`, `nombre`, `tipo_glaciar`, `area_km2`, `region`, `provincia`, `comuna`, `latitud`, `longitud`, `cuenca`, `macrozona`, `altitud_media_msnm`, `altitud_max_msnm`, `altitud_min_msnm`, `volumen_hielo_km3`, `volumen_agua_km3`, `pendiente_grados`, `orientacion` y `anio_inventario`.
 
---
 
## 2. Proceso de visualización: pasos y decisiones
 
### Paso 1 — Carga y exploración inicial
 
Se cargó el archivo `IPG2022_limpio.csv` con pandas y se exploraron los valores únicos de las columnas `tipo_glaciar` y `region` para confirmar la calidad de los datos y detectar inconsistencias en los nombres.
 
### Paso 2 — Agrupación por región y tipo de glaciar
 
Se estandarizaron los nombres de región y tipo de glaciar aplicando `.str.title()` para eliminar diferencias de mayúsculas. Luego se agrupó el dataframe usando `groupby(['region', 'tipo_glaciar'])`, calculando para cada combinación:
- **Cantidad:** número de glaciares individuales
- **Área total:** suma de `area_km2`
El resultado fue una tabla de 67 filas (combinaciones de región y tipo) lista para visualizar.
 
### Paso 3 — Primera versión: barras apiladas absolutas
 
La primera versión del gráfico se usó barras apiladas con valores absolutos (cantidad real de glaciares por tipo). Sin embargo, esta visualización presentaba un problema importante: las regiones del sur (Aysén y Magallanes) concentran miles de glaciares, mientras que otras regiones como Ñuble, La Araucanía, etc... que tienen apenas decenas. Esto hacía que las barras de algunas regiones aparecieran casi invisibles, impidiendo comparar la composición de tipos entre regiones. Siento que no le daba peso a las regiones con pocos glaciares.
 
### Paso 4 — Decisión clave: normalización al 100%
 
Para solucionar este problema y enfocarse en la **proporción** de tipos por región, se optó por un **gráfico de barras apiladas al 100%** usando el parámetro `stack='normalize'` de Altair. Con esta técnica, todas las barras tienen la misma altura (representan el 100% de los glaciares de cada región) y el eje Y muestra porcentajes. Esto permite comparar directamente qué fracción del total de una región corresponde a glaciares rocosos, glaciaretes o glaciares de montaña, independientemente de si la región tiene 10 o 10.000 glaciares.
 
Esta decisión responde mejor a la pregunta de investigación, que no es cuántos glaciares hay por región, sino **qué tipo de hielo predomina** en cada zona del país y qué implica eso para la disponibilidad de agua.
 
### Paso 5 — Diseño visual
 
Se definió una paleta de colores en tonos azules y verde para diferenciar los cinco tipos de glaciar, manteniendo coherencia visual con el tema del agua y el hielo. Las regiones fueron ordenadas de norte a sur para facilitar la lectura geográfica del gráfico. Se agregaron tooltips interactivos que muestran región, tipo, cantidad absoluta y área total al pasar el cursor.
 
### Paso 6 — Exportación
 
El gráfico final fue exportado en dos formatos:
- **HTML** (`glaciares_por_tipo_region.html`): versión interactiva para webstory
- **JPG** (`glaciares_por_tipo_region.jpg`): versión estática para documentación
---
 
## 3. Preguntas que responde la visualización
 
**Pregunta 1: ¿Qué tipo de glaciar predomina en las regiones del norte de Chile?**  
En regiones como Arica y Parinacota, Tarapacá y Antofagasta, la barra está dominada por glaciares rocosos y glaciaretes. Estos tipos de glaciar son más pequeños y están cubiertos de detritos rocosos, lo que los hace más vulnerables al calentamiento pero también más difíciles de detectar. Su predominio en el norte revela la fragilidad hídrica de esa zona.
 
**Pregunta 2: ¿En qué regiones los glaciares de montaña tienen mayor presencia proporcional?**  
El gráfico permite identificar en qué regiones los glaciares de montaña —el tipo más representativo visualmente y con mayor volumen de hielo por unidad— tienen una participación significativa en la composición total. Esto es relevante porque los glaciares de montaña son los que más directamente alimentan ríos y cuencas hidrográficas.
 
**Pregunta 3: ¿Existe un patrón geográfico en la composición de tipos de glaciares?**  
Comparando las barras de norte a sur, se puede observar si hay una transición en los tipos predominantes a lo largo del territorio. La visualización permite leer ese gradiente de forma intuitiva, relacionándolo con las diferencias climáticas entre zonas áridas del norte y zonas lluviosas del sur, al igual que la altitud de la cordillera, que va disminuyendo de norte a sur.
 
**Pregunta 4: ¿Qué regiones tienen una mayor diversidad de tipos de glaciares?**  
Las regiones donde la barra está dividida en más colores y con proporciones más equilibradas tienen mayor diversidad de tipos de glaciares. Esto puede indicar mayor complejidad en su sistema hídrico y distintos niveles de vulnerabilidad ante el cambio climático.
 
---
 
## 4. Ficha técnica de la base de datos
 
### Características de los datos
 
| Campo | Detalle |
|---|---|
| Fuente | Inventario Público de Glaciares 2022 (IPG 2022), DGA-MOP |
| Archivo utilizado | `IPG2022_limpio.csv` |
| Registros | 26.169 glaciares |
| Cobertura geográfica | Todo el territorio chileno continental |
| Período | Imágenes satelitales 2017–2021, publicado en 2022 |
 
### Variables incorporadas en la visualización
 
| Variable | Descripción |
|---|---|
| `region` | Región administrativa de Chile donde se ubica el glaciar |
| `tipo_glaciar` | Clasificación UNESCO del glaciar (montaña, glaciarete, valle, efluente, rocoso) |
| `area_km2` | Superficie del glaciar en km² |
| `codigo_glaciar` | Identificador único, usado para contar glaciares por grupo |
 
### Observaciones sobre la base de datos
 
- Los nombres de región y tipo de glaciar fueron estandarizados a formato Title Case antes de agrupar, para evitar duplicados por diferencias de mayúsculas.
- No se encontraron valores nulos en las variables utilizadas para la visualización.
- El tipo "Glaciar Rocoso" (también llamado roca glaciar) es técnicamente distinto a los demás, ya que está cubierto de detritos y su comportamiento ante el deshielo es diferente. Su inclusión en la visualización es relevante porque en algunas regiones del norte representa la mayoría de los cuerpos de hielo inventariados.
- La visualización usa proporciones (no valores absolutos) para permitir comparación entre regiones con tamaños muy distintos de inventario glaciar.
