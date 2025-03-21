# 📝 Formularios en HTML

Los formularios en HTML permiten a los usuarios ingresar y enviar datos a un servidor. Un formulario básico se define con la etiqueta `<form>`:

```html
<form action="/signup" method="post">
  <input type="text" name="nombre" />
  <input type="submit" value="Enviar" />
</form>
```

🔹 **`action`**: URL donde se enviarán los datos.  
🔹 **`method`**: Método de envío (`GET` o `POST`).  

---

## 🔹 Campos de Entrada (Inputs)

### **Tipos Comunes de Inputs**
| Tipo de Input  | Uso |
|---------------|-----|
| `text`       | Campos de texto |
| `email`      | Validación de emails |
| `password`   | Oculta caracteres |
| `tel`        | Entrada de teléfono |
| `number`     | Solo permite números |
| `checkbox`   | Selección múltiple |
| `radio`      | Selección única |
| `file`       | Carga de archivos |
| `hidden`     | Datos ocultos para el servidor |

Ejemplo de un formulario con varios tipos de inputs:

```html
<form>
  <label for="email">Correo:</label>
  <input type="email" id="email" name="email" required />

  <label for="password">Contraseña:</label>
  <input type="password" id="password" name="password" required />

  <label for="phone">Teléfono:</label>
  <input type="tel" id="phone" name="phone" />

  <input type="submit" value="Registrar" />
</form>
```
---

## 🎯 **Atributos Importantes en los Inputs**

| Atributo  | Descripción |
|-----------|------------|
| `required` | Hace obligatorio el campo |
| `value` | Establece un valor por defecto |
| `placeholder` | Muestra un texto guía dentro del input |
| `disabled` | Desactiva un campo |
| `min` / `max` | Define valores mínimos y máximos para `number`, `date`, etc. |

Ejemplo de `required` y `placeholder`:

```html
<input type="text" name="nombre" placeholder="Escribe tu nombre" required />
```

---

## 🎛 **Checkbox y Radio Buttons**

- **Checkbox**: Permite múltiples selecciones.

```html
<label><input type="checkbox" name="opcion1" /> Opción 1</label>
<label><input type="checkbox" name="opcion2" /> Opción 2</label>
```

- **Radio Buttons**: Solo permite una opción dentro de un grupo.

```html
<label><input type="radio" name="metodo_pago" value="tarjeta" /> Tarjeta</label>
<label><input type="radio" name="metodo_pago" value="paypal" /> PayPal</label>
```

---

## 📜 **Select y Textarea**

- **Select**: Menú desplegable.

```html
<select name="pais">
  <option value="es">España</option>
  <option value="mx">México</option>
</select>
```

- **Textarea**: Área de texto con múltiples líneas.

```html
<textarea name="comentarios" rows="4" cols="40"></textarea>
```

---

## 📂 **Agrupar Formularios con Fieldset y Legend**

Para organizar mejor los campos de un formulario:

```html
<fieldset>
  <legend>Información Personal</legend>
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre" />
</fieldset>
```

---

## 🎨 **Estilos CSS para Formularios**

Los formularios pueden estilizarse con CSS para mejorar su apariencia y usabilidad.

```css
input, select, textarea {
  width: 100%;
  padding: 8px;
  margin: 5px 0;
  border: 1px solid #ccc;
}

input[type="submit"] {
  background-color: #007BFF;
  color: white;
  cursor: pointer;
}
```

📌 **Eliminar estilos predeterminados en móviles:**

```css
input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
```

---

## 🔢 **Expresiones Regulares en Formularios (Regex)**

Podemos validar inputs con el atributo `pattern`:

```html
<input type="text" name="dni" pattern="[0-9]{8}[A-Za-z]" title="Formato: 8 números seguidos de una letra" required />
```

🔹 **Ejemplo de validación en un input de correo:**

```html
<input type="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Introduce un email válido" required />
```

---
📚 **Más información:**  
- [Guía de Formularios en MDN](https://developer.mozilla.org/es/docs/Web/HTML/Element/form)  
- [Expresiones Regulares en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)  
