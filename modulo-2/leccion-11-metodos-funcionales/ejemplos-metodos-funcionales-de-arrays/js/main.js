
// 📘 Plataforma de Cursos Online

/**Estás desarrollando una pequeña app para una plataforma de cursos online. Tienes un array con información sobre los cursos disponibles. Cada curso es un objeto con estas propiedades:
- titulo: nombre del curso
- nivel: puede ser "básico", "intermedio" o "avanzado"
- duracion: duración en horas
- valoracion: puntuación de los usuarios (de 0 a 5) */

const cursos = [
    { titulo: "HTML desde cero", nivel: "básico", duracion: 12, valoracion: 4.5 },
    { titulo: "CSS para principiantes", nivel: "básico", duracion: 10, valoracion: 4.3 },
    { titulo: "JavaScript intermedio", nivel: "intermedio", duracion: 20, valoracion: 4.7 },
    { titulo: "React avanzado", nivel: "avanzado", duracion: 25, valoracion: 4.9 },
    { titulo: "Accesibilidad web", nivel: "intermedio", duracion: 8, valoracion: 4.1 },
    { titulo: "Backend con Node.js", nivel: "avanzado", duracion: 30, valoracion: 4.8 }
];

/*Mostrar los títulos de todos los cursos en mayúsculas
Usa map() para obtener un nuevo array solo con los títulos en mayúsculas.

Filtrar los cursos básicos de menos de 12 horas
Usa filter() para obtener solo los cursos de nivel "básico" con duración menor a 12.

Buscar el primer curso con valoración mayor a 4.7
Usa find() para encontrar el primer curso que supere esa valoración.

Calcular la duración total de todos los cursos
Usa reduce() para obtener la suma total de horas.

Ordenar los cursos por valoración de mayor a menor
Usa sort() para reordenar el array según la valoración.
*/


// 1. Mostrar los títulos en mayúsculas
const titulosMayus = cursos.map(curso => curso.titulo.toUpperCase());
console.log("Títulos en mayúsculas:", titulosMayus);

// 2. Filtrar cursos básicos de menos de 12 horas
const basicosCortos = cursos.filter(curso => curso.nivel === "básico" && curso.duracion < 12);
console.log("Cursos básicos < 12h:", basicosCortos);

// 3. Buscar el primer curso con valoración mayor a 4.7
const topCurso = cursos.find(curso => curso.valoracion > 4.7);
console.log("Primer curso con valoración > 4.7:", topCurso);


// 4. Calcular la duración total (BONUS)
const duracionTotal = cursos.reduce((acc, curso) => acc + curso.duracion, 0);
console.log("Duración total:", duracionTotal, "horas");

// 5. Ordenar los cursos por valoración (mayor a menor)  (BONUS)
const cursosOrdenados = [...cursos].sort((a, b) => b.valoracion - a.valoracion);
console.log("Cursos ordenados por valoración:", cursosOrdenados);

// 6. BONUS: Títulos de cursos intermedios con valoración > 4.5
const intermediosBuenos = cursos
    .filter(curso => curso.nivel === "intermedio" && curso.valoracion > 4.5)
    .map(curso => curso.titulo);
console.log("Cursos intermedios con buena valoración:", intermediosBuenos);