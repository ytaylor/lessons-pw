import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());



async function getConnection() {
    const connection = await mysql.createConnection({

    });
    await connection.connect();

    console.log(
        `Conexión establecida con la base de datos (identificador=${connection.threadId})`
    );

    return connection;
}


// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor API escuchando en http://localhost:${PORT}`);
});


// Datos simulados
let women = [
    {
        id: 1,
        full_name: "Angela Davis",
        birth_date: "1944-01-26",
        death_date: null,
        country: "Estados Unidos",
        field: "Activismo",
        bio: "Activista, filósofa...",
        photo_url: "",
        achievements: []
    }
];

// GET /api/women
app.get('/api/women', async (req, res) => {

    console.log('Pidiendo a la base de datos información de las mujeres.');
    let sql = 'SELECT * FROM women;';

    const connection = await getConnection();
    const [results, fields] = await connection.query(sql);
    res.json(results);
    connection.end();

    //res.json({ results: women });
});

// POST /api/women
app.post('/api/women', (req, res) => {
    const newWoman = req.body;

    // Validación mínima
    if (!newWoman.full_name || !newWoman.country || !newWoman.field) {
        return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }

    const id = women.length ? women[women.length - 1].id + 1 : 1; // Creo un id teniendo en cuenta el tamaño del array
    const womanWithId = { id, ...newWoman };
    women.push(womanWithId);

    res.status(201).json(womanWithId);
});

