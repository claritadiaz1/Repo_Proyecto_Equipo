# Documentación del proceso de limpieza de datos
## Inventario Público de Glaciares 2022 (IPG 2022)

---

## 1. Proceso de limpieza — paso a paso

### Fuente utilizada

Se trabajó con el archivo oficial `IPG2022_v2_dbf.xlsx`, descargado directamente desde el portal de la Dirección General de Aguas (DGA) del Ministerio de Obras Públicas de Chile:
[https://dga.mop.gob.cl/inventario-publico-de-glaciares-actualizacion-2022/](https://dga.mop.gob.cl/inventario-publico-de-glaciares-actualizacion-2022/)

### Herramientas

- **Python 3** con la librería **pandas** para la limpieza y transformación de datos.
- **Google Colaboratory** para ejecutar el script en la nube.

---

### Paso 1 — Exploración inicial

Al cargar el archivo se encontró que tiene **26.180 filas** y **45 columnas**. Se revisaron los nombres de columnas, los tipos de datos y la cantidad de valores nulos por columna.

**Decisión:** Las columnas `CH_CASQ` (25.457 nulos) y `CUBIERTO` (26.180 nulos, es decir vacía por completo) y `OBSERVACIO` (26.180 nulos) fueron descartadas directamente por no contener información útil.

---

### Paso 2 — Selección de columnas

De las 45 columnas originales se seleccionaron **19** con criterio periodístico: se conservaron las variables que permiten identificar, ubicar y caracterizar cada glaciar, y que son útiles para responder las preguntas de investigación del proyecto.

Se eliminaron columnas como `OBJECTID`, `Id`, `DATUM`, `HUSO`, `NORTE`, `ESTE` (coordenadas en sistema UTM, redundantes con latitud/longitud), `FUENTE_DIG`, `FUEN_FECHA`, `WGI_1`, `WGI_2`, `WGI_3`, `FRENTE_TER`, `RESOL_IMG`, `ERROR`, `CUT_REG`, `CUT_PROV`, `CUT_COM` y `F_ESP_MED`.

**Decisión:** Se priorizaron las columnas de área, volumen, región, cuenca y macrozona por ser las más relevantes para comparar territorialmente el retroceso glaciar y construir visualizaciones.

---

### Paso 3 — Renombrado de columnas

Las columnas originales usan nombres técnicos en mayúsculas y abreviados (por ejemplo, `MZON_GLAC`, `EQ_AGUAKM3`, `INVE_FECHA`). Se renombraron a español claro en minúsculas para facilitar la lectura de la base y su uso posterior en visualizaciones.

**Decisión:** Se optó por nombres descriptivos pero concisos, priorizando que sean autoexplicativos sin necesidad de consultar documentación adicional.

---

### Paso 4 — Limpieza de coordenadas

Las columnas `LATITUD` y `LONGITUD` estaban almacenadas como **texto** en lugar de números, porque usaban **coma** como separador decimal (formato europeo: `-18,1744`). Esto impedía usarlas directamente en mapas o cálculos geográficos.

Se reemplazó la coma por punto y se convirtieron a tipo `float`.

**Decisión:** Sin esta corrección, las coordenadas serían inutilizables para cualquier visualización geográfica, que es uno de los elementos centrales del proyecto.

---

### Paso 5 — Normalización de nombres

Los glaciares sin nombre oficial estaban etiquetados con el valor `S/N`. Al ser un valor de texto, podría confundirse con una abreviatura o generar errores en filtros. Se reemplazó por `sin_nombre`.

**Decisión:** Esto mejora la legibilidad de la base y evita ambigüedades al filtrar o agrupar por nombre.

---

### Paso 6 — Verificación de nulos

Se verificó que la base limpia resultante tiene **cero valores nulos** en todas sus columnas. No fue necesario imputar ni eliminar filas.

---

### Paso 7 — Exportación

La base limpia se exportó a formato CSV con codificación `utf-8-sig` para asegurar la correcta visualización de tildes y la letra ñ al abrir el archivo en Excel.

---

## 2. Fuentes de datos utilizadas

| Fuente | Institución | Por qué se eligió |
|---|---|---|
| Inventario Público de Glaciares 2022 (IPG2022_v2_dbf.xlsx) | DGA — MOP | Es la fuente oficial del Estado de Chile. Contiene datos de todos los glaciares del país con variables de área, volumen y ubicación, que son el núcleo del proyecto. Es pública, descargable y respaldada metodológicamente por normas UNESCO. |

---

## 3. Preguntas que se pueden responder con la base limpia

A partir de la base `IPG2022_limpio.csv` es posible responder, entre otras, las siguientes preguntas:

**Pregunta 1: ¿Qué región de Chile concentra más superficie glaciar?**
Agrupando por `region` y sumando `area_km2`, se puede identificar que Magallanes y Antártica Chilena concentra 10.427 km², seguida por Aysén con 8.724 km². La zona central (Región Metropolitana) tiene 450 km², lo que es pequeño en términos absolutos pero crítico por la densidad poblacional que depende de esa agua.

**Pregunta 2: ¿Qué tipo de glaciar predomina en Chile y cuánta superficie ocupa cada tipo?**
Agrupando por `tipo_glaciar` y calculando el conteo y la suma de `area_km2`, se puede mostrar que los glaciaretes (glaciares pequeños) son los más numerosos con 18.211 unidades, pero los glaciares de valle y efluentes concentran la mayor parte del volumen de hielo.

**Pregunta 3: ¿Cuánta agua equivalente almacenan los glaciares de la zona central?**
Filtrando por `macrozona = 'MACROZONA CENTRO'` y sumando `volumen_agua_km3`, se puede calcular el agua almacenada en los glaciares que abastecen la zona más poblada del país. Esto permite dimensionar el impacto real de su pérdida en términos de disponibilidad hídrica.

**Pregunta 4: ¿A qué altitud se ubican los glaciares de la zona central versus la zona austral?**
Comparando `altitud_media_msnm` por `macrozona`, se puede mostrar que los glaciares del centro están a mayor altitud y son más vulnerables al calentamiento, ya que están más expuestos a cambios de temperatura.

**Pregunta 5: ¿Qué cuencas tienen mayor volumen de hielo almacenado?**
Agrupando por `cuenca` y sumando `volumen_hielo_km3`, se puede identificar qué cuencas hidrográficas dependen más del agua glaciar, conectando el dato ambiental con el impacto directo en el suministro hídrico.

---

*Documentación elaborada en el marco del ramo de Narración Gráfica.*

