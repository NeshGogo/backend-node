const express = require('express');
const bodyParser = require('body-parser');
const response = require('./network/response.js');


// const router = require('./components/message/network');

const router = require('./network/routers');
let app = express();

// app.use('/', (req, res) => {
//   res.send('Hola');
// })

app.use(bodyParser.json());
// app.use(router);

router(app);



app.use('/app', express.static('public'))

app.listen(3000);
console.log('La aplicacion esta escuchando en el puerto http://localhost:3000');