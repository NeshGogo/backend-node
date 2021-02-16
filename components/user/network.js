const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.post('/', (req, res) => {
  controller.addUser(req.body.name)
    .then(data => response.success(req, res, data, 200)
    )
    .catch(e => response.error(req, res, 'Internal Error', 500, e))
})

router.get('/', (req, res) => {
  controller.getUsers()
    .then(data => response.success(req, res, data, 200)
    )
    .catch(e => response.error(req, res, 'Internal Error', 500, e))
})

router.patch('/:id', (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  controller.updateUser(id,name)
    .then(data => response.success(req, res, data, 200)
    )
    .catch(e => response.error(req, res, 'Internal Error', 500, e))
})

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  controller.removeUser(id)
    .then(data => response.success(req, res, data, 200)
    )
    .catch(e => response.error(req, res, 'Internal Error', 500, e))
})

module.exports = router;