const store = require('./store');

const addMessage = (user, message) => {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.error('[messageController] No hay datos de usuario o mensaje')
      return reject('Los datos son incorrectos');
    }
    const fullMessage = {
      user,
      message,
      date: new Date(),
    }
    store.add(fullMessage);
    return resolve(fullMessage)
  })
}

const getMessages = (filterByUser) => {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterByUser))
  })
}

const updateMessage = (id, message) => {
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      reject('Invalid data');
      return false
    }
    console.log(message);
    const result = await store.update(id, message);
    resolve(result)
  })
}
const deleteMessage = (id) => {
  if(!id){
    return Promise.reject('Invalid data');
  }
  return store.remove(id);
}

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage,
}