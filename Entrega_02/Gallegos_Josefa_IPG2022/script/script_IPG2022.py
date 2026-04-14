# Script: Carga y exploración de la base de datos IPG 2022 limpia
# Para ejecutar en Google Colaboratory

# Paso 1: Subir el archivo CSV
# En Google Colab, haz clic en el ícono de carpeta (izquierda) → subir archivo
# Sube el archivo IPG2022_limpio.csv

# Paso 2: Instalar e importar librerías
import pandas as pd

# Paso 3: Cargar el CSV en un DataFrame
df = pd.read_csv('IPG2022_limpio.csv', encoding='utf-8-sig')

# Paso 4: Ver las primeras filas
print("=== PRIMERAS 5 FILAS ===")
print(df.head())

# Paso 5: Información general de la base
print("\n=== INFORMACIÓN GENERAL ===")
print(f"Total de glaciares: {len(df)}")
print(f"Columnas: {list(df.columns)}")

# Paso 6: Verificar que no haya valores nulos
print("\n=== VALORES NULOS POR COLUMNA ===")
print(df.isnull().sum())

# Paso 7: Estadísticas básicas de área y volumen
print("\n=== ESTADÍSTICAS DE ÁREA Y VOLUMEN ===")
print(df[['area_km2', 'volumen_hielo_km3', 'volumen_agua_km3']].describe().round(4))

# Paso 8: Glaciares por macrozona
print("\n=== ÁREA TOTAL POR MACROZONA (km²) ===")
print(df.groupby('macrozona')['area_km2'].sum().sort_values(ascending=False).round(2))

# Paso 9: Top 5 regiones por superficie glaciar
print("\n=== TOP 5 REGIONES POR SUPERFICIE GLACIAR ===")
print(df.groupby('region')['area_km2'].sum().sort_values(ascending=False).head(5).round(2))

# Paso 10: Cantidad de glaciares por tipo
print("\n=== GLACIARES POR TIPO ===")
print(df['tipo_glaciar'].value_counts())

