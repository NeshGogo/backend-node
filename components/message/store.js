const Model = require('./model');

const add = (message) => {
  const myMessage = new Model(message);
  myMessage.save();
}

const list = async (filterByUser) => {
  let filter = {};
  if (filterByUser !== null) {
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
  const foundMessage = await Model.findOne({
    _id: id,
  })
  foundMessage.message = message;
  const messageUpdated = foundMessage.save()
  return messageUpdated;
}

const remove = (id) => {
  return Model.deleteOne({ _id: id });
}

module.exports = {
  add,
  list,
  update,
  remove,
}