const express = require('express');
const bodyParser = require('body-parser');
const response = require('./network/response.js');
const dbConnection = require('./db');

const router = require('./network/routers');
const app = express();

app.use(bodyParser.json());
router(app);

app.use('/app', express.static('public'))

// creando coneccion a la base de datos;
const mongoUrl = 'mongodb://localhost:27017';
const dbName = 'backNode';
dbConnection(mongoUrl, dbName)

app.listen(3000);
console.log('La aplicacion esta escuchando en el puerto http://localhost:3000');