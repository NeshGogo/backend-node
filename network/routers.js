// const express = require('express');
// const router = require('../components/message/network');
const message =  require('../components/message/network');

const routes = (server) => {
  server.use('/message', message);
}

module.exports = routes;