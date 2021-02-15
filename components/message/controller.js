const store = require('./store');

const addMessage = (user, message) => {
  return new Promise( (resolve, reject) => {
    if(!user || !message){
      console.error('[messageController] No hay datos de usuario o mensaje')
      return reject('Los datos son incorrectos');
    }
    const fullMessage = {
      user,
      message,
      date: new Date(),
    }
    store.add(fullMessage);
    return  resolve(fullMessage)
  })
}

const getMessages = () => {
  return new Promise(( resolve, reject) => {
    resolve(store.list())
  })
}

module.exports = {
  addMessage,
  getMessages,
}