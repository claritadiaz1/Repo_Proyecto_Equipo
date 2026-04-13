import pandas as pd
import os

# rutas
ruta_carpeta = os.path.dirname(os.path.abspath(__file__))
archivo_excel = os.path.join(ruta_carpeta, 'IPG2022_v2.dbf.xlsx')

# cargar
df = pd.read_excel(archivo_excel)

# sacar columnas feas
columnas_feas = ['CH_CASQ', 'CUBIERTO', 'OBSERVACIO', 'OBJECTID']
df_clean = df.drop(columns=columnas_feas, errors='ignore')

# filtrar estrategicamente

# relevancia hidraulica
zonas_criticas = ['MACROZONA NORTE', 'MACROZONA CENTRO', 'MACROZONA SUR']
df_clean = df_clean[df_clean['MZON_GLAC'].isin(zonas_criticas)]

# tamaño mínimo... si son muy chicos creo que no me sirven
df_clean = df_clean[df_clean['AREA_KM2'] > 0.05]

# formato de los nombres y coordenadas
df_clean['NOMBRE'] = df_clean['NOMBRE'].replace('S/N', 'Glaciar no identificado')
if df_clean['LATITUD'].dtype == object:
    df_clean['LATITUD'] = df_clean['LATITUD'].str.replace(',', '.').astype(float)
    df_clean['LONGITUD'] = df_clean['LONGITUD'].str.replace(',', '.').astype(float)

# guardar en csv
output_path = os.path.join(ruta_carpeta, 'glaciares_estrategicos.csv')
df_clean.to_csv(output_path, index=False)

# en una primera instacia hice el script en la misma carpeta que mis datos originales, es por esto
# que no busco los archivos en una carpeta de datos, sino que los busco en la misma carpeta del script,
# esto es para que el script sea más fácil de correr, sin necesidad de crear carpetas adicionales.

# si se quiere volver a correr el archivo se debe cambiar donde buscar el archivo original, o mover 
# el archivo original a la misma carpeta del script.
