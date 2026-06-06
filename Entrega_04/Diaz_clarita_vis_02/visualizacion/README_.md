# Visualización individual — Composición porcentual de glaciares por tipo y región en Chile

**Autora:** Clarita Díaz  
**Proyecto:** Shoan — El deshielo de los glaciares en Chile  
**Entrega:** 04

---

## ¿Qué muestra esta visualización?

Un gráfico de barras apiladas al 100% que compara la composición proporcional de los tipos de glaciares en cada región de Chile, de norte a sur. Fue construido a partir de los datos del Inventario Público de Glaciares 2022 (IPG 2022) de la Dirección General de Aguas (DGA).

Cada barra representa el 100% de los glaciares de una región, dividida por color según el tipo: glaciar de montaña, glaciarete, glaciar de valle, glaciar efluente y glaciar rocoso. Esto permite ver, por ejemplo, que en el norte predominan los glaciares rocosos, mientras que en el sur dominan los glaciaretes y glaciares efluentes.

---

## ¿Por qué este tipo de gráfico?

Se eligió el gráfico de barras apiladas al 100% porque permite comparar la **composición interna** de cada región independientemente de su tamaño absoluto. Sin esta normalización, regiones como Aysén y Magallanes —que concentran miles de glaciares— opacarían completamente a regiones del norte y centro que tienen decenas. Al llevar todas las barras al mismo alto, se puede leer con claridad qué tipo de hielo predomina en cada zona del país, sin importar si la región tiene 10 o 10.000 glaciares.

Para una audiencia no especializada, los colores diferenciados y la escala porcentual permiten identificar patrones geográficos de forma intuitiva, sin necesidad de interpretar números absolutos.

---

## Decisiones de diseño

- Se usaron **barras apiladas al 100%** para permitir comparación proporcional entre regiones de tamaños muy distintos
- Las regiones fueron ordenadas **de norte a sur** para que el gráfico pueda leerse como un recorrido geográfico por el territorio
- Se eligió una **paleta de azules y verde** para diferenciar los cinco tipos de glaciar, manteniendo coherencia visual con el tema del agua y el hielo
- El **glaciar rocoso** recibió el color verde para distinguirlo visualmente del resto, ya que su naturaleza es distinta: está cubierto de detritos y su comportamiento ante el deshielo es diferente al hielo expuesto
- Se incluyeron **tooltips interactivos** en la versión HTML que muestran región, tipo, cantidad absoluta y área total al pasar el cursor
- El eje Y muestra porcentajes para facilitar la lectura proporcional

---

## Lo que revela el dato

El norte de Chile —Arica y Parinacota, Tarapacá, Antofagasta— está dominado casi completamente por glaciares rocosos, un tipo de hielo cubierto de detritos que actúa como "termo" natural. Son invisibles para el turista, pero son la principal reserva hídrica de los valles del norte desértico.

En el centro, la composición es más variada, con presencia de glaciaretes y glaciares de montaña que alimentan directamente los ríos que abastecen a la mayor parte de la población del país.

En el extremo sur, los glaciares efluentes —lenguas de hielo que se desprenden de los Campos de Hielo Patagónico— dominan la composición de Aysén y Magallanes.

Un caso notable es **Ñuble**: a pesar de ser una región cordillerana, su barra es casi inexistente. Esto se debe a que la cordillera es más baja en esa zona (promedio 2.000 msnm), el clima de transición eleva la línea de nieve, y el volcanismo activo del complejo Nevados de Chillán derrite el hielo desde abajo. Sus glaciares han perdido más del 90% de su superficie desde fines del siglo XIX.

---

## Fuente de datos

- **Base de datos:** Inventario Público de Glaciares 2022 — Dirección General de Aguas (DGA), Ministerio de Obras Públicas de Chile
- **Acceso:** https://dga.mop.gob.cl/inventario-publico-de-glaciares-actualizacion-2022/
- **Archivo utilizado:** `base_datos_01.csv`

---

## Herramientas utilizadas

- Python 3
- Altair (visualización)
- Pandas (procesamiento de datos)
- Jupyter Notebook / Google Colab

---

## Archivos

| Archivo | Descripción |
|---|---|
| `visualizacion/vis_01.html` | Visualización exportada en HTML (interactiva) |
| `visualizacion/vis_01.png` | Visualización exportada en PNG (estática) |
| `visualizacion/codigo_visualizacion.ipynb` | Notebook con el código completo |
| `visualizacion/base_datos_01.csv` | Base de datos utilizada |

---

## Relación con la hipótesis del proyecto

Esta visualización aporta una dimensión cualitativa clave a la hipótesis del proyecto: el problema del deshielo en Chile no es solo cuánto hielo se pierde, sino **qué tipo de hielo** existe en cada zona y qué rol cumple para las comunidades locales.

Las regiones del norte, que enfrentan la mayor escasez hídrica del país, dependen casi exclusivamente de glaciares rocosos —el tipo más frágil y menos comprendido— como fuente de agua. Las regiones del centro dependen de glaciaretes y glaciares de montaña que ya están retrocediendo. Entender esta distribución morfológica es indispensable para dimensionar el impacto real del deshielo sobre la disponibilidad de agua en Chile.
