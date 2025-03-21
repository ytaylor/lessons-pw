# 🎨 Selectores y Etiquetas CSS

## 🚀 ¿Qué es CSS y para qué sirve?
CSS (Cascading Style Sheets) es el "maquillaje" de las páginas web. Permite cambiar colores, tamaños, márgenes, y hacer que tu página se vea bonita en lugar de un simple texto plano. 💅

## 🔎 ¿Qué son los selectores en CSS?
Los selectores en CSS sirven para "apuntar" a elementos HTML y darles estilos. Piensa en ellos como etiquetas que dicen: "¡Hey, tú, `<p>`! ¡Vístete de azul!" 🎯

---

## 📌 Tipos de selectores en CSS

### 1️⃣ **Selectores básicos** 🎯
- `*` → 🌍 Selector universal: Aplica estilos a todos los elementos de la página.
- `elemento` → 🏷️ Selector de etiqueta: Cambia todos los elementos de ese tipo (ej. `p`, `h1`, `div`).
- `#id` → 🔖 Selector de ID: Aplica estilos a un elemento con un ID específico.
- `.clase` → 🏷️ Selector de clase: Aplica estilos a todos los elementos con la clase especificada.

### 2️⃣ **Selectores combinadores** 🔗
- `elemento1 elemento2` → 🏠 Selector descendente: Selecciona `elemento2` dentro de `elemento1`.
- `elemento1 > elemento2` → 👶 Selector de hijo directo: Selecciona `elemento2` que es hijo directo de `elemento1`.
- `elemento1 + elemento2` → 👫 Selector de hermano adyacente: Selecciona `elemento2` justo después de `elemento1`.
- `elemento1 ~ elemento2` → 👨‍👩‍👧‍👦 Selector de hermanos generales: Selecciona todos los `elemento2` que son hermanos de `elemento1`.

### 3️⃣ **Selectores de atributos** 🔍
- `[atributo]` → 🎯 Selecciona elementos con un atributo específico.
- `[atributo="valor"]` → 📌 Selecciona elementos con un atributo exacto.
- `[atributo~="valor"]` → 🔎 Selecciona elementos cuyo atributo contenga la palabra especificada.
- `[atributo^="valor"]` → 🚀 Selecciona elementos cuyo atributo comience con un valor.
- `[atributo$="valor"]` → 🏁 Selecciona elementos cuyo atributo termine con un valor.
- `[atributo*="valor"]` → 🔎 Selecciona elementos cuyo atributo contenga el valor en cualquier posición.

### 4️⃣ **Selectores de pseudo-clases** 🎭
- `:hover` → 🖱️ Cambia el estilo cuando pasas el cursor.
- `:focus` → 🎯 Se activa cuando haces clic en un input.
- `:first-child` → 👶 Selecciona el primer hijo de un elemento padre.
- `:last-child` → 👴 Selecciona el último hijo.
- `:nth-child(n)` → 📊 Selecciona el enésimo hijo de un padre.
- `:not(selector)` → 🚫 Selecciona todos menos el especificado.

### 5️⃣ **Selectores de pseudo-elementos** 🎭
- `::before` → ✨ Inserta contenido antes del contenido del elemento.
- `::after` → 🎆 Inserta contenido después.
- `::first-letter` → 🔤 Aplica estilos a la primera letra.
- `::first-line` → 📖 Aplica estilos a la primera línea.

---

## ✍ Ejemplo de uso de selectores en CSS
```css
/* Selector de etiqueta */
p {
    color: blue; /* 📘 Pone el texto azul */
}

/* Selector de clase */
.destacado {
    font-weight: bold; /* 💪 Pone el texto en negrita */
    color: red; /* 🔴 Texto rojo */
}

/* Selector de ID */
#principal {
    background-color: lightgray; /* 🌫️ Fondo gris */
}

/* Selector de pseudo-clase */
button:hover {
    background-color: green; /* ✅ Se pone verde al pasar el mouse */