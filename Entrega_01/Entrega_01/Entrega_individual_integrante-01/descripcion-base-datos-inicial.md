# Base de Datos Inicial  
Proyecto: Deshielo de los glaciares en Chile  

## Contexto general  
El deshielo de los glaciares en Chile no solo implica una transformación ambiental, sino que tiene consecuencias directas en la disponibilidad de agua para la población. Si bien existen bases de datos detalladas sobre glaciares, hay menos integración entre estos datos y variables como consumo hídrico, caudal de ríos o impacto en comunidades.  

Por esta razón, esta base de datos busca cruzar información glaciar con datos de disponibilidad y uso de agua, con el fin de construir una narrativa que conecte el fenómeno físico con sus efectos sociales.

## Ficha de la base de datos  

### Autor y publicación  
Fuentes principales:  
- Dirección General de Aguas (DGA)  
- Centro de Ciencia del Clima y la Resiliencia (CR2)  
- Ministerio de Obras Públicas (MOP)  
- Ministerio del Medio Ambiente (MMA)  

Acceso:  
https://dga.mop.gob.cl  
https://www.cr2.cl  
https://mma.gob.cl  
https://lineasdebasepublicas.mma.gob.cl  

Tipo de acceso: Datos públicos descargables (CSV, XLSX)

### Contenido  
Esta base de datos será construida a partir de la integración de distintas fuentes.

Contendrá información sobre:  
- Evolución de glaciares por región  
- Consumo de agua por región  
- Caudal de ríos  
- Variables climáticas (temperatura y precipitaciones).  

Tipo de datos:  
- Numéricos  
- Categóricos  
- Temporales  

Periodo:  
2014 – 2022  

### Pertinencia  
Esta base de datos permite relacionar variables que normalmente están separadas, explicando el impacto humano del deshielo glaciar. También permite identificar zonas críticas y responder directamente la pregunta de investigación.

### Metodología  

Tipo de base de datos:  
Base construida a partir de múltiples fuentes  

Método de recolección:  
- Descarga de datos públicos  
- Integración manual  
- Limpieza de datos  

Herramientas:  
- Excel / Google Sheets  
- Python (pandas)  

Proceso:  
1. Descargar datos de glaciares  
2. Descargar consumo de agua  
3. Incorporar datos climáticos  
4. Unificar por región y año  
5. Construir base final  



