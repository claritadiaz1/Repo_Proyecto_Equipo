# Documentación: Visualización de Reservas Hídricas por Cuenca

## Proceso de Elaboración

Para transformar los datos del Inventario Público de Glaciares 2022 en información útil, se realizaron los siguientes pasos:

1. **Carga y Limpieza:** Se utilizó el archivo `IPG2022_limpio.csv`.
2. **Agregación:** Se agruparon los datos por la variable `cuenca` y se sumó el `volumen_agua_km3` para obtener el total de reservas por unidad hidrográfica.
3. **Selección:** Se filtraron las 10 cuencas con mayor volumen para garantizar una visualización clara y evitar saturación de datos.
4. **Visualización:** Se utilizó la librería **Altair** para crear un gráfico de barras horizontales interactivo.

---

## Decisiones Técnicas

- **Gráfico de Barras Horizontales:** Se eligió este formato porque los nombres de las cuencas son extensos, en un eje vertical se leen sin cortes (y era más fácil de programar).
- **Interactividad:** El uso de HTML con Altair permite tooltips para conocer el valor exacto de km³ de agua al pasar el cursor (aparece una leyenda sobre las barras).

---

## Preguntas que responde

- ¿Qué cuencas concentran la mayor cantidad de agua dulce almacenada en hielo?
- ¿Cuál es la brecha de volumen entre las cuencas de la zona austral y el resto del país?

---

## Instrucciones de Ejecución

Para visualizar o replicar el análisis, se puede utilizar el archivo `codigo_para_visualizar.ipynb` de las siguientes dos maneras:

### Opción A: Google Colab

1. Subir el archivo `codigo_para_visualizar.ipynb` a [Google Colab](https://colab.research.google.com/).
2. Cargar la base de datos `IPG2022_limpio.csv` en el panel de archivos de Colab (ícono de carpeta a la izquierda).
3. Ejecutar todas las celdas (`Entorno de ejecución > Ejecutar todas`).

### Opción B: Ejecución Local (VS Code)

1. Instalar las dependencias necesarias en la terminal:
   `pip install altair pandas vega_datasets --break-system-packages`
2. Abrir el archivo en VS Code.
3. Asegurarse de que el CSV esté en la misma carpeta que el notebook y ejecutar las celdas.

---
