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

const getUsers = ()=> {
  return store.list();
}

const updateUser = (id, name)=> {
  if(!name || !id){
    return Promise.reject('miss name or id');
  }
  return store.update(id, name);
}

const removeUser = (id) => {
  if(!id){
    return Promise.reject('missid');
  }
  return store.remove(id);
}

module.exports = {
  addUser,
  removeUser,
  getUsers,
  updateUser,
}