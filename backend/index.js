/* eslint-disable no-console */
const express = require('express');

const app = express();
app.use(express.json());

app.post('/users', (request, response) => {
  const { body } = request;

  console.log(body);

  return response.json({
    name: 'Lucas',
    actionNow: 'estudando',
  });
});


app.listen(3333);
