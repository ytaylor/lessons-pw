# 📦 Flexbox

Flexbox es una técnica de CSS que nos permite organizar elementos de manera flexible en filas o columnas. Es ideal para hacer diseños adaptables en diferentes pantallas y dispositivos.

```css
.container {
  display: flex; /* Activa Flexbox */
  flex-direction: row; /* Organiza en filas */
}
```
---

### 🔹 Caja contenedora y cajas hija
- **Caja contenedora**: Es el elemento padre que activará Flexbox (`display: flex;`).
- **Cajas hija**: Son los elementos dentro del contenedor que se distribuirán según las reglas de Flexbox.

### 🔹 Ejes en Flexbox
- **Eje principal** (`flex-direction`): Puede ser **horizontal** (`row`) o **vertical** (`column`).
- **Eje secundario**: Es el eje perpendicular al principal.

💡 **Ejemplo visual**: 
Si usamos `flex-direction: row`, el eje principal será **horizontal** y el secundario **vertical**.

```css
.container {
  display: flex;
  flex-direction: column; /* Organiza en columnas */
}
```

---

## 📌 Propiedades principales de Flexbox

### 🔹 `display: flex;`
Activa el modo Flexbox en el contenedor.

### 🔹 `flex-direction`
Define si los elementos se colocan en fila o columna.
```css
.container {
  flex-direction: row; /* Horizontal */
  flex-direction: column; /* Vertical */
}
```

### 🔹 `flex-wrap`
Controla si los elementos deben **ajustarse en una sola línea** o si pueden **saltarse a una nueva línea** cuando no caben.
```css
.container {
  flex-wrap: wrap; /* Permite saltos de línea */
}
```

### 🔹 `justify-content`
Alinea los elementos en el **eje principal**.
```css
.container {
  justify-content: flex-start; /* Desde el inicio */
  justify-content: center; /* Centrado */
  justify-content: space-between; /* Espacio entre elementos */
}
```

### 🔹 `align-items`
Alinea los elementos en el **eje secundario**.
```css
.container {
  align-items: center; /* Alineación vertical */
}
```

### 🔹 `gap`
Añade espacio entre los elementos.
```css
.container {
  gap: 20px; /* Espacio entre elementos */
}
```


# Bonus
---

## 📌 Propiedades de los elementos hijos

### 🔹 `order`
Permite cambiar el orden de los elementos.
```css
.item {
  order: 2; /* Cambia el orden del elemento */
}
```

### 🔹 `flex-grow`
Controla cuánto crece cada elemento en relación a los demás.
```css
.item {
  flex-grow: 2; /* Este elemento crece más que los demás */
}
```

### 🔹 `flex-shrink`
Determina cuánto puede encogerse un elemento.
```css
.item {
  flex-shrink: 1; /* Puede encogerse si no hay espacio */
}
```

### 🔹 `align-self`
Permite que un elemento se alinee de manera diferente al resto.
```css
.item {
  align-self: flex-end; /* Se alinea al final */
}
```

---

## 📌 Recursos y ejercicios prácticos

✅ **Juegos para aprender Flexbox:**
- [Flexbox Froggy](http://flexboxfroggy.com/#es)
- [Flexbox Defense](http://www.flexboxdefense.com/)

✅ **Ejercicios recomendados:**
1. Crea una caja contenedora flex con 6 elementos dentro y juega con `flex-direction`.
2. Usa `justify-content` y `align-items` para centrar elementos.
3. Prueba `flex-wrap` y observa qué ocurre al reducir el tamaño de la pantalla.
4. Cambia el `order` de los elementos y mira cómo cambia la disposición.

