const sinon = require('sinon');
const { expect } = require('chai');

const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

// const { getConnection } = require('./mongoMockConnection');

const tasksModel = require('../../Models/tasks/index');

describe('Busca todos os filmes no BD', () => {
  console.log('fooi');
  // Fazendo o mock de um BD
  const DBServer = new MongoMemoryServer(); // Inicia um BD na memoria do PC

  before(async () => {
    const urlMock = await DBServer.getUri();
    const connectionMock = MongoClient.connect(
      urlMock,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    sinon.stub(MongoClient, 'connect')
    .resolves(connectionMock); // A função connect vai resolver para o meu connectionMock
    // Quando chegar na connect, o programa vai executar a minha connectionMock
  });

  after(async () => {
    MongoClient.connect.restore();
    await DBServer.stop();
  });

  describe('Quando não tem nunhuma task cadastrada', () => {
    it('retorna um array', async () => {
      const tasks = await tasksModel.getAllTasks(); // executa a model
      expect(tasks).to.be.an('array') // espero que tasks seja um array
    });
    it('o array retornado é vazio', async () => {
      const tasks = await tasksModel.getAllTasks();
      expect(tasks).to.be.empty; // espero que tasks seja vazio
    });
  });
});