# 🚀 Introducción a Node.js, NPM, Vite, Starter Kit

Esta lección es para enseñarles una forma de trabajr en todas las empresas y prpyectos, es crear una estructura de carpetas y ficheros, que se quede todo el proyecto orrganizado se vuelva mas grande, haya más cambios y nos van a pedir que hagamos cambios en el proyecto, que seamos capaces de encontrar los ficheros y las carpetas que necesitamos.

Vamos a usar un starter kit basado en Vite, un starter kit es un proyecto sobre el que cojo y empiezo a trabajar, y ya tiene una estructura de carpetas y ficheros, y ya tiene una serie de configuraciones que me van a permitir trabajar de una forma más rápida y más eficiente.

1. Explicación de como hacer un template HTML 
2. Explicar que te has inventado un starter kit y su repositorio: https://github.com/Adalab/adalab-web-starter-kit, pero lo voy a descargar como zip y lo voy a descomprimir en mi carpeta de proyectos.
3. Explicación de la estructura starter kit
4. Explicar que no sirve con el live server 
5. Explicar que hay que instalar las dependencias con npm install("solo hay que hacerlo una vez"), y eso saca las dependencias del `package.json`
6. Para arrancar el proyecto `npm run dev` (esto es como abrirlo con el live server)
7. Explicar que no es necesario usar el starer kit de manera obligatoria, pero es una buena práctica para organizar los proyectos.Lo vais usar en evaluación final y en el proyecto final.
8. 



### 📦 Adalab Web Starter Kit
Una base de código lista para proyectos web, organizada con Vite y una estructura adaptable.

#### 🔹 Estructura del proyecto:
- src/ → Archivos de desarrollo (HTML, SCSS, JS).
- public/ → Recursos estáticos (imágenes, fuentes, favicon).
- docs/ → Carpeta para la versión de producción.

#### 🔹 Instalación y uso:

1. Descargar el proyecto con:

  ```bash
  git clone https://github.com/Adalab/adalab-web-starter-kit.git
  ```
2. Abrir la carpeta con Visual Studio Code.
3. Instalar dependencias:
```bash
npm install
```

4. Ejecutar el servidor de desarrollo:
```bash 
npm run dev
```

### 🔹 Partials en HTML
Los partials permiten dividir el código HTML en fragmentos reutilizables con `<load>`:

```html
<load src="./partials/header.html" />
<load src="./partials/footer.html" />
```

1. Poner un ejemplo de header como partials y reutilizarlos, explicar que el load no es una etiqueta existente en HTML, es una etiqueta que se ha inventado el starter kit para poder reutilizar código.


## Como está hecho el starter kit

### 🔹 ¿Qué es Node.js?
[Node.js](https://nodejs.org/es/) permite ejecutar **JavaScript en la terminal**, permitiendo la creación de servidores web con JS.

### 🔹 ¿Qué es NPM?
[NPM](https://www.npmjs.com/) es un **gestor de paquetes y dependencias** para instalar bibliotecas de terceros en nuestros proyectos.

### 🔹 Comandos básicos de NPM:
```sh
npm install    # Instala las dependencias del proyecto
npm start      # Inicia el proyecto (si está configurado en package.json)
```

### ⚡ Vite: Entorno de desarrollo rápido
Vite es una herramienta para desarrollar aplicaciones con JavaScript que:
- Lanza un servidor local para pruebas en el navegador.
- Permite estructurar mejor los archivos del proyecto.
- Facilita el despliegue con el comando build.
🔹 Comandos esenciales:
```bash
npm run dev    # Inicia el servidor local de desarrollo
npm run build  # Genera la versión de producción del proyecto
```
