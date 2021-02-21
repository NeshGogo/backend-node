const store = require('./store');

const addChat = (users) => {
  return new Promise((resolve, reject) => {
    if (!users || !Array.isArray(users)) {
      console.error('[ChatController] No hay datos de usuarios o el tipo de dato no es un array')
      return reject('Los datos son incorrectos');
    }
    const chat = {
      users,
    }
    return store.add(chat);
  })
}

const getChats = (userId) => {
  return store.list(userId);
}


module.exports = {
  addChat,
  getChats,
}