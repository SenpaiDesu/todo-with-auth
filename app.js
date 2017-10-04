const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const todoAPI = require('./todo-module');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: 'true' }));
app.use('/api/todos', todoAPI);

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

module.exports = app;
