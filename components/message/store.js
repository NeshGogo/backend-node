const listMessages = [];


const add = (message) => {
  listMessages.push(message);
}

const list =  () => {
  return listMessages;
}

module.exports = {
  add,
  list
}