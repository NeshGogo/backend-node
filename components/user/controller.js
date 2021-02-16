const store = require('./store');

const addUser = (name)=> {
  if(!name){
    return Promise.reject('invalid name');
  }

  const user = {
    name
  };

  return store.add(user);
}

module.exports = {
  addUser
}