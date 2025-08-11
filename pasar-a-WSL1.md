# Cambiar de WSL 2 a WSL 1 en Windows

Este documento explica cómo cambiar tu distribución de Linux en WSL (Windows Subsystem for Linux) de WSL 2 a WSL 1. Este cambio puede ser útil si estás teniendo problemas de conexión con servicios que se ejecutan en Windows, como MySQL en `localhost`.

---

## ✅ Pasos a seguir

### 1. Abrir PowerShell como administrador

Haz clic derecho sobre el icono de PowerShell y selecciona **"Ejecutar como administrador"**.

---

### 2. Verificar la versión actual de tu distribución

```powershell
wsl --list --verbose
```

Esto mostrará una lista como:

```
  NAME      STATE           VERSION
* Ubuntu    Running         2
```

---

### 3. Cambiar la versión de WSL 2 a WSL 1

Ejecuta el siguiente comando, reemplazando `Ubuntu` por el nombre exacto de tu distribución si es diferente:

```powershell
wsl --set-version Ubuntu 1
```

Este proceso puede tardar unos minutos, dependiendo del tamaño de tu sistema de archivos.

---

### 4. Verificar que el cambio se haya realizado correctamente

```powershell
wsl --list --verbose
```

Deberías ver que la columna `VERSION` muestra ahora el número `1` para tu distribución:

```
  NAME      STATE           VERSION
* Ubuntu    Running         1
```

---

## ℹ️ Notas adicionales

- Si no conoces el nombre exacto de tu distribución, puedes obtenerlo con `wsl --list`.
- WSL 1 comparte la red con Windows, por lo que puede conectarse mejor a servicios como MySQL que se ejecutan en `localhost`.
- Sin embargo, WSL 1 no tiene soporte completo para herramientas como Docker, que requieren un kernel Linux real.

---

## 🔄 Volver a WSL 2

Si en algún momento deseas volver a WSL 2:

```powershell
wsl --set-version Ubuntu 2
```
