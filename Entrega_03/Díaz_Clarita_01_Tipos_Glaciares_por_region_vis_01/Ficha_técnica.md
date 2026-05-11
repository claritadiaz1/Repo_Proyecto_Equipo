# Ficha técnica de la base de datos

## Características de los datos

| Característica | Descripción |
|---|---|
| **Nombre de la base** | Inventario Público de Glaciares 2022 (IPG 2022) |
| **Fuente original** | Dirección General de Aguas (DGA), Ministerio de Obras Públicas (MOP), Chile |
| **Unidad de análisis** | Cuerpos de hielo individuales (glaciares) identificados a lo largo del territorio nacional |
| **Actualización** | Incluye datos recopilados y procesados hasta el año 2022, con registros de inventario específicos provenientes de diversas campañas de medición (por ejemplo, 2019 en zonas del norte) |

---

# Variables incorporadas

| Variable | Descripción |
|---|---|
| `codigo_glaciar` | Identificador alfanumérico único para cada cuerpo de hielo en el inventario nacional |
| `nombre` | Denominación oficial del glaciar. Si no posee nombre registrado, aparece como `"sin_nombre"` |
| `tipo_glaciar` | Clasificación morfológica del glaciar (ej. Glaciar de Montaña, Glaciar de Valle, Glaciarete, Glaciar Rocoso, etc.) |
| `area_km2` | Superficie total del glaciar medida en kilómetros cuadrados ($km^2$) |
| `region` | División político-administrativa (Región) donde se localiza el glaciar |
| `provincia` | Provincia específica de ubicación |
| `comuna` | Comuna específica de ubicación |
| `latitud / longitud` | Coordenadas geográficas del punto central o de referencia del glaciar |
| `cuenca` | Cuenca hidrográfica a la que pertenece el glaciar, fundamental para el análisis de recursos hídricos |
| `altitud_media_msnm` | Altitud promedio del glaciar medida en metros sobre el nivel del mar |
| `volumen_hielo_km3` | Estimación del volumen de hielo en kilómetros cúbicos |
| `volumen_agua_km3` | Equivalente en agua líquida del volumen de hielo (potencial hídrico) |
| `anio_inventario` | Año en que se realizó la medición o actualización específica de ese registro |

---

# Observaciones sobre la base de datos

## Estandarización de texto
Para la visualización de datos, se realizó un proceso de limpieza para estandarizar las mayúsculas y eliminar espacios extra en las columnas `tipo_glaciar` y `region`, asegurando que categorías idénticas fueran agrupadas correctamente (ej. `"ARICA Y PARINACOTA"` y `"Arica y Parinacota"`).

## Calidad de los nombres
Una proporción significativa de los registros en zonas de alta montaña figuran como `"sin_nombre"`, lo que refleja la gran cantidad de cuerpos de hielo menores que no han sido bautizados oficialmente, pero que son clave para el inventario hídrico nacional.

## Diversidad morfológica
La base permite identificar claramente la transición desde glaciares rocosos predominantes en el Norte Grande hacia glaciares de mayor tamaño y sistemas efluentes en la zona austral.

## Replicabilidad
El archivo utilizado (`IPG2022_limpio.csv`) corresponde a una versión depurada del inventario público, manteniendo la integridad de las mediciones originales de la DGA para asegurar transparencia y replicabilidad periodística.
