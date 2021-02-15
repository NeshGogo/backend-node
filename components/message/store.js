const db = require('mongoose');
const Model = require('./model');

db.Promise = global.Promise;
// creando coneccion;
const mongoUrl = 'mongodb://localhost:27017';
const dbName = 'backNode';
db.connect(`${mongoUrl}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
  dbName: dbName,
})
  .then(() => console.info('[db] conectada con exito'))
  .catch((e) => console.error('[db] Error de coneccion', e));

// const listMessages = [];


const add = (message) => {
  //listMessages.push(message);
  const myMessage = new Model(message);
  myMessage.save();
}

const list = () => {
  // return listMessages;
  return Model.find();
}

module.exports = {
  add,
  list
}