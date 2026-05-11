# Visualización de glaciares en Chile

## Objetivo

Esta visualización busca analizar la distribución de la superficie glaciar en las distintas macrozonas de Chile utilizando datos del Inventario Público de Glaciares 2022.

## Datos utilizados

Se utilizó la base de datos `IPG2022_limpio.csv`, que contiene información sobre glaciares chilenos.

## Procesamiento realizado

- Carga del CSV mediante pandas.
- Agrupación de datos por macrozona.
- Suma de superficie glaciar total.
- Conteo de glaciares.
- Creación de visualización en Altair.
- Exportación en HTML y JPG.

## Preguntas que responde

- ¿Qué macrozonas concentran mayor superficie glaciar?
- ¿Existe relación entre cantidad de glaciares y superficie total?
- ¿Cómo se distribuyen territorialmente los glaciares en Chile?

## Herramientas utilizadas

- Python
- Pandas
- Altair
- Google Colab
