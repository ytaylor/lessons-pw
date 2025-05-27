

## 🔹 1. Display: Visualización de Elementos

### 📄 Tipos principales

| Tipo          | Descripción |
|---------------|-------------|
| `inline`      | Ocupa solo el espacio del contenido, no acepta márgenes verticales. |
| `block`       | Ocupa todo el ancho disponible, genera salto de línea. |
| `inline-block`| Combina características de `inline` y `block`. |
| `none`        | Oculta el elemento. |

### 🔧 Modificación con `display`

```css
span {
  display: block;
}
```

### 🧠 Otros valores útiles

- `flex`: Para usar Flexbox.
- `grid`: Para usar Grid.
- `table`, `table-row`, `table-cell`: Emulan una tabla sin `<table>`.

📚 [Guía en CSS Tricks](https://css-tricks.com/almanac/properties/d/display/)

---

## 📍 2. Posicionamiento con `position`

### 🗺 Valores posibles

| Valor      | Comportamiento |
|------------|----------------|
| `static`   | Valor por defecto, no responde a `top`, `left`, etc. |
| `relative` | Se mueve desde su posición original. |
| `absolute` | Se posiciona respecto al primer contenedor con `position` distinta de `static`. |
| `fixed`    | Se mantiene fijo en la pantalla, incluso con scroll. |
| `sticky`   | Se comporta como `relative` hasta que se alcanza un punto de scroll. |

### 🎯 Ejemplo básico
- Explicar las propiedades que se pueden usar con position
- Explicar que se puede usar top, left, right, bottom
- Explicar que se puede usar z-index

- En las position relative su madre también tiene que tener una position relative, y con el top positivo se mueve hacia abajo y negativo hacia arriba
- En las position absolute su madre tiene que tener una position relative, lo saca de la colocación y es como si elemento no estuviera, lo sacas de tipo bloque, y se coloca en la posición que le digas, si no tiene un padre con position relative se coloca en el body, Ahora ocupa solo el espacio de su contenido, y sale el flujo de los elementos, y se coloca en la posición que le digas, si no tiene un padre con position relative se coloca en el body 

```css
.box {
  position: absolute;
  top: 50px;
  left: 100px;
}
```

- El position fixed se coloca en la posición que le digas, pero se mantiene fijo en la pantalla, incluso con scroll
- El position sticky se comporta como relative hasta que se alcanza un punto de scroll, y se queda fijo en la pantalla


### 🧱 Superposición: `z-index`

Permite controlar qué elementos se ven por encima de otros:

```css
.element {
  position: absolute;
  z-index: 10;
}
```

📚 [Guía de posicionamiento en MDN](https://developer.mozilla.org/es/docs/Web/CSS/position)

---

# Bonus

## 🔄 3. Transformaciones con `transform`

### 🔹 Transformaciones 2D

- `translate(x, y)`: Desplazamiento.
- `rotate(deg)`: Rotación.
- `scale(x, y)`: Escalado.
- `skew(x, y)`: Sesgado.

```css
.box {
  transform: translate(50px, 20px) rotate(10deg) scale(1.2);
}
```

### 🧲 Transformaciones 3D

- `rotateX`, `rotateY`, `rotateZ`
- `scale3d`, `rotate3d`, `perspective`

```css
.cube {
  transform: rotateY(90deg) translateX(50px);
}
```

### 🎯 Centrado con transform

```css
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

📚 [Referencia de `transform` en MDN](https://developer.mozilla.org/es/docs/Web/CSS/transform)

---

## ✅ Conclusión

- Usa `display` para definir cómo fluye un elemento.
- Usa `position` para ubicarlo en coordenadas específicas.
- Usa `transform` para efectos visuales y ajustes dinámicos.

