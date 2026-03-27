# Base de Datos: Inventario Público de Glaciares de Chile (IPG)

## Contexto general

Chile concentra aproximadamente el 80% de los glaciares de Sudamérica, convirtiéndolo en uno de los principales reservorios de agua dulce del continente. A pesar de esta riqueza hídrica, el país enfrenta una creciente crisis de disponibilidad de agua, agravada por el retroceso sostenido de sus glaciares, producto del cambio climático.

Para documentar este fenómeno, este proyecto utiliza como fuente principal el **Inventario Público de Glaciares (IPG)**, la base de datos oficial del Estado de Chile sobre el estado, ubicación, superficie y volumen de los glaciares a nivel nacional.

---

## Ficha de la base de datos

### Autor y publicación

- **Autor / Propietario:** Unidad de Glaciología y Nieves (UGN), Dirección General de Aguas (DGA), Ministerio de Obras Públicas (MOP) de Chile.
- **Publicación:** El primer inventario fue publicado en 2014 (IPG2014_v1). La versión más reciente corresponde al **Inventario Público de Glaciares 2022 (IPG2022_v1)**, publicado mediante la Resolución D.G.A. EXENTA N° 1135, del 16 de mayo de 2022.
- **Acceso y descarga:**
  - Página oficial DGA: [https://dga.mop.gob.cl/inventario-publico-glaciares/](https://dga.mop.gob.cl/inventario-publico-glaciares/)
  - Actualización 2022: [https://dga.mop.gob.cl/inventario-publico-de-glaciares-actualizacion-2022/](https://dga.mop.gob.cl/inventario-publico-de-glaciares-actualizacion-2022/)
  - IDE Chile (visualización geoespacial): [https://www.ide.cl](https://www.ide.cl)
  - Portal datos abiertos MMA: [https://lineasdebasepublicas.mma.gob.cl/datos_abiertos/dataset/glaciares](https://lineasdebasepublicas.mma.gob.cl/datos_abiertos/dataset/glaciares)

---

### Contenido

El IPG es un resgistro exhaustivo de todos los cuerpos de hielo del territorio nacional. El archivo principal es una **hoja de cálculo XLSX** con una fila por glaciar y 41 columnas de información, además de un archivo shapefile georreferenciado.

**Datos clave del IPG 2022:**
- 26.169 glaciares registrados
- Área total: 21.009,8 km² (2,8% del territorio nacional, excluida la Antártica chilena)
- Volumen de hielo estimado: 2.710,7 km³
- Equivalente en agua: 2.301,5 km³

**Comparación con IPG 2014:**
- 2014: 24.114 glaciares — área: 22.796,4 km² — volumen: 3.278,2 km³
- 2022: 26.169 glaciares — área: 21.009,8 km² — volumen: 2.710,7 km³
- **Pérdida de superficie: ~8% entre 2014 y 2022**

**Variables principales disponibles:**

| Variable | Tipo de dato | Descripción |
|---|---|---|
| `id_glaciar` | texto | Código único del glaciar |
| `nombre` | texto | Nombre del glaciar (si tiene) |
| `latitud` | numérico (decimal) | Coordenada geográfica |
| `longitud` | numérico (decimal) | Coordenada geográfica |
| `region` | texto | Región administrativa de Chile |
| `provincia` | texto | Provincia |
| `comuna` | texto | Comuna |
| `cuenca` | texto | Cuenca hidrográfica a la que pertenece |
| `subcuenca` | texto | Subcuenca hidrográfica |
| `macrozona` | texto | Macrozona glaciológica |
| `tipo_glaciar` | texto (categoría) | Clasificación UNESCO (glaciar de montaña, glaciarete, glaciar de valle, efluente, rocoso) |
| `area_km2` | numérico | Superficie del glaciar en km² |
| `volumen_hielo_km3` | numérico | Volumen estimado de hielo en km³ |
| `volumen_agua_km3` | numérico | Equivalente en agua en km³ |
| `formula_volumen` | texto | Fórmula utilizada para estimar volumen |
| `anio_inventario` | entero | Año del inventario (2014 o 2022) |

**Período de levantamiento:** El IPG 2022 utilizó imágenes satelitales captadas entre 2017 y 2021 para su análisis. El IPG 2014 fue elaborado entre 2008 y 2014.

---

### Pertinencia

Esta base de datos es el insumo central del proyecto porque:

1. **Es la fuente oficial y más completa sobre el estado de los glaciares en Chile.** Permite conocer exactamente cuántos glaciares existen, dónde están y cuánto hielo almacenan.
2. **Permite comparación temporal.** Al tener dos versiones (2014 y 2022), es posible cuantificar el retroceso glaciar en superficie y volumen durante ese período, que es el núcleo de la historia visual del proyecto.
3. **Permite análisis territorial.** Las variables de región, cuenca y macrozona glaciológica permiten identificar qué zonas del país han perdido más masa glaciar, relacionando ese dato con la crisis hídrica regional.
4. **Es pública y verificable.** Al tratarse de datos del Estado de Chile, descargables libremente, la investigación es reproducible y transparente.
5. **Responde directamente la pregunta de investigación:** ¿Cómo ha evolucionado el deshielo en Chile y qué impacto tiene en la disponibilidad de agua? La comparación de superficie y volumen entre 2014 y 2022 permite cuantificar esa evolución.

---

### Metodología

#### Cómo fueron levantados los datos (fuente original)

La DGA elabora el inventario a través de su Unidad de Glaciología y Nieves (UGN), siguiendo las normas de clasificación de la UNESCO. La metodología del IPG 2022 incluyó:

- **Teledetección satelital:** Uso de imágenes satelitales de alta resolución (entre 0,5 y 3 metros) para identificar y delimitar cuerpos de hielo.
- **Fotointerpretación:** Análisis visual y digital de las imágenes para clasificar cada glaciar según tipo (montaña, valle, glaciarete, efluente, rocoso).
- **Estimación de volumen:** Calculado mediante fórmulas estándar a partir de la superficie medida.
- **Criterio de inclusión:** Se incluyen glaciares nuevos con superficie mayor a 1 hectárea; los ya inventariados permanecen si superan 0,1 hectárea.

#### Cómo se usarán los datos en este proyecto

Los datos se obtendrán mediante **descarga directa** desde el portal oficial de la DGA y del portal de datos abiertos del Ministerio de Medio Ambiente. El archivo XLSX oficial contiene las 41 variables por glaciar.

A partir de esa descarga, se construirá una **base de datos derivada y simplificada** (en formato CSV) con las variables más relevantes para la historia visual, filtrando y organizando la información por región y macrozona. Esta base derivada es el archivo adjunto a esta entrega.

**Método de recolección:** Descarga directa de archivo público (no se requiere web scraping).

**Herramientas de procesamiento:** Python (pandas), Excel/Google Sheets para limpieza y filtrado.

---

## Archivo adjunto

Se incluye el archivo `glaciares_superficie_volumen_template.csv` con las columnas y variables definidas para el análisis, listo para ser poblado con los datos del IPG 2022.

---

## Fuentes adicionales de referencia

- Fundación Glaciares Chilenos — análisis del IPG 2022: [https://www.glaciareschilenos.org/reportajes/glaciares-chilenos-en-evolucion-analisis-del-inventario-publico-de-glaciares-2022/](https://www.glaciareschilenos.org/reportajes/glaciares-chilenos-en-evolucion-analisis-del-inventario-publico-de-glaciares-2022/)
- Wikipedia — descripción técnica del IPG 2022: [https://es.wikipedia.org/wiki/Inventario_p%C3%BAblico_de_glaciares_de_Chile_2022](https://es.wikipedia.org/wiki/Inventario_p%C3%BAblico_de_glaciares_de_Chile_2022)
- Portal Agro Chile — nota de prensa oficial DGA: [https://www.portalagrochile.cl/2022/06/16/direccion-general-de-aguas-del-mop-registro-26-169-glaciares-en-su-inventario-publico-2022/](https://www.portalagrochile.cl/2022/06/16/direccion-general-de-aguas-del-mop-registro-26-169-glaciares-en-su-inventario-publico-2022/)

