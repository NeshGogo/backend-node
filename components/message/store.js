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

const list = async (filterByUser) => {
  let filter = {};
  if(filterByUser !== null){
    filter = {
      // por coincidencia.
      //user: new RegExp(filterByUser,'i')
      user: filterByUser
     };
  }
  const messages = await Model.find(filter);
  return messages
}

const update = async (id, message) => {
  const foundMessage  = await Model.findOne({
    _id: id,
  })
  foundMessage.message = message;
  const messageUpdated = foundMessage.save()
  return messageUpdated;
}

const remove = (id) => {
  return Model.deleteOne({_id: id});
}

module.exports = {
  add,
  list,
  update,
  remove,
}