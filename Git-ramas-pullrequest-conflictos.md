# 🌱 Guía para entender Git: ramas, Pull Requests, merge, rebase y conflictos

Esta guía está pensada para ayudarte a entender los conceptos clave de Git de una forma clara y cercana. Si estás empezando y te suenan a chino palabras como `merge`, `rebase` o `pull request`, **no te preocupes**: vamos paso a paso.

---

## 🌳 ¿Qué son las ramas?

En Git, una **rama** es como una copia del proyecto donde puedes trabajar sin romper nada. Imagina que tienes una receta y haces una fotocopia para probar cambios sin estropear el original.  
Cuando el cambio te gusta, lo unes de nuevo al original. Eso es lo que hacemos con las ramas.

### Tipos de ramas comunes

| Rama              | ¿Para qué sirve?                                                  |
|-------------------|-------------------------------------------------------------------|
| `main`            | La rama principal. Contiene el código listo para producción.     |
| `develop`         | Donde se juntan las nuevas funcionalidades antes de lanzarlas.   |
| `feature/*`       | Para trabajar en una nueva funcionalidad (ej. `feature/login`).   |
| `bugfix/*`        | Para corregir errores sin afectar lo que ya funciona.            |
| `release/*`       | Para preparar una nueva versión antes de mandarla a producción.  |
| `hotfix/*`        | Para corregir errores urgentes en producción.                    |

---

## 💡 ¿Qué es un Pull Request?

Cuando terminas tu trabajo en una rama, no lo unes directamente al proyecto. En lugar de eso, haces un **Pull Request (PR)**. Esto es como decir:

> "Hola, terminé mi parte. ¿Me lo puedes revisar y unir al proyecto si está bien?"

El PR permite:
- Revisar el código antes de unirlo
- Comentar y sugerir mejoras
- Asegurar que todo funcione bien

## 🛠️ ¿Cómo hacer un Pull Request?
1. Asegúrate de que tu rama está actualizada con `develop`.
2. Ve a tu repositorio en GitHub.
3. Haz clic en "New Pull Request".
4. Selecciona tu rama y `develop` como base.
5. Escribe un título y descripción clara.
6. Haz clic en "Create Pull Request".
7. Pide a alguien que revise tu PR.

## 📝 ¿Cómo escribir un buen Pull Request?
- **Título claro**: Resume el cambio en pocas palabras.
- **Descripción detallada**: Explica qué hiciste, por qué y cómo probarlo.
- **Referencias**: Si es un bug, menciona el ticket o issue relacionado.
- **Revisiones**: Pide a alguien que revise tu código y dé feedback.

---

## 🔀 Opciones al hacer un merge (unir ramas)

Cuando se aprueba un PR, puedes **fusionar (mergear)** los cambios. GitHub te da tres opciones:

### 1. ✅ Merge commit
- Une las ramas y crea un **nuevo commit** que lo registra.
- Pros: se ve todo el historial.
- Contras: puede hacer el historial más largo o confuso.

### 2. ✂️ Squash and merge
- Junta todos los cambios en **un solo commit**.
- Pros: historial más limpio.
- Ideal si hiciste muchos commits pequeños.

### 3. ♻️ Rebase and merge
- Hace como si tus cambios hubieran salido directamente de `main` o `develop`.
- Pros: historial muy ordenado.
- Contras: no se ve cuándo se unieron realmente las ramas.

## ✅ ¿Puedo trabajar sin Pull Requests?
Sí. Git en sí no necesita PRs. Los PRs son una funcionalidad adicional de plataformas como GitHub, GitLab o Bitbucket para facilitar la colaboración y revisión de código.

Puedes simplemente trabajar en ramas o incluso directamente en main (aunque eso no se recomienda si hay otras personas implicadas).

```bash
git checkout -b feature/cambiar-logo
# haces cambios
git add .
git commit -m "Cambia logo de cabecera"
git checkout main
git merge feature/cambiar-logo
git push origin main
```
### 🧭 ¿Cuándo tiene sentido no usar Pull Requests?

| Situación                                          | ¿Usar PR?           |
| -------------------------------------------------- | ------------------- |
| Estás trabajando sola en un proyecto               | ❌ No necesario      |
| Proyecto personal o aprendizaje                    | ❌ No necesario      |
| Equipo muy pequeño con mucha confianza             | ⚠️ Opcional         |
| Proyecto colaborativo en producción                | ✅ Sí, mejor con PRs |
| Necesitas revisión de código o pruebas automáticas | ✅ Sí, muy útil      |

---
##  🛠 ¿Qué hace git fetch?
Este comando descarga los últimos cambios del repositorio remoto (como GitHub) pero no los aplica automáticamente en tu rama actual. Es como decir: 
> “Trae lo nuevo, pero no me lo mezcles todavía. Ya lo miraré”.

```bash
git fetch origin
```

## Cuando usar `git fetch`:
✅ Al principio de cada día o antes de fusionar ramas
Por ejemplo, antes de trabajar con develop o antes de hacer un merge, podrías hacer:
```bash
git fetch origin
git switch develop
git merge origin/develop
```


## ❗¿Qué pasa si hay conflictos?

Un **conflicto** ocurre cuando dos personas cambian lo mismo en el mismo archivo.

Git no sabe cuál versión debe dejar, así que te lo pregunta.

### Git te mostrará algo así:

```
<<<<<<< HEAD
esto está en la rama actual
=======
esto viene de la rama que quieres unir
>>>>>>> feature/nueva-funcionalidad
```

### ¿Cómo lo solucionas?

1. Abres el archivo.
2. Eliminas las marcas `<<<<<<<`, `=======`, `>>>>>>>` y dejas lo correcto.
3. Guardas el archivo.
4. Haces:

