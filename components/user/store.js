const Model = require('./model');


const add = (user) => {
  const myUser = new Model(user);
  return myUser.save();
}

const list = () => {
  return Model.find();
}

const update = async (id, name) => {
  const foundUser= await Model.findOne({
    _id: id,
  })
  foundUser.name = name;
  return foundUser.save();
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