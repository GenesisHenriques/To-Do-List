const { expect } = require('chai');
const sinon = require('sinon');

const getAllTasks = require('../../Models/tasks/getAllTasks');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const mongoConnection = require('../../Models/getConnection');

describe('Busca todos os filmes no BD', () => {
  const DBserver = new MongoMemoryServer();
  let connectionMock;

  beforeAll(async () => {
    const URLMock = await DBserver.getUri();

    connectionMock = await MongoClient.connect(URLMock, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => conn.db('to-do-list'));

    sinon.stub(mongoConnection, 'getConnection').resolves(connectionMock);
  });

  afterAll(async () => {
    await mongoConnection.getConnection.restore();
  });

  describe('Quando não existir nunhuma task cadastrada', () => {
    beforeAll(async () => {
      connectionMock.collection('tasks').deleteMany({});
    });

    it('retorna um array', async () => {
      const tasks = await getAllTasks(); // executa a model
      expect(tasks).to.be.a('array'); // espero que tasks seja um array
    });
    it('o array retornado é vazio', async () => {
      const tasks = await getAllTasks();
      expect(tasks).to.be.empty; // espero que tasks seja vazio
    });
  });

  describe('Quando existir filmes cadastrados', () => {
    beforeAll(async () => {
      connectionMock.collection('tasks').insertOne({
        title: "Projeto x",
        description: "Fazer o fronteEnd",
        status: "pendente"
      });
    });
    it('retorna um array', async () => {
      const tasks = await getAllTasks();
      expect(tasks).to.be.a('array');
    });

    it('não é um array vazio', async () => {
      const tasks = await getAllTasks();
      expect(tasks).to.be.not.empty;
    });

    it('deve ter a task cadastrada', async () => {
      const tasks = await getAllTasks.getAll();

      const [task] = tasks;

      expect(task.title).to.be.eq('Projeto x');
    });
  });
});