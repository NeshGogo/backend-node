const express = require('express');
const bodyParser = require('body-parser');
const response = require('./network/response.js');

const router = express.Router();

let app = express();

// app.use('/', (req, res) => {
//   res.send('Hola');
// })

app.use(bodyParser.json());
app.use(router);


router.get('/message', (req, res) => {
  console.log(req.headers);
  res.header({"custom-header": 'Esto es una prueba de nuestro propio header.'})
  // res.send('Lista de mensajes');
  response.success(req, res, 'Lista de mensajes', 205);
})

router.post('/message', (req, res) => {
  const body = req.body;
  const query = req.query;
  console.log(body, query);
  res.send({from: query, body});
})

router.put('/message', (req, res) => {
  if(req.query.ok === 200){
    response.success(req, res, 'Mensaje actualizado', 205);
  }else{
    response.error(req, res, 'Ocurrio un error al intentar actualizar', 500);
  }
})

router.delete('/message', (req, res) => {
  res.send('Eliminando un nuevo mensaje');
})

app.use('/app', express.static('public'))

app.listen(3000);
console.log('La aplicacion esta escuchando en el puerto http://localhost:3000');