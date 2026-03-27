# Base de Datos: Temperatura y Precipitaciones Históricas de Chile (CR2)

## Contexto general

El cambio climático es el principal motor del deshielo glaciar en Chile. Para entender por qué los glaciares están retrocediendo, es necesario analizar las variables climáticas que lo explican: el aumento sostenido de temperaturas y la disminución de precipitaciones en las últimas décadas. Esta base de datos permite vincular el fenómeno del deshielo con sus causas climáticas directas.

---

## Ficha de la base de datos

### Autor y publicación

- **Autor / Propietario:** Centro de Ciencia del Clima y la Resiliencia [(CR)2](https://www.cr2.cl), Universidad de Chile. Los datos originales provienen de la Dirección Meteorológica de Chile (DMC) y la Dirección General de Aguas (DGA).
- **Acceso y descarga:**
  - Datos de temperatura media: [https://www.cr2.cl/datos-de-temperatura/](https://www.cr2.cl/datos-de-temperatura/)
  - Datos de precipitación: [https://www.cr2.cl/datos-de-precipitacion/](https://www.cr2.cl/datos-de-precipitacion/)
  - Explorador climático interactivo: [https://explorador.cr2.cl](https://explorador.cr2.cl)
  - Producto grillado CR2MET (1960–2021): [https://www.cr2.cl/datos-productos-grillados/](https://www.cr2.cl/datos-productos-grillados/)

---

### Contenido

La base de datos del CR2 reúne registros históricos de estaciones meteorológicas distribuidas a lo largo de Chile continental. Cubre series de tiempo desde 1930 hasta 2020 para precipitaciones, y desde 1960 hasta 2021 para el producto grillado CR2MET de temperaturas.

**Variables principales disponibles:**

| Variable | Tipo de dato | Descripción |
|---|---|---|
| `codigo_estacion` | texto | Código identificador de la estación meteorológica |
| `nombre_estacion` | texto | Nombre de la estación |
| `region` | texto | Región administrativa de Chile |
| `latitud` | numérico (decimal) | Coordenada geográfica |
| `longitud` | numérico (decimal) | Coordenada geográfica |
| `altitud_msnm` | numérico | Altitud en metros sobre el nivel del mar |
| `anio` | entero | Año de registro |
| `mes` | entero | Mes de registro (1–12) |
| `temp_media_c` | numérico | Temperatura media mensual en °C |
| `temp_max_c` | numérico | Temperatura máxima mensual en °C |
| `temp_min_c` | numérico | Temperatura mínima mensual en °C |
| `precipitacion_mm` | numérico | Precipitación acumulada mensual en mm |
| `fuente` | texto | Institución fuente del dato (DMC o DGA) |

**Período:** 1930–2020 (precipitaciones) / 1960–2021 (temperaturas CR2MET).

---

### Pertinencia

Esta base de datos es clave para el proyecto porque:

1. **Explica las causas del deshielo.** El aumento de temperaturas y la disminución de precipitaciones son los factores climáticos que aceleran el retroceso glaciar. Sin estos datos, la historia quedaría incompleta.
2. **Permite mostrar tendencias en el tiempo.** Al tener series históricas de décadas, es posible visualizar cómo el clima ha cambiado en Chile y correlacionarlo con la pérdida de masa glaciar documentada en el Inventario de Glaciares.
3. **Permite diferencias territoriales.** Los datos están disponibles por estación y región, lo que permite comparar cómo el calentamiento afecta de forma distinta la zona norte, central y sur del país.
4. **Es pública y descargable.** El CR2 es una institución académica reconocida que publica sus datos abiertamente para investigación y docencia.

---

### Metodología

#### Cómo fueron levantados los datos (fuente original)

El CR2 recopiló registros de temperatura y precipitación desde las plataformas de la Dirección Meteorológica de Chile (DMC) y la Dirección General de Aguas (DGA). Estos datos fueron consolidados, controlados por calidad y puestos a disposición pública para fines de investigación.

Los datos de precipitación abarcan registros diarios y mensuales entre 1930 y 2020, obtenidos de estaciones de la DMC y la DGA.

El producto CR2MET incluye datos de precipitación diaria y temperaturas máximas/mínimas para Chile continental en una grilla de 0.05 grados, abarcando el período de 1960 a 2021.

#### Cómo se usarán los datos en este proyecto

Los datos se obtendrán mediante **descarga directa** desde el portal del CR2. El formato de descarga es CSV (texto separado por comas), lo que permite abrirlos directamente en Excel o procesarlos con Python.

A partir de esa descarga, se construirá una base derivada filtrada por las regiones más relevantes para el proyecto (zona central y sur, donde se concentran los glaciares más afectados), seleccionando las variables de temperatura y precipitación por año.

**Método de recolección:** Descarga directa de archivos públicos (.zip con CSV incluido).

**Herramientas de procesamiento:** Excel o Python (pandas) para filtrar por región y año.

---

## Archivo adjunto

Se incluye el archivo `clima_temperatura_precipitacion_template.csv` con las columnas y variables definidas para el análisis, listo para ser poblado con los datos del CR2.

---

## Fuentes adicionales de referencia

- Explorador Climático CR2: [https://explorador.cr2.cl](https://explorador.cr2.cl)
- Dirección Meteorológica de Chile: [https://climatologia.meteochile.gob.cl](https://climatologia.meteochile.gob.cl)
- CR2MET en Zenodo (DOI): [https://doi.org/10.5281/zenodo.7529681](https://doi.org/10.5281/zenodo.7529681)

---
