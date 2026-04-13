# Entrega 02 - Preparación y limpieza de datos

## Tema del proyecto

El impacto del deshielo de los glaciares en la crisis hídrica en Chile

---

## Hipótesis actual

El retroceso de los glaciares en Chile está directamente relacionado con la intensificación de la crisis hídrica, afectando la disponibilidad de agua en distintas regiones del país. A pesar de la gran cantidad de reservas de agua dulce en forma de glaciares, su acelerado deshielo está reduciendo su capacidad de abastecimiento, impactando de manera desigual a los territorios que dependen de ellos.

---

## Integrante: Valentina Sabag Abusleme

---

## Base de datos limpia

- Nombre del archivo: `glaciares_estrategicos.csv`
- Descripción breve: es una base de datos procesada a partir del Inventario Público de Glaciares (IPG 2022), que contiene información relevante sobre ubicación, superficie, volumen de agua equivalente y características de glaciares en zonas con mayor estrés hídrico en Chile.

---

### Fuente de los datos

- Inventario Público de Glaciares (IPG 2022) - Dirección General de Aguas (DGA)

### Metodología de construcción

La base fue construida a partir de la limpieza y transformación del archivo original IPG2022_v2.dbf.xlsx utilizando Python y la librería Pandas. En primer lugar, se eliminaron columnas "feas", que estaban vacías o con errores. Luego, se eliminaron variables irrelevantes, se filtraron los datos por macrozonas de interés (Norte, Centro y Sur), se aplicó un umbral mínimo de superficie glaciar y se normalizaron variables como nombres y coordenadas (si era texto, asegurar que sea str y si era número, asegurar que sea un float).

### Alcance de los datos

- Cobertura geográfica: Macrozona Norte, Centro y Sur de Chile, excluyendo Austral
- Unidad de análisis: Glaciares individuales
- Periodo: Datos correspondientes al inventario 2022

### Características de los datos

- Tipo: Datos cuantitativos y geoespaciales
- Formato: CSV
- Variables: Área, volumen de agua equivalente, coordenadas, clasificación glaciar, altura media, entre otras

### Observaciones

La base excluye glaciares de muy pequeña superficie y de la zona austral para enfocar el análisis en áreas con mayor impacto en la crisis hídrica. Esto puede limitar una visión completa del sistema glaciar nacional, pero permite un análisis más pertinente al problema investigado.

---

| Variable   | Descripción                                            | Tipo de dato | Valores posibles / Ejemplos                    | Observaciones                                  |
| ---------- | ------------------------------------------------------ | ------------ | ---------------------------------------------- | ---------------------------------------------- |
| COD_GLA    | Código único de identificación del glaciar según DGA   | String       | CL101010001@                                   | Identificador único por glaciar                |
| NOMBRE     | Nombre común del glaciar                               | String       | VOLCAN PARINACOTA, Glaciar no identificado     | Se normalizaron valores faltantes              |
| CLASIFICA  | Categoría morfológica del glaciar                      | String       | GLACIAR DE MONTAÑA, GLACIAR ROCOSO, GLACIARETE | Variable clave para análisis de tipo           |
| AREA_KM2   | Superficie total del glaciar en km²                    | Float        | 0.05 a valores mayores                         | Filtrada para excluir glaciares muy pequeños   |
| REGION     | Región administrativa de ubicación                     | String       | VALPARAISO, METROPOLITANA, etc.                | Permite análisis territorial                   |
| NOM_CUEN   | Nombre de la cuenca hidrográfica asociada              | String       | RIO MAIPO, RIO ACONCAGUA                       | Relaciona glaciares con disponibilidad hídrica |
| MZON_GLAC  | Macrozona climática donde se ubica                     | String       | MACROZONA NORTE, CENTRO, SUR                   | Base filtrada por estas macrozonas             |
| LATITUD    | Coordenada geográfica de latitud                       | Float        | -33.396                                        | Normalizada (antes en formato string)          |
| LONGITUD   | Coordenada geográfica de longitud                      | Float        | -70.070                                        | Normalizada (antes en formato string)          |
| HMEDIA     | Altitud media del glaciar (metros sobre nivel del mar) | Float        | 3849.3                                         | Relacionada con condiciones climáticas         |
| VOL_km3    | Volumen estimado de hielo en kilómetros cúbicos        | Float        | 0.0177                                         | Indicador físico del glaciar                   |
| EQ_AGUAKM3 | Volumen equivalente en agua dulce (km³)                | Float        | 0.0162                                         | Variable clave para análisis hídrico           |
| ORIENTA    | Orientación cardinal predominante del glaciar          | String       | S, NW, NE, SE, N, E, W                         | Puede influir en exposición solar              |

---

## Documentación del proceso

### Proceso de limpieza de datos

1. Carga del archivo original IPG2022_v2.dbf.xlsx en Pandas
2. Eliminación de columnas irrelevantes o redundantes
3. Filtrado por macrozonas (Norte, Centro y Sur)
4. Aplicación de umbral mínimo de superficie (> 0.05 km²)
5. Normalización de nombres y reemplazo de valores faltantes
6. Corrección de formato de coordenadas (conversión a float)

### Decisiones tomadas

- Se excluyó la macrozona austral para enfocar el análisis en zonas con mayor estrés hídrico
- Se filtraron glaciares pequeños para evitar ruido y posibles errores de medición

### Herramientas utilizadas

- Python 3
- Pandas
- OS library
- Gemini para corrección de errores principalmente.
- ChatGPT para hacer una plantilla de README.md

---

## Fuentes de datos utilizadas

- Inventario Público de Glaciares (IPG 2022) - Dirección General de Aguas (DGA)  
  Justificación: Fuente oficial y actualizada que garantiza la confiabilidad de los datos utilizados en el análisis.

---

## Preguntas que permite responder la base

- ¿Cuál es el volumen total de agua equivalente en distintas regiones de Chile?
- ¿Qué tipos de glaciares predominan en zonas con mayor estrés hídrico?
- ¿Cómo se distribuyen los glaciares según altura en territorios críticos?
- ¿Qué regiones concentran la mayor cantidad de superficie glaciar?
- ¿Existe relación entre el tipo de glaciar y su ubicación geográfica?
- ¿Cómo varía el tamaño promedio de los glaciares entre macrozonas?
- ¿Qué macrozona presenta mayor reserva hídrica en glaciares?
- ¿Dónde se ubican los glaciares con mayor volumen de agua equivalente?
- ¿Qué proporción de glaciares supera cierto umbral de superficie?
- ¿Cómo se distribuyen espacialmente los glaciares en relación a zonas con alta demanda de agua?

---

## Posibles análisis / visualizaciones

- Mapa interactivo de glaciares por ubicación y tamaño
- Comparación regional del volumen de agua almacenada en glaciares
- Gráfico de distribución de tipos de glaciares por macrozona
- Mapa de calor (heatmap) de concentración de glaciares
- Gráfico de barras con volumen de agua equivalente por región
- Gráfico de dispersión (scatter plot) entre altura media y superficie glaciar
- Ranking de los glaciares con mayor volumen de agua
- Histograma de tamaños de glaciares
- Visualización tipo “top 10” de regiones con mayor reserva hídrica glaciar
- Mapa combinado que relacione glaciares con zonas de estrés hídrico
- Comparación entre tipos de glaciares y su volumen de agua equivalente
- Dashboard interactivo que integre múltiples variables (ubicación, tipo, tamaño, volumen)

---

## Script

- Ubicación: `/script/`
- Archivo: `t2.py`
- Descripción: Script que carga la base de datos limpia en un DataFrame de Pandas y permite visualizar, filtrar y analizar los datos.

---

## Datos originales

Ubicación: `/datos_originales/`

- IPG2022_v2.dbf.xlsx

---

