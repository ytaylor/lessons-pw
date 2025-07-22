const express = require('express');

const server = express();

const port = 3000;
server.listen(port, () => {
  console.log(`Server ready at: <http://localhost:${port}>`)
});

server.get('/', (req, res)=>{
  // req: La petición (request)
  // res: La respuesta (response)

  res.send('Holis!')
});