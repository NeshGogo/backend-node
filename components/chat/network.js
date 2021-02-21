const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');

const router = express.Router();

router.get('/:userId', (req, res) => {
  const userId = req.params.userId || null;
  controller.getChats(userId)
    .then((messages) => {
      response.success(req, res, messages, 200);
    })
    .catch((error) => {
      response.error(req, res, 'Unexpected Error', 500, error);
    })
})

router.post('/', (req, res) => {
  const body = req.body;
  controller.addChat(body.users)
    .then((chat) => {
      response.success(req, res, chat, 201);
    })
    .catch((error) => {
      response.error(req, res, error, 500);
    })
})

module.exports = router;