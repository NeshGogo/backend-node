const store = require('./store');

const addMessage = (chat, user, message, file) => {
  return new Promise((resolve, reject) => {
    if (!chat || !user || !message) {
      console.error('[messageController] No hay datos de usuario, chat o mensaje')
      return reject('Los datos son incorrectos');
    }
    let fileUrl = '';
    if(file){
      fileUrl = `http://localhost:3000/public/files/${file.filename}`
    }
    const fullMessage = {
      chat,
      user,
      message,
      file: fileUrl,
      date: new Date(),
    }
    store.add(fullMessage);
    return resolve(fullMessage)
  })
}

const getMessages = (filterByUser, filterByChat) => {
  return store.list(filterByUser, filterByChat)
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