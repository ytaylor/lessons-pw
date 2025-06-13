# 🧠 Lección: Introducción a React y creación de una página básica

## 🎯 Objetivos

Al finalizar esta lección serás capaz de:

- Crear un proyecto con Vite y React.
- Entender la estructura básica de un proyecto en React.
- Crear tu propio React Starter Kit.
- Añadir estilos con CSS y Sass.
- Usar imágenes en React.
- Migrar proyectos antiguos de HTML y Sass a React.

---

## ⚛️ ¿Qué es React?

- **Librería JS** para crear interfaces de usuario.
- Crea **SPA (Single Page Applications)**: una sola página HTML donde React gestiona el contenido dinámicamente.
- Utiliza **programación declarativa**: describes el resultado, no los pasos.
- Es **reactivo**: se actualiza automáticamente cuando los datos cambian.
- Tiene una **arquitectura clara y ordenada**.
- Está **orientado a componentes** reutilizables.
- Usa **JSX**, una extensión de JS que permite escribir HTML dentro de JS.

---

## 🛠 Crear tu primer proyecto en React con Vite

```bash
npm install -g create-vite
create-vite my-react-app --template react
cd my-react-app
npm install
npm run dev
```

Esto arranca el servidor de desarrollo con _hot reload_.

---

## 📁 Estructura de un proyecto React

```plaintext
/public
  - index.html (HTML principal, contiene <div id="root">)
/src
  - main.jsx (punto de entrada JS, renderiza App)
  - App.jsx (componente principal)
/styles
  - App.css o App.scss
/images
```

---

## ⚙️ Crear un React Starter Kit

1. Crear un proyecto con Vite.
2. Limpiar y reorganizar en:
   - `src/components/`
   - `src/styles/`
   - `src/images/`
3. Guardar como plantilla base.
4. Reutilizar copiando la carpeta sin `node_modules/`.

---

## 🎨 Añadir estilos con CSS

- Usar `className` en vez de `class`.
- Importar los estilos en el componente:
  ```js
  import '../styles/App.css';
  ```
- React **no gestiona** estilos, es tarea tuya como maquetadora.

---

## 🎨 Añadir estilos con Sass

1. Instalar Sass:
   ```bash
   npm install node-sass
   ```
2. Usar `.scss` en vez de `.css`.
3. Importar como:
   ```js
   import '../styles/App.scss';
   ```

---

## 🖼 Añadir imágenes

- **Locales**:
  ```js
  import logo from '../images/logo.jpg';
  <img src={logo} alt="Logo" />
  ```
- **Internet**:
  ```html
  <img src="https://dominio.com/logo.jpg" alt="Logo" />
  ```

---

## 🔁 Migrar un proyecto HTML a React

1. Crea un nuevo proyecto desde tu starter kit.
2. Copia el contenido de `<body>` del HTML antiguo al `return` del componente `App`.
3. Corrige errores comunes:
   - `class` → `className`
   - etiquetas mal cerradas
   - errores en consola y DevTools

---

## 🔁 Migrar un proyecto Sass a React

1. Instala Sass.
2. Copia los ficheros `.scss` a `src/styles`.
3. Importa en `App.jsx`.
4. Corrige errores de Sass si los hay.

---

## ✅ Conclusiones

- React es potente, estructurado y muy usado.
- Vite te permite arrancar proyectos rápidamente.
- Usa CSS/Sass como siempre, pero ten en cuenta las reglas de JSX.
- Aprende solucionando errores y practicando con componentes.
