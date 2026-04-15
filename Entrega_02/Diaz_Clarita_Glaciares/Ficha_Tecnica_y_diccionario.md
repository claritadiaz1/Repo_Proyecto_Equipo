# Ficha técnica y diccionario de datos
**Proyecto:** Deshielo de glaciares Chile  

**Archivo:** `glaciares_escasez_por_region.csv`

---


### Fuente de los datos

| Campo | Detalle |
|---|---|
| Fuente 1 | Inventario Público de Glaciares 2022 (IPG 2022), DGA-MOP |
| Fuente 2 | Decretos de Zonas de Escasez Hídrica (histórico), DGA-MOP |
| Acceso | Descarga directa pública desde https://dga.mop.gob.cl |
| Tipo de acceso | Datos abiertos del Estado de Chile |

### Metodología de construcción de la base

Esta base de datos es una **base derivada** construida a partir de dos fuentes oficiales. No corresponde a una base original, sino a una transformación y cruce de datos existentes.

El proceso consistió en:
1. Extraer del IPG 2022 las variables de región, área y volumen glaciar por cada uno de los 26.169 glaciares registrados.
2. Agregar esos datos sumando área y volumen por región, obteniendo una fila por región.
3. Extraer del archivo de decretos de escasez los registros correspondientes al período 2014–2022, corrigiendo el problema de celdas combinadas por año.
4. Contar la cantidad de decretos emitidos por región en ese período.
5. Unir ambas tablas por el campo región.

Todo el procesamiento fue realizado con Python (pandas) en Google Colab. El script está disponible en la carpeta `/script`.

### Alcance de los datos

- **Cobertura geográfica:** Todo el territorio chileno continental (excluye Antártica chilena en algunos análisis, aunque Magallanes aparece como región).
- **Cobertura temporal:** Datos glaciares del IPG 2022 (imágenes satelitales 2017–2021). Decretos de escasez acotados al período 2014–2022.
- **Unidad de análisis:** Región administrativa de Chile (16 regiones con presencia glaciar).
- **Número de registros:** 16 filas (una por región).

### Características de los datos

- La base es de formato **tabular simple**: 16 filas y 4 columnas.
- Todos los valores numéricos son positivos. Las regiones sin decretos de escasez en el período tienen valor 0 en esa columna.
- Los nombres de región están estandarizados en formato Title Case.
- No hay valores faltantes (`NaN`) en la base limpia final.

### Otras observaciones

- El cruce entre glaciares y decretos de escasez es una **aproximación metodológica**: los decretos de escasez hídrica pueden tener causas múltiples, y no solo reflejan el impacto del deshielo glaciar. Sin embargo, permiten operacionalizar la presión hídrica por región de forma objetiva y basada en datos oficiales.
- El IPG 2022 utilizó imágenes satelitales captadas entre 2017 y 2021 para su elaboración, por lo que los datos de área y volumen corresponden a ese período, aunque el inventario fue publicado en 2022.
- Esta base no incluye datos del IPG 2014, por lo que no permite comparación directa de pérdida glaciar a nivel regional en este archivo. Esa comparación puede realizarse incorporando el IPG 2014 como fuente adicional en una versión futura.

---

## Diccionario de datos

| Variable | Descripción | Tipo de dato | Valores posibles | Observaciones |
|---|---|---|---|---|
| `region` | Nombre de la región administrativa de Chile | Texto (string) | 16 regiones del país con presencia glaciar | Estandarizado en Title Case. Fuente: IPG 2022 |
| `area_km2_2022` | Superficie total de glaciares en la región, en km² | Numérico (float) | Valores positivos. Rango aprox: 2,7 a 10.426 km² | Suma de todos los glaciares individuales de la región según IPG 2022 |
| `volumen_km3_2022` | Volumen total estimado de hielo en la región, en km³ | Numérico (float) | Valores positivos. Rango aprox: 0,04 a 1.507 km³ | Estimado mediante fórmulas estándar a partir del área. Fuente: IPG 2022 |
| `decretos_escasez_2014_2022` | Cantidad de decretos de escasez hídrica emitidos en la región entre 2014 y 2022 | Numérico entero (int) | 0 o más. Rango: 0 a 74 | Fuente: Archivo histórico de decretos DGA. Valor 0 indica que no se emitieron decretos en el período |
