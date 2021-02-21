const Model = require('./model');

const add = (message) => {
  const myMessage = new Model(message);
  myMessage.save();
}

const list = async (filterByUser, filterByChat) => {
  return new Promise((resolve, reject) => {
    const filter = buildFilter(filterByUser, filterByChat);
     // Realizando relacion
    Model.find(filter)
    .populate('user')
    .populate('chat')
    .exec((err, res) => {
      if(err){
        reject(err);
        return false;
      }
      resolve(res);
    });
  })

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

const buildFilter = (filterByUser, filterByChat) => {
  let filter = {};
  if (filterByUser !== null && filterByChat === null) {
    filter = {
      user: filterByUser
    };
  } else if(filterByUser !== null && filterByChat !== null){
    filter = {
      user: filterByUser,
      chat: filterByChat,
    };
  } else if(filterByUser === null && filterByChat !== null){
    filter = {
      chat: filterByChat,
    };
  }
  return filter;
}

module.exports = {
  add,
  list,
  update,
  remove,
}