/* eslint-disable no-console */
const express = require('express');

const routes = express.Router();

routes.post('/users', (request, response) => {
  const { body } = request;

  console.log(body);

  return response.json({
    name: 'Lucas',
    actionNow: 'estudando',
  });
});

module.exports = routes;
