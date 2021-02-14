const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

let app = express();

// app.use('/', (req, res) => {
//   res.send('Hola');
// })

app.use(bodyParser.json());
app.use(router);


router.get('/message', (req, res) => {
  res.send('Lista de mensajes');
})

router.post('/message', (req, res) => {
  const body = req.body;
  const query = req.query;
  console.log(body, query);
  res.send({from: query, body});
})

router.put('/message', (req, res) => {
  res.send('Actualizando un nuevo mensaje');
})

router.delete('/message', (req, res) => {
  res.send('Eliminando un nuevo mensaje');
})

app.listen(3000);
console.log('La aplicacion esta escuchando en el puerto http://localhost:3000');