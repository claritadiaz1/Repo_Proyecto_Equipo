# Visualización individual — Superficie glaciar por macrozona en Chile

**Autora:** Josefa Gallegos
**Proyecto:** Shoan — El deshielo de los glaciares en Chile
**Entrega:** 04

---

## ¿Qué muestra esta visualización?

Un gráfico de barras horizontales que compara la superficie glaciar
total (en km²) según macrozona geográfica en Chile: Norte, Centro,
Sur y Austral. Fue construido a partir de los datos del Inventario
Público de Glaciares de la Dirección General de Aguas (DGA).

El gráfico evidencia de forma inmediata la concentración extrema
de masa glaciar en la Macrozona Austral, que supera ampliamente
a todas las demás zonas del país con cerca de 18.000 km².

---

## ¿Por qué este tipo de gráfico?

El gráfico de barras horizontales permite comparar magnitudes entre
categorías de forma clara y sin ambigüedad. Para una audiencia no
especializada, la diferencia visual entre la barra de la Macrozona
Austral y el resto comunica de inmediato la desigualdad en la
distribución glaciar, sin necesidad de leer los números exactos.

---

## Decisiones de diseño

- Se eligieron barras horizontales para que los nombres de las
  macrozonas sean legibles sin rotar el texto
- Se usó un color único (azul) para no distraer del dato principal
- El eje X muestra la superficie en km²
- El eje Y ordena las macrozonas de norte a sur

---

## Lo que revela el dato

La Macrozona Austral concentra casi toda la masa glaciar del país.
Sin embargo, las zonas que enfrentan mayor estrés hídrico son
precisamente las del Norte y Centro, que tienen la menor superficie
glaciar. Esto refuerza directamente la hipótesis del proyecto:
las regiones más vulnerables a la crisis hídrica son las que
menos reservas glaciares tienen.

---

## Fuente de datos

- **Base de datos:** Inventario Público de Glaciares — Dirección
  General de Aguas (DGA), Ministerio de Obras Públicas de Chile
- **Archivo utilizado:** `base_datos_01.csv`

---

## Herramientas utilizadas

- Python 3
- Altair (visualización)
- Pandas (procesamiento de datos)
- Jupyter Notebook

---

## Archivos

| Archivo | Descripción |
|---|---|
| `visualizacion/vis_01.html` | Visualización exportada en HTML |
| `visualizacion/codigo_visualizacion.ipynb` | Notebook con el código |
| `visualizacion/base_datos_01.csv` | Base de datos utilizada |

---

## Relación con la hipótesis del proyecto

Esta visualización aporta una capa territorial clave a nuestra
hipótesis: aunque Chile concentra el 80% de los glaciares de
Sudamérica, esa riqueza está distribuida de forma muy desigual.
Las zonas más pobladas y con mayor demanda hídrica son
precisamente las que menos glaciares tienen, lo que agrava
el impacto del deshielo en la disponibilidad de agua.
