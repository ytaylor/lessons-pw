
## 1. Expresión CASE

La expresión `CASE` en SQL permite aplicar lógica condicional dentro de las consultas. Es útil para transformar datos o crear nuevas columnas temporales según condiciones.

**Ejemplo básico:**
```sql
SELECT salario,
CASE
    WHEN salario < 2000 THEN "Bajo"
    WHEN salario > 3000 THEN "Alto"
    ELSE "Medio"
END AS RangoSalario
FROM empleadas;
```

**Características:**
- Puede anidarse.
- Es compatible con `WHERE`.
- Cada `CASE` debe cerrarse con `END`.
- Se debe usar `ELSE` para cubrir todos los casos posibles.

---

## 2. Funciones Agregadas

Estas funciones permiten resumir grandes volúmenes de datos:

- `MIN()` / `MAX()`: valor mínimo o máximo.
- `SUM()`: suma total.
- `AVG()`: media aritmética.
- `COUNT()`: cantidad de registros.

**Ejemplo:**
```sql
SELECT COUNT(salario) AS SalariosAltos
FROM empleadas
WHERE salario >= 3000;
```

Resultado: número de empleadas con salario >= 3000.

---

## 3. GROUP BY y HAVING

### GROUP BY

Agrupa filas según valores comunes en una columna y permite aplicar funciones agregadas a cada grupo.

**Ejemplo:**
```sql
SELECT pais, AVG(salario) AS SalarioMedio
FROM empleadas
GROUP BY pais;
```

### HAVING

Filtra los grupos generados por `GROUP BY`, similar a cómo `WHERE` filtra filas individuales.

**Ejemplo:**
```sql
SELECT AVG(salario) AS SalariosMediosPais, pais
FROM empleadas
GROUP BY pais
HAVING COUNT(*) >= 3;
```

Devuelve el salario medio solo para países con 3 o más empleadas.

---