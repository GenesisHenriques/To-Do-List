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

// Model - tasks
// Definindo o model
const taskSchema = mongoose.Schema({
  title: { type: String, require: true },
  description: { type: String },
  status: { type: String, require: true, default: 'pendente' },
});

// Connectando a colection com o model
mongoose.model('Tasks', taskSchema);

const task = mongoose.model('Tasks');

// Adicionar um novo usuario
new task({
  title: 'Terminar algo hoje',
  description: 'Termina pelo menos a organização basica do projeto hj',
}).save()
.then(() => {
  console.log('Tarefa cadastrada com sucesso');
})
.catch((err) => {
  console.log('Deu error', err);
});