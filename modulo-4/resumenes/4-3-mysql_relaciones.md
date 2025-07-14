# Relaciones entre tablas en MySQL: Foreign Keys, ERD y JOINs

En proyectos reales, las bases de datos se componen de muchas tablas conectadas entre sí. Para que esta conexión tenga sentido y mantenga la integridad de los datos, usamos **relaciones**.

---

## 📊 Diagrama Entidad-Relación (ERD)

Antes de crear una base de datos, es muy útil diseñar un **diagrama entidad-relación (ERD)**. Este diagrama muestra:

- **Entidades** → tablas (como `usuarios`, `productos`, `pedidos`)
- **Atributos** → columnas de las tablas
- **Relaciones** → conexiones entre tablas (1:1, 1:N, N:M)

### Ejemplo en una tienda:
- Una usuaria puede hacer muchos pedidos (1:N)
- Un pedido puede tener muchos productos y un producto puede estar en muchos pedidos (N:M)

Las relaciones N:M se gestionan creando una **tabla intermedia**.

---

## 🔐 Claves foráneas (Foreign Keys)

Una **clave foránea** es una columna que conecta una tabla con otra. Hace referencia a la `PRIMARY KEY` de otra tabla.

### Ejemplo:

```sql
CREATE TABLE category (
  idCategory INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE products (
  idProduct INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  fkCategory INT,
  FOREIGN KEY (fkCategory) REFERENCES category(idCategory)
);
```

Esto asegura que ningún producto pueda tener una categoría que no exista.  
También evita que se elimine una categoría si tiene productos asociados (a menos que se especifique otra acción como `ON DELETE CASCADE`).

---

## 🔗 Consultas con múltiples tablas: JOIN

Para leer datos de varias tablas relacionadas, usamos `JOIN`.

### 🔄 Producto cartesiano + WHERE

```sql
SELECT employees.name, departments.name
FROM employees, departments
WHERE employees.fkDepartment = departments.idDepartment;
```

Esto combina todas las filas de ambas tablas y filtra solo las que coinciden.

### ✅ INNER JOIN (forma recomendada)

```sql
SELECT employees.name, departments.name
FROM employees
INNER JOIN departments
ON employees.fkDepartment = departments.idDepartment;
```

Es más claro y eficiente que usar el producto cartesiano.

---

## 🌍 Relaciones N:M (muchos a muchos)

Ejemplo: Una empleada puede trabajar en varios países y un país puede tener varias empleadas.

### Tablas necesarias:

- `employees`: info de cada persona
- `country`: países
- `employees_country`: tabla intermedia con claves foráneas

```sql
CREATE TABLE employees_country (
  id INT AUTO_INCREMENT PRIMARY KEY,
  fkEmployee INT,
  fkCountry INT,
  FOREIGN KEY (fkEmployee) REFERENCES employees(id),
  FOREIGN KEY (fkCountry) REFERENCES country(id)
);
```

### Consulta con múltiples JOINs:

```sql
SELECT employees.name, country.name AS pais
FROM employees
INNER JOIN employees_country ON employees.id = employees_country.fkEmployee
INNER JOIN country ON country.id = employees_country.fkCountry;
```

---

## 🧾 Ejemplo real: Tienda de joyas

Supón que tienes estas tablas:

- `category`: contiene tipos como anillos, pulseras...
- `products`: joyas con precio y descripción

Cada producto tiene una columna `fkCategory` que indica su categoría.

```sql
SELECT products.name, category.name
FROM products
INNER JOIN category ON products.fkCategory = category.idCategory;
```

Así puedes ver el nombre de cada joya y su categoría.

---

## ✅ Conclusiones

- Usa claves foráneas para mantener relaciones y consistencia entre datos.
- El `JOIN` te permite consultar varias tablas relacionadas en una sola query.
- Usa tablas intermedias para relaciones N:M.
- Un buen diseño con ERD facilita la implementación y el mantenimiento de la base de datos.

