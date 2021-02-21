const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server, {
  cors: {
    origin:'*'
  }
});

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('nuevo cliente conectado');
  socket.emit('mensaje', 'Bienvenido!!!');
})

server.listen(8080, ()=> console.log('Servidor iniciado en http://localhost:8080/'));