const Model = require('./model');

const add = (chat) => {
  const myMessage = new Model(chat);
  return myMessage.save();
}

const list = async (userId) => {
  return new Promise((resolve, reject) => {
    let filter = {};
    if (userId) {
      filter = {
        users: userId
      };
    }
    // Realizando relacion
    Model.find(filter)
    .populate('users')
    .exec((err, res) => {
      if(err){
        reject(err);
        return false;
      }
      resolve(res);
    });
  })

}

module.exports = {
  add,
  list,
}