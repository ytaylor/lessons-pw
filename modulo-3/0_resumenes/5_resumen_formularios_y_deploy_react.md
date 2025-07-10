

Esta esta lección cubre todo lo necesario para:
- Trabajar con **formularios en React** de forma controlada.
- Gestionar inputs de varios tipos (`text`, `checkbox`, `radio`, `select`).
- Publicar tu proyecto en **GitHub Pages** usando Vite.

---

## 🧾 Formularios en React

### Label e inputs
- Usar `htmlFor` en lugar de `for` para asociar una label a un input.
- Escuchar eventos con `onChange`, que es el único evento consistente para inputs, select, checkbox y radio.

### Inputs controlados
Para que React mantenga el valor de un input sincronizado con el estado, se hace:
```jsx
const [name, setName] = useState('');
<input value={name} onChange={(ev) => setName(ev.target.value)} />
```

### Inputs `select`
- React muestra por defecto la primera `<option>`.
- Se debe inicializar el estado con el valor de esa primera opción.

### Inputs `checkbox`
- No se controla `value`, sino `checked`.
```jsx
const [giftWrap, setGiftWrap] = useState(false);
<input type="checkbox" checked={giftWrap} onChange={(ev) => setGiftWrap(ev.target.checked)} />
```

### Inputs `radio`
- Igual que `checkbox`, pero normalmente se compara el `value` del input con la constante de estado:
```jsx
<input type="radio" value="S" checked={size === "S"} />
```

### Input `file`
- React no lo gestiona directamente. Se necesita `useRef` para acceder al archivo.

---

## 📩 Control del envío del formulario

Evitar que el formulario recargue la página:
```jsx
<form onSubmit={handleSubmit}>
  <input type="submit" value="Enviar" />
</form>

const handleSubmit = (ev) => {
  ev.preventDefault();
  // lógica para enviar datos
};
```

---

## ✅ Formularios controlados

Cuando el valor del input puede cambiar desde múltiples sitios (ej: botón de reset y el input), el input se puede desincronizar.

**Solución:** usar el atributo `value={estado}` para mantenerlo actualizado.

También se debe hacer esto cuando el valor del estado se modifica con datos externos: `localStorage`, `fetch`, etc.

---

## 📦 Publicar en GitHub Pages (con Vite)

Pasos para publicar un proyecto React con Vite en GitHub Pages:

1. Instalar el módulo:
   ```bash
   npm i gh-pages -D
   ```

2. Añadir `base` en `vite.config.js`:
   ```js
   export default defineConfig({
     base: "/nombre-repo/",
     plugins: [react()],
   });
   ```

3. Modificar `package.json`:
   ```json
   "scripts": {
     "dev": "vite",
     "build": "vite build",
     "deploy": "gh-pages -d dist"
   }
   ```

4. Crear build de producción:
   ```bash
   npm run build
   ```

5. Subir a GitHub Pages:
   ```bash
   npm run deploy
   ```

6. Configurar GitHub Pages:
   - Entra en `Settings > Pages`.
   - Rama: `gh-pages`
   - Carpeta: `/root`
   - Guardar

---

## 📝 Conclusiones

- Usa `value` o `checked` en inputs para mantenerlos sincronizados con el estado.
- El evento `onChange` es el más robusto para formularios.
- `onSubmit` y `ev.preventDefault()` se usan para evitar el comportamiento por defecto.
- Para publicar en GitHub Pages necesitas `gh-pages`, una configuración en `vite.config.js`, y scripts en `package.json`.

---

**Fuente:** Lecciones prácticas sobre formularios controlados y despliegue de proyectos React.
