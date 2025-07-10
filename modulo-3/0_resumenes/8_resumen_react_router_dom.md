
## 🔍 ¿Qué es el router del navegador?

El router del navegador gestiona las rutas (o direcciones URL) de una página web. Puede comportarse de dos formas:

- **Por defecto**: el navegador controla el cambio de página, recargando todo el contenido.
- **Gestionado desde JavaScript o React**: se controla el cambio de ruta desde el código, lo que permite experiencias más rápidas (tipo SPA).

---

## ⚙️ React Router DOM

React Router DOM es una librería que permite gestionar rutas en proyectos React.

### ✅ Instalación
```bash
npm install react-router
```

### ✅ Configuración básica (`index.js`)
```jsx
import { HashRouter } from 'react-router-dom';

root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
```

Para proyectos más avanzados puedes cambiar `HashRouter` por `BrowserRouter`.

> ✅ Añadir `"homepage": "./"` al `package.json` para que funcione bien en GitHub Pages.

---

## 🧩 Componentes principales

### 1. `<Routes>` y `<Route>`
Permite mostrar componentes según la ruta:

```jsx
<Routes>
  <Route path="/contact" element={<ContactPage />} />
</Routes>
```

### 2. `<Link>` y `<NavLink>`
Sustituyen las etiquetas `<a>` para evitar recargas completas:

```jsx
<Link to="/contact">Contacto</Link>
```

`<NavLink>` permite marcar el enlace como activo si coincide con la ruta actual.

### 3. Rutas no encontradas (`404`)
```jsx
<Route path="*" element={<NotFoundPage />} />
```

---

## 📦 Rutas estáticas

Son rutas con un path fijo, como `/`, `/contact`, `/products`.

Se gestionan con `<Routes>` para evitar que se rendericen varias rutas al mismo tiempo.

---

## 🔁 Rutas dinámicas

Sirven para mostrar contenido variable bajo una misma estructura de URL. Ejemplo:

- `/product/123`
- `/product/456`

Se define así:

```jsx
<Route path="/product/:productId" element={<Product />} />
```

### 📥 Cómo obtener el valor dinámico

#### Opción 1: `useParams`
```jsx
const { productId } = useParams();
```

#### Opción 2: `useLocation` y `matchPath`
```jsx
const { pathname } = useLocation();
const match = matchPath('/product/:productId', pathname);
const productId = match?.params.productId;
```


## ✅ Conclusiones

- Usa `Routes` para agrupar rutas.
- Usa `Link` y `NavLink` en vez de `<a>`.
- Usa rutas dinámicas con `:param`.
- Usa `useParams` o `matchPath` para acceder a los datos de la URL.
- Usa un loader para mejorar la UX cuando haces `fetch`.

---

✏️ Para más info consulta: [https://reactrouter.com](https://reactrouter.com)