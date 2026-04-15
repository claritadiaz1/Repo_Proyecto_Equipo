# Documentación del proceso de limpieza de datos
**Proyecto:** Deshielo de glaciares y crisis hídrica en Chile  
**Integrante:** Clarita Díaz  
**Base de datos:** `glaciares_escasez_por_region.csv`

---

## 1. Fuentes de datos utilizadas

### Fuente 1: Inventario Público de Glaciares 2022 (IPG 2022)
- **Organismo:** Dirección General de Aguas (DGA), Ministerio de Obras Públicas (MOP)
- **Archivo original:** `IPG2022_v2.dbf.xlsx`

- **Por qué se eligió:** Es la fuente oficial y más completa sobre el estado de los glaciares en Chile. Contiene 26.169 glaciares con datos de superficie (km²) y volumen de hielo (km³) georeferenciados por región. Al ser datos del Estado de Chile, la investigación es reproducible y verificable.

### Fuente 2: Decretos de Zonas de Escasez Hídrica (histórico)
- **Organismo:** Dirección General de Aguas (DGA), MOP
- **Archivo original:** `Decretos_zonas_escasez_historico_10-04-2026.xls`
- **Acceso:** Descarga directa desde https://dga.mop.gob.cl
- **Por qué se eligió:** Registra todos los decretos de escasez hídrica emitidos por región desde 2008 hasta 2025. Un decreto de escasez es una declaración oficial del Estado de que una zona no tiene suficiente agua disponible. La cantidad de decretos por región entre 2014 y 2022 sirve como indicador directo de la presión hídrica que enfrenta cada zona, permitiendo cruzar ese dato con la pérdida glaciar del mismo período.

---

## 2. Proceso de limpieza de datos

### Herramientas utilizadas
- **Python (pandas):** Para leer, limpiar, transformar y exportar los datos.
- **Google Colab:** Como entorno de ejecución del script, sin necesidad de instalación local.
- **Excel:** Para inspección visual previa de los archivos originales.

### Pasos realizados

**Paso 1 — Lectura del IPG 2022**  
Se cargó el archivo `IPG2022_v2.dbf.xlsx` con pandas, seleccionando únicamente las columnas relevantes para el análisis: `REGION`, `AREA_KM2` y `VOL_km3`. El archivo original contiene 45 columnas y más de 26.000 filas (una por glaciar). Se descartaron todas las columnas técnicas que no aportan al análisis regional (coordenadas, pendiente, resolución de imagen, etc.).

**Paso 2 — Estandarización de nombres de región**  
Los nombres de región en el IPG estaban en mayúsculas (ej: "ARICA Y PARINACOTA"). Se aplicó `.str.title()` para convertirlos a formato estándar (ej: "Arica Y Parinacota"), facilitando la unión posterior con los datos de decretos.

**Paso 3 — Agregación por región (IPG)**  
Se agruparon los 26.169 registros de glaciares individuales por región usando `groupby`, sumando el área total en km² y el volumen total en km³. El resultado es una tabla de 16 filas, una por región con glaciares.

**Paso 4 — Lectura de los decretos de escasez**  
El archivo de decretos tenía un formato complejo: el año estaba en celdas combinadas que solo aparecían una vez por bloque de filas. Esto causaba que pandas leyera esas celdas como vacías (`NaN`) en todas las filas siguientes del mismo año. Se solucionó aplicando `.ffill()` (forward fill) sobre la columna de año, propagando el valor hacia abajo hasta encontrar un nuevo año.

**Decisión tomada:** Se filtró para mantener solo los decretos emitidos entre 2014 y 2022, período que coincide con los dos inventarios de glaciares disponibles (IPG 2014 e IPG 2022). Esto permite comparar la presión hídrica con el retroceso glaciar en el mismo intervalo de tiempo.

**Paso 5 — Limpieza de filas no válidas en decretos**  
Se eliminaron filas donde la columna de región contenía valores no informativos: encabezados repetidos ("Región"), valores vacíos y registros `NaN`. Estos correspondían a las filas de encabezado que se repetían cada vez que comenzaba un nuevo año en el archivo original.

**Paso 6 — Conteo de decretos por región**  
Se contó el número de decretos emitidos por región entre 2014 y 2022 usando `groupby` y `.count()`. Este conteo representa la frecuencia con que el Estado declaró escasez hídrica en cada zona durante ese período.

**Paso 7 — Unión de las dos bases**  
Se unieron las dos tablas derivadas (glaciares por región y decretos por región) usando `pd.merge()` con `how='left'`, conservando todas las regiones del IPG aunque no tuvieran decretos. Las regiones sin decretos registrados en el período quedaron con valor 0.

**Paso 8 — Exportación**  
El resultado final se exportó como `glaciares_escasez_por_region.csv`.

---

## 3. Preguntas que se pueden responder con la base de datos limpia

**Pregunta 1: ¿Qué región tiene mayor masa glaciar en Chile?**  
Ordenando por `volumen_km3_2022` de mayor a menor, se puede identificar que Magallanes y la Antártica Chilena concentra la mayor parte del volumen de hielo del país, seguida de Aysén. Ambas regiones australes almacenan más del 95% del hielo continental chileno.

**Pregunta 2: ¿Existe relación entre poca masa glaciar y más decretos de escasez hídrica?**  
Comparando `area_km2_2022` con `decretos_escasez_2014_2022`, se puede observar que regiones con escasa cobertura glaciar como la Metropolitana y Coquimbo presentan los mayores números de decretos de escasez. Esto sugiere que las zonas con menor reserva de agua en forma de hielo son también las más vulnerables a la escasez.

**Pregunta 3: ¿Qué regiones del centro de Chile combinan poca masa glaciar con alta presión hídrica?**  
Filtrando regiones con `area_km2_2022` menor a 200 km² y `decretos_escasez_2014_2022` mayor a 5, emergen las regiones más críticas en términos de vulnerabilidad hídrica vinculada al deshielo: Metropolitana, Valparaíso, Coquimbo y Atacama.

**Pregunta 4: ¿Cuánta agua en forma de hielo tiene disponible cada región?**  
La columna `volumen_km3_2022` permite comparar directamente la reserva de agua glaciar por región, mostrando la enorme desigualdad entre el sur (abundante) y el norte-centro (escaso) del país.

---

## 4. Observaciones y limitaciones

- El cruce entre glaciares y decretos de escasez es una aproximación: los decretos reflejan la escasez total de agua en una zona, que puede tener múltiples causas (sequía, sobreextracción, etc.), no solo el retroceso glaciar.
- El IPG 2022 no incluye comparación directa con 2014 a nivel de glaciar individual en este dataset. La base limpia solo usa datos del inventario 2022.
- Algunas regiones no tienen glaciares registrados en el IPG (como Arica y Parinacota en algunos análisis) o tienen glaciares muy pequeños, lo que puede subestimar su vulnerabilidad real.
- El período de decretos fue acotado a 2014–2022 para coincidir con el período entre los dos inventarios disponibles. El archivo original contiene datos desde 2008.

---

*Caracteres aproximados de esta sección: 5.800*
