const Model = require('./model');

const add = (user) => {
  const myUser = new Model(user);
  return myUser.save();
}

module.exports = {
  add,
}