const express = require('express');
const response = require('../../network/response');

const router = express.Router();

router.get('/', (req, res) => {
  console.log(req.headers);
  res.header({"custom-header": 'Esto es una prueba de nuestro propio header.'})
  // res.send('Lista de mensajes');
  response.success(req, res, 'Lista de mensajes', 205);
})

router.post('/', (req, res) => {
  const body = req.body;
  const query = req.query;
  console.log(body, query);
  res.send({from: query, body});
})

router.put('/', (req, res) => {
  if(req.query.ok === 200){
    response.success(req, res, 'Mensaje actualizado', 205);
  }else{
    response.error(req, res, 'Ocurrio un error en el servidor', 500, 'Ocurrio un error al actualizar la informacion de base de datos, id suministrado es incorrecto');
  }
})

router.delete('/', (req, res) => {
  res.send('Eliminando un nuevo mensaje');
})

module.exports = router;