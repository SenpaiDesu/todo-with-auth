const app = require('./app');
const mongoose = require('mongoose');
const { PORT, DB_CONNECTION_STRING } = require('./config');

mongoose.Promise = global.Promise;

mongoose.connect(DB_CONNECTION_STRING, { useMongoClient: true }, err => {
  if (!err) {
    console.log('connected to the database');
    app.listen(PORT, err => {
      if (!err) console.log(`server listening on port ${PORT}`);
    });
  }
});




