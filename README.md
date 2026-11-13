# catalogoPeliculas

# CineSpot - Explorador de Películas y Series

Proyecto desarrollado para el Tema 3 (Programación del lado del cliente) de la materia de Programación Web.

## Tecnología Seleccionada
El proyecto fue construido utilizando **React** mediante la herramienta **Vite**. Se eligió esta biblioteca por su eficiencia en la renderización dinámica y su facilidad para dividir la interfaz en componentes reutilizables utilizando JSX y el manejo de estado (`useState`).

## Procedimiento de Instalación y Ejecución
Para correr este proyecto de manera local, es necesario tener Node.js instalado.

1. Clonar el repositorio.
2. Abrir la terminal en la carpeta del proyecto (`cinespot`).
3. Instalar las dependencias ejecutando:
   `npm install`
4. Levantar el servidor local ejecutando:
   `npm run dev`
5. Abrir el enlace local proporcionado por la terminal (usualmente `http://localhost:5173/`).

## Explicación de los Componentes
* **`App.jsx`:** Es el componente principal (contenedor). Se encarga de gestionar el estado global de la aplicación (el texto de búsqueda, la pestaña activa, la visualización de favoritos y la película seleccionada). Contiene la cabecera, la barra de búsqueda y la lógica para filtrar el arreglo de datos.
* **`Tarjeta.jsx`:** Componente de presentación puro. Recibe los datos individuales de una película o serie a través de *props* y se encarga de renderizar la imagen, el título, el género y los botones de interacción.
* **`datos.js`:** Archivo que actúa como una base de datos local exportando un arreglo de 20 objetos con la información del catálogo.