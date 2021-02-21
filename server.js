const express = require('express');
const app = express();
const server = require('http').Server(app);

const bodyParser = require('body-parser');
const response = require('./network/response.js');
const dbConnection = require('./db');
const socket = require('./socket');

const router = require('./network/routers');



app.use(bodyParser.json());
router(app);
socket.connect(server)

app.use('/', express.static('public'))

// creando coneccion a la base de datos;
const mongoUrl = 'mongodb://localhost:27017';
const dbName = 'backNode';
dbConnection(mongoUrl, dbName)

server.listen(3000, () => console.log('La aplicacion esta escuchando en el puerto http://localhost:3000'));