```bash
git add <archivo>
git commit   # si estabas haciendo merge
# o
git rebase --continue   # si estabas haciendo rebase
```

---

## 🔁 `git merge` vs `git rebase`: ¿cuál uso?

| Diferencia         | `merge`                           | `rebase`                          |
|--------------------|-----------------------------------|-----------------------------------|
| Historial          | Con ramas y "ramificaciones"      | Lineal, más ordenado              |
| ¿Reescribe historial? | No                            | Sí                                |
| ¿Conflictos?       | Puede haber, pero más fáciles     | También puede haber               |
| Ideal para...      | Trabajos compartidos              | Limpiar historial antes de un PR  |

---

## 🧱 Ejemplo visual

Estado inicial:

```
A---B---C   ← develop
     \       
      D---E   ← feature
```

Con `merge`:

```
A---B---C-------G   ← develop
     \     /   
      D---E
```

Con `rebase`:

```
A---B---C---D'---E'   ← feature (luego se une sin crear un commit de merge)
```
---

## 🔄 ¿Y si mi rama se queda desactualizada?

Imagina que tú creas tu rama desde `develop`, pero `develop` ha seguido cambiando y tú no actualizas tu rama. Puede que cuando intentes unirla, todo esté muy distinto y te salten muchos conflictos.

### 🔧 Solución 1: mergear `develop` en tu rama

```bash
git checkout develop
git pull origin develop

git checkout feature/mi-rama
git merge develop
```

### ♻️ Solución 2: rebase (si trabajas sola en esa rama)

```bash
git checkout develop
git pull origin develop

git checkout feature/mi-rama
git rebase develop

# Si ya habías subido la rama antes:
git push origin feature/mi-rama --force
```

⚠️ **Cuidado** con `--force`: solo úsalo si nadie más trabaja en esa rama.

## 📝 Consejos finales

- Mantén tu rama limpia: actualízala frecuentemente.
- Revisa bien los conflictos y no te asustes si salen.
- Pide ayuda cuando no entiendas algo: ¡todas hemos pasado por ahí!
- Antes de subir un Pull Request, asegúrate de tener `develop` actualizado.
- Si tu rama tarda días o semanas en completarse, haz `merge` o `rebase` seguido.

## Ejemplo: Trabajar con Git **sin Pull Requests**

**Contexto**: Vamos a crear el diseño de una página web sencilla con React. La página debe contener un encabezado, un pie de página y un contenido principal. Cada uno de estos elementos estará en su propia rama para practicar el uso de ramas, pero en lugar de usar Pull Requests, haremos todo desde la terminal.

---

## Escenario 1: No hay conflictos, y cada miembro del equipo trabaja en su propia rama

### Paso 1: Crear el repositorio

1. Crea un nuevo repositorio en GitHub llamado `pagina-web-ejemplo`.
2. Clona el repositorio en tu máquina local:

```bash
git clone <URL_DEL_REPOSITORIO>
cd pagina-web-ejemplo
git switch -c develop
```

### Paso 2: Crear y trabajar en las ramas

```bash
# Crear rama encabezado
git checkout -b feature/encabezado
echo "// Componente Encabezado" > Encabezado.jsx
git add .
git commit -m "Añade componente Encabezado"

# Volver a develop y fusionar directamente sin PR
git fetch origin  # Traer los últimos cambios remotos
git checkout develop
git merge feature/encabezado

# Crear rama contenido
git checkout -b feature/contenido
echo "// Componente Contenido" > Contenido.jsx
git add .
git commit -m "Añade componente Contenido"

# Fusionar a develop
git checkout develop
git merge feature/contenido

# Crear rama pie de página
git checkout -b feature/pie-de-pagina
echo "// Componente Pie de Página" > PieDePagina.jsx
git add .
git commit -m "Añade componente Pie de Página"

# Fusionar a develop
git checkout develop
git merge feature/pie-de-pagina
```

### Paso 3: Subir cambios

```bash
git push origin develop
```

---

## Escenario 2: Hay conflictos al fusionar las ramas

### Paso 1: Crear el repositorio

1. Crea un nuevo repositorio en GitHub llamado `pagina-web-ejemplo-conflictos`.
2. Clona el repositorio en tu máquina local:

```bash
git clone <URL_DEL_REPOSITORIO>
cd pagina-web-ejemplo-conflictos
git checkout -b develop
```

### Paso 2: Crear ramas y trabajar en paralelo

```bash
# Rama encabezado
git checkout -b feature/encabezado
echo "<header>Encabezado</header>" > App.jsx
git add .
git commit -m "Encabezado en App"

# Volver a develop y crear otra rama
git checkout develop
git checkout -b feature/contenido
echo "<main>Contenido principal</main>" > App.jsx
git add .
git commit -m "Contenido en App"
```

### Paso 3: Fusionar ramas y resolver conflictos

```bash
# Volver a develop y fusionar la primera
git fetch origin  # Traer los últimos cambios remotos
git checkout develop
git merge feature/encabezado

# Ahora intentar fusionar la segunda (con conflicto)
git merge feature/contenido
```

Git mostrará un conflicto porque ambos modificaron el mismo archivo (`App.jsx`). Verás algo así:

```plaintext
<<<<<<< HEAD
<header>Encabezado</header>
=======
<main>Contenido principal</main>
>>>>>>> feature/contenido
```

### Paso 4: Resolver conflictos

1. Edita el archivo `App.jsx` y deja una versión combinada:

```jsx
<header>Encabezado</header>
<main>Contenido principal</main>
```

2. Guarda el archivo y termina el merge:

```bash
git add App.jsx
git commit -m "Resuelve conflicto entre encabezado y contenido"
```

### Paso 5: Subir los cambios

```bash
git push origin develop
```

---

