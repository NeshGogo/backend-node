const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const multer = require('multer');

const router = express.Router();
const upload = multer({
  dest: 'public/files/',
});

router.get('/', (req, res) => {
  const filterByUser = req.query.user || null;
  const filterByChat = req.query.chat || null;
  controller.getMessages(filterByUser, filterByChat)
    .then((messages) => {
      response.success(req, res, messages, 200);
    })
    .catch((error) => {
      response.error(req, res, 'Unexpected Error', 500, error);
    })
})

router.post('/', upload.single('file'), (req, res) => {
  const body = req.body;
  controller.addMessage(body.chat, body.user, body.message, req.file)
    .then((fullMessage) => {
      response.success(req, res, fullMessage, 201);
    })
    .catch((error) => {
      response.error(req, res, error, 500);
    })
})

router.patch('/:id', (req, res) => {
  const id = req.params.id;
  const message = req.body.message;
  controller.updateMessage(id, message)
    .then(data => response.success(req, res, data, 200))
    .catch(e => response.error(req, res, 'Internal error', 500, e))
})

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  controller.deleteMessage(id)
    .then(() => response.success(req, res, `message ${id} deleted!`, 200))
    .catch((e) => response.error(req, res, 'Internal error', 500, e))
})

module.exports = router;