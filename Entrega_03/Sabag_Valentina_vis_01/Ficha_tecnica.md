# Ficha Técnica: Inventario Público de Glaciares (IPG) 2022

## 1. Identificación del Dataset

- **Nombre del archivo:** `IPG2022_limpio.csv`
- **Fuente:** Dirección General de Aguas (DGA), Unidad de Glaciología y Nieves.
- **Fecha de actualización:** Mayo 2022.
- **Cobertura geográfica:** Territorio nacional de Chile.
- **Unidades de observación:** 26.180 glaciares individuales.

---

## 2. Diccionario de Variables Detallado

A continuación se describen las variables extraídas y procesadas para la visualización:

| Variable               | Descripción Técnica                                                            | Unidad / Formato           |
| ---------------------- | ------------------------------------------------------------------------------ | -------------------------- |
| **`codigo_glaciar`**   | Identificador alfanumérico único según el estándar de la DGA.                  | Texto (ID)                 |
| **`nombre`**           | Nombre oficial del glaciar (si está registrado, de lo contrario "sin_nombre"). | Texto                      |
| **`clasificacion`**    | Tipo morfológico del glaciar (glaciar de valle, de montaña, rocoso, etc.).     | Categoría                  |
| **`cuenca`**           | Nombre de la cuenca hidrográfica donde se origina el escurrimiento.            | Texto                      |
| **`macrozona`**        | División glaciológica del país (Norte, Centro, Sur, Austral).                  | Texto                      |
| **`area_km2`**         | Superficie total del glaciar proyectada en el plano horizontal.                | Kilómetros cuadrados (km²) |
| **`volumen_agua_km3`** | Volumen estimado de agua equivalente (potencial hídrico líquido).              | Kilómetros cúbicos (km³)   |
| **`altitud_media`**    | Altitud promedio de la masa de hielo sobre el nivel del mar.                   | Metros (msnm)              |

---

## 3. Observaciones y Metodología

- **Cálculo del Volumen:** El volumen de agua equivalente se calcula aplicando una densidad estimada sobre el volumen de hielo, según las fórmulas glaciológicas de la DGA para cada tipo de glaciar.
- **Precisión:** Los datos provienen de sensores remotos (satélites) y validación en terreno. La base utilizada en este proyecto es una versión simplificada que conserva solo los campos críticos para el análisis de disponibilidad hídrica.

---
