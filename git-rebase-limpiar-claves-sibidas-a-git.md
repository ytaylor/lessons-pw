
# Cómo eliminar secretos del historial de Git usando `git rebase`

Este documento explica cómo eliminar una contraseña o secreto expuesto en un commit anterior, usando `git rebase` interactivo, para poder hacer `push` al repositorio en GitHub sin que sea bloqueado.

---

## 🧪 Paso 1: Encuentra el commit con el secreto

GitHub te dirá el `commit hash` del secreto. Por ejemplo:

```
cb3f4c3259bd2c1a61c27f9e4da6c8c5a2ab94df
```

Verifica que está en tu historial:

```bash
git log
```

---

## 🔄 Paso 2: Inicia el rebase interactivo

Si el commit es reciente (por ejemplo, entre los últimos 5):

```bash
git rebase -i HEAD~5
```

Esto abrirá un editor con una lista de commits:

```
pick abc123 primer commit
pick cb3f4c3 commit con secreto
pick def456 otro commit
```

Cambia `pick` por `edit` en el commit con el secreto:

```
pick abc123 primer commit
edit cb3f4c3 commit con secreto
pick def456 otro commit
```

Guarda y cierra el editor.

---

## ✏️ Paso 3: Edita el commit

Git se detendrá para que edites el commit con el secreto.

1. Abre y corrige los archivos que contienen el secreto:

```bash
code modulo-4/app-women-server/src/index.js
code modulo-4/modulo-4-leccion-07-express-y-mysql/.env
```

2. Si `.env` no debe estar en Git, elimínalo del historial:

```bash
git rm --cached modulo-4/modulo-4-leccion-07-express-y-mysql/.env
```

3. Añade los cambios y reescribe el commit:

```bash
git add .
git commit --amend
```

---

## 🔁 Paso 4: Continúa con el rebase

```bash
git rebase --continue
```

Repite este proceso si hay más commits con secretos.

---

## 🚀 Paso 5: Haz push forzado

Como has cambiado el historial, necesitas hacer un push forzado:

```bash
git push origin main --force
```

---

## 🧼 Recomendaciones adicionales

- Añade `.env` al archivo `.gitignore`:

```bash
echo ".env" >> .gitignore
```

- Si el secreto subido era real (por ejemplo, una contraseña de Aiven), cámbialo inmediatamente desde el servicio.

---

## ✅ ¡Listo!

Ahora tu repositorio estará limpio de secretos y podrás subir los cambios a GitHub sin errores de seguridad.
