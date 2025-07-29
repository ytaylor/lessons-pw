# 🖥️ Proyecto Express + MySQL + JWT

Este proyecto es un servidor backend construido con **Node.js**, **Express** y **MySQL**, que incluye autenticación de usuarios mediante **JSON Web Tokens (JWT)** y encriptación de contraseñas con **bcrypt**.

---

## 📚 Tecnologías utilizadas

- **Node.js**: entorno para ejecutar JavaScript en el servidor.
- **Express**: framework para construir el servidor y las rutas.
- **MySQL**: base de datos relacional para guardar usuarios y datos.
- **jsonwebtoken (JWT)**: permite crear y verificar tokens de autenticación.
- **bcrypt**: se usa para encriptar las contraseñas.
- **dotenv**: para usar variables de entorno (como contraseñas seguras).
- **cors**: permite que el servidor acepte peticiones desde otras direcciones.

---

## 🔄 Flujo general del proyecto

1. El servidor se inicia con `Express` y se conecta a una base de datos `MySQL`.
2. Las rutas permiten **registrar** e **iniciar sesión** con usuarios.
3. Las contraseñas se **encriptan** antes de guardarse.
4. Si el usuario se autentica correctamente, el servidor le entrega un **token JWT**.
5. Ese token se guarda en el cliente (por ejemplo, en el navegador).
6. Algunas rutas (como `/women`) solo son accesibles si el usuario **envía su token**.

---

## 🔐 ¿Qué es un token? ¿Y qué es JWT?

Un **token** es como una llave digital que permite a un usuario acceder a recursos protegidos.  
**JWT (JSON Web Token)** es un formato seguro y compacto para representar esa llave.

Un JWT contiene:
- **Header**: tipo de token y algoritmo.
- **Payload**: información del usuario (por ejemplo, su email o id).
- **Signature**: una firma secreta que garantiza que el contenido no fue modificado.

Ejemplo de payload:

```json
{
  "username": "ana@example.com",
  "id": 123,
  "exp": 1723673456
}
```

---

## 🔄 ¿Cómo se usa JWT en este proyecto?

### 1. Registro (`/api/register`)
- El usuario envía email y contraseña.
- Se encripta la contraseña con `bcrypt`.
- Se guarda el usuario en la base de datos.
- Se genera un **token JWT** que se devuelve al usuario.

### 2. Login (`/api/login`)
- El servidor comprueba si el usuario existe.
- Verifica si la contraseña coincide.
- Si es correcto, crea y devuelve un **nuevo token**.

### 3. Acceso protegido (`/women`)
- El frontend debe enviar el token en cada petición (en la cabecera `Authorization`).
- El backend verifica que el token sea válido.
- Si es correcto, permite el acceso a la ruta.

---

## 🔧 Estructura de las funciones JWT

### 🔑 Generar token
```js
const generateToken = (payload) => {
  const token = jwt.sign(payload, 'secreto', { expiresIn: '1h' });
  return token;
};
```

### 🔍 Verificar token
```js
const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, 'secreto');
    return decoded;
  } catch (err) {
    return null;
  }
};
```

> ⚠️ Nota: la clave secreta (`'secreto'`) debería guardarse en el archivo `.env`, no escrita directamente en el código.

---

## 🛡️ Middleware para proteger rutas

```js
function authenticateToken(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({ error: 'Token no proporcionado' });
  }
  if (!verifyToken(token)) {
    return res.status(401).json({ error: 'Credenciales no válidas' });
  }
  next();
}
```

- Si no se recibe token, o si es incorrecto, se bloquea el acceso.
- Si el token es válido, se permite continuar.



## ✅ Buenas prácticas y posibles mejoras

- Guardar claves secretas como `JWT_SECRET` en `.env`.
- Usar HTTPS para proteger los tokens en tránsito.
- Establecer expiración de tokens corta y renovarlos con "refresh tokens".
- Corregir errores en el código, como:
  - `verifyJWT(...)` debería ser `verifyToken(...)`.
  - `response.status(...)` debería ser `res.status(...)`.

---

## 📦 Resumen de rutas

| Método | Ruta           | Protegida | Descripción                              |
|--------|----------------|-----------|------------------------------------------|
| POST   | `/api/register`| ❌         | Registro de nuevo usuario                |
| POST   | `/api/login`   | ❌         | Inicio de sesión                         |
| GET    | `/women`       | ✅         | Obtener datos filtrados (requiere token) |

---

## 🧪 Ejemplo de uso del token

Cuando el usuario inicia sesión correctamente, el backend devuelve un token:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "email": "ana@example.com"
}
```

Después, para acceder a `/women`, el cliente debe enviar:
```
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

## 📁 Variables recomendadas en `.env`

```env
PORT=4000
DB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=nombre_de_tu_base_de_datos
JWT_SECRET=clave_super_secreta
```

