# Ficha Técnica y Diccionario de Datos

---

## Ficha técnica

### Fuente de los datos

Inventario Público de Glaciares (IPG 2022) - Dirección General de Aguas (DGA)

---

### Metodología de construcción

La base fue construida a partir de la limpieza y transformación del archivo original IPG2022_v2.dbf.xlsx utilizando Python y Pandas.

El proceso incluyó:

- Eliminación de columnas innecesarias o con errores
- Filtrado por macrozonas (Norte, Centro y Sur)
- Aplicación de un umbral mínimo de superficie (> 0.05 km²)
- Normalización de nombres
- Conversión de coordenadas a formato numérico (float)

---

### Alcance de los datos

- Cobertura geográfica: Macrozona Norte, Centro y Sur de Chile (excluye Austral)
- Unidad de análisis: Glaciares individuales
- Periodo: Inventario 2022

---

### Características de los datos

- Datos cuantitativos y geoespaciales
- Formato CSV
- Variables físicas, geográficas y clasificatorias

---

### Observaciones

La base prioriza glaciares relevantes para el análisis hídrico, por lo que excluye glaciares pequeños y la zona austral. Esto permite un enfoque más claro en la crisis hídrica, pero limita una visión completa del sistema glaciar nacional.

---

## Diccionario de datos

| Variable   | Descripción                                          | Tipo de dato | Valores posibles / Ejemplos                    |
| ---------- | ---------------------------------------------------- | ------------ | ---------------------------------------------- |
| COD_GLA    | Código único de identificación del glaciar según DGA | String       | CL101010001@                                   |
| NOMBRE     | Nombre común del glaciar                             | String       | VOLCAN PARINACOTA, Glaciar no identificado     |
| CLASIFICA  | Categoría morfológica del glaciar                    | String       | GLACIAR DE MONTAÑA, GLACIAR ROCOSO, GLACIARETE |
| AREA_KM2   | Superficie total del glaciar en km²                  | Float        | 0.05 a valores mayores                         |
| REGION     | Región administrativa de ubicación                   | String       | VALPARAISO, METROPOLITANA, etc.                |
| NOM_CUEN   | Nombre de la cuenca hidrográfica asociada            | String       | RIO MAIPO, RIO ACONCAGUA                       |
| MZON_GLAC  | Macrozona climática donde se ubica                   | String       | MACROZONA NORTE, CENTRO, SUR                   |
| LATITUD    | Coordenada geográfica de latitud                     | Float        | -33.396                                        |
| LONGITUD   | Coordenada geográfica de longitud                    | Float        | -70.070                                        |
| HMEDIA     | Altitud media del glaciar (m.s.n.m)                  | Float        | 3849.3                                         |
| VOL_km3    | Volumen estimado de hielo en km³                     | Float        | 0.0177                                         |
| EQ_AGUAKM3 | Equivalente en agua dulce (km³)                      | Float        | 0.0162                                         |
| ORIENTA    | Orientación cardinal predominante del glaciar        | String       | S, NW, NE, SE, N, E, W                         |

---
