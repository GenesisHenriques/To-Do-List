const mongoose = require('mongoose');
require('dotenv').config();

const urlConnection = process.env.URL_CONNECTION;

mongoose.Promise = global.Promise;
mongoose.connect(urlConnection).then(() => {
  console.log('Mongodb conectado...');
}).catch((err) => {
  console.log(err);
  console.log(`Houve um erro ao se connectar ao mongoDB`);
});

module.exports = mongoose;
