# Ficha Técnica y Diccionario de Datos
## Base de datos: Inventario Público de Glaciares 2022 (IPG 2022) — Versión limpia

---

## Fuente de los datos

- **Autor:** Unidad de Glaciología y Nieves (UGN), Dirección General de Aguas (DGA), Ministerio de Obras Públicas (MOP) de Chile.
- **Publicación:** Resolución D.G.A. Exenta N° 1135, 16 de mayo de 2022.
- **Descarga original:** [https://dga.mop.gob.cl/inventario-publico-de-glaciares-actualizacion-2022/](https://dga.mop.gob.cl/inventario-publico-de-glaciares-actualizacion-2022/)
- **Archivo original:** `IPG2022_v2_dbf.xlsx`

---

## Metodología de construcción de la base limpia

El archivo original contiene 26.180 filas y 45 columnas. El proceso de limpieza consistió en:

1. **Selección de columnas relevantes:** De las 45 columnas originales se conservaron 19, eliminando campos administrativos, técnicos de digitalización y códigos internos que no aportan valor al análisis periodístico.
2. **Renombrado de columnas:** Las columnas originales están en mayúsculas y con nombres técnicos abreviados. Se renombraron en español claro y en minúsculas para facilitar su lectura y uso.
3. **Limpieza de coordenadas:** Las columnas `LATITUD` y `LONGITUD` venían almacenadas como texto con coma como separador decimal (formato europeo). Se convirtieron a tipo numérico (float) reemplazando la coma por punto.
4. **Normalización de nombres:** Los glaciares sin nombre oficial estaban etiquetados como `S/N`. Se reemplazó por `sin_nombre` para evitar confusión con valores nulos.
5. **Verificación de nulos:** La base limpia resultante tiene **cero valores nulos** en todas sus columnas.

**Herramientas utilizadas:** Python 3 con la librería pandas.

---

## Alcance de los datos

- **Cobertura geográfica:** Todo el territorio continental de Chile, desde la Región de Arica y Parinacota hasta Magallanes.
- **Período de levantamiento:** Imágenes satelitales captadas entre 2017 y 2021.
- **Año de publicación:** 2022.
- **Unidad de análisis:** Cada fila representa un glaciar individual.
- **Total de registros:** 26.180 glaciares.

---

## Características de los datos

| Indicador | Valor |
|---|---|
| Total de glaciares | 26.180 |
| Área total | 21.012 km² |
| Volumen total de hielo | 3.026 km³ |
| Equivalente en agua | 2.573 km³ |
| Región con más superficie glaciar | Magallanes y Antártica Chilena (10.427 km²) |
| Región más afectada zona central | Metropolitana de Santiago (450 km²) |

**Distribución por tipo de glaciar:**

| Tipo | Cantidad |
|---|---|
| Glaciarete | 18.211 |
| Glaciar de montaña | 3.844 |
| Glaciar rocoso | 3.598 |
| Glaciar de valle | 310 |
| Glaciar efluente | 217 |

**Superficie por macrozona:**

| Macrozona | Área (km²) |
|---|---|
| Macrozona Austral | 18.687 |
| Macrozona Sur | 1.180 |
| Macrozona Centro | 911 |
| Macrozona Norte | 234 |

---

## Otras observaciones

- La base limpia **no incluye** las columnas de códigos administrativos (CUT), parámetros de digitalización, ni fórmulas de cálculo de volumen, ya que no son necesarias para el análisis y visualización periodística.
- El campo `anio_inventario` corresponde al año en que se tomaron las imágenes satelitales usadas para mapear cada glaciar (entre 2017 y 2021), no al año de publicación del inventario (2022).
- Los valores de volumen son **estimaciones** calculadas a partir de fórmulas estándar basadas en el área superficial. No son mediciones directas.

---

## Diccionario de datos

| Variable | Descripción | Tipo | Valores posibles | Observaciones |
|---|---|---|---|---|
| `codigo_glaciar` | Código único del glaciar | texto | Ej: CL101010001@ | Asignado por la DGA |
| `nombre` | Nombre oficial del glaciar | texto | Nombre propio / sin_nombre | S/N original reemplazado por sin_nombre |
| `tipo_glaciar` | Clasificación según norma UNESCO | texto | GLACIAR DE MONTAÑA, GLACIARETE, GLACIAR DE VALLE, GLACIAR EFLUENTE, GLACIAR ROCOSO | — |
| `area_km2` | Superficie del glaciar | numérico (float) | > 0 | En kilómetros cuadrados |
| `region` | Región administrativa de Chile | texto | 16 regiones | En mayúsculas |
| `provincia` | Provincia | texto | — | En mayúsculas |
| `comuna` | Comuna | texto | — | En mayúsculas |
| `latitud` | Latitud geográfica | numérico (float) | Valores negativos (hemisferio sur) | Convertida de formato texto con coma |
| `longitud` | Longitud geográfica | numérico (float) | Valores negativos (oeste) | Convertida de formato texto con coma |
| `cuenca` | Nombre de la cuenca hidrográfica | texto | — | — |
| `macrozona` | Macrozona glaciológica | texto | MACROZONA NORTE, MACROZONA CENTRO, MACROZONA SUR, MACROZONA AUSTRAL | Clasificación propia de la DGA |
| `altitud_media_msnm` | Altitud media del glaciar | numérico (float) | En metros sobre el nivel del mar | — |
| `altitud_max_msnm` | Altitud máxima del glaciar | numérico (entero) | En metros sobre el nivel del mar | — |
| `altitud_min_msnm` | Altitud mínima del glaciar | numérico (entero) | En metros sobre el nivel del mar | — |
| `volumen_hielo_km3` | Volumen estimado de hielo | numérico (float) | > 0 | En km³, calculado por fórmula |
| `volumen_agua_km3` | Equivalente en agua del volumen de hielo | numérico (float) | > 0 | En km³ |
| `pendiente_grados` | Pendiente media del glaciar | numérico (float) | En grados | — |
| `orientacion` | Orientación cardinal predominante | texto | N, S, E, O, NE, NW, SE, SW | — |
| `anio_inventario` | Año de las imágenes satelitales usadas | numérico (entero) | 2017–2021 | No es el año de publicación |

