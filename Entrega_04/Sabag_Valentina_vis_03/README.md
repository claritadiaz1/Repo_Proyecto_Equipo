# Visualización individual — Top 10 Cuencas con Reservas de Agua Glaciar

**Autora:** Valentina Sabag
**Proyecto:** Shoan — El deshielo de los glaciares en Chile
**Entrega:** 04

---

## ¿Qué muestra esta visualización?

Un gráfico de barras horizontales que identifica las 10 cuencas
hidrográficas con mayor volumen de reservas de agua glaciar en
Chile, medido en km³. Fue construido a partir de los datos del
Inventario Público de Glaciares de la Dirección General de Aguas
(DGA).

El gráfico revela que las cuencas con mayores reservas se
concentran en el extremo sur del país, lideradas por las
Costeras entre Límite Regional, seguidas por las Costeras e
Islas entre R. Ays. y Río Pascua.

---

## ¿Por qué este tipo de gráfico?

El gráfico de barras horizontales permite comparar volúmenes
entre múltiples cuencas de forma clara, especialmente cuando
los nombres son largos. El ranking visual hace inmediatamente
evidente cuáles son las cuencas más relevantes en términos
de reservas hídricas, sin necesidad de leer cada valor exacto.

---

## Decisiones de diseño

- Se limitó a las 10 cuencas con mayor volumen para evitar
  saturación visual y mantener legibilidad
- Las barras están ordenadas de mayor a menor para facilitar
  la comparación
- Se usó un color único (azul) coherente con la temática hídrica
- El eje X muestra el volumen de agua en km³
- El eje Y lista las cuencas ordenadas por relevancia

---

## Lo que revela el dato

Las reservas de agua glaciar en Chile están fuertemente
concentradas en el sur y la Patagonia. Esto contrasta con
la realidad de las zonas norte y centro, que tienen alta
demanda hídrica pero reservas glaciares mínimas. La
visualización refuerza la paradoja central del proyecto:
Chile tiene agua glaciar abundante, pero no donde más
se necesita.

---

## Fuente de datos

- **Base de datos:** Inventario Público de Glaciares —
  Dirección General de Aguas (DGA), Ministerio de Obras
  Públicas de Chile
- **Archivo utilizado:** `base_datos_02.csv`

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
| `visualizacion/vis_03.html` | Visualización exportada en HTML |
| `visualizacion/codigo_visualizacion.ipynb` | Notebook con el código |
| `visualizacion/base_datos_01.csv` | Base de datos utilizada |

---

## Relación con la hipótesis del proyecto

Esta visualización complementa el análisis territorial del
proyecto al mostrar qué cuencas específicas concentran las
mayores reservas de agua glaciar. Al cruzarla con datos de
población y demanda hídrica, evidencia que las zonas con
mayor disponibilidad glaciar son las menos pobladas, mientras
que las más habitadas dependen de glaciares cada vez más
reducidos.
