const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient } = require('mongodb');

const createTask = require('../../Models/tasks/createTask');
const { getConnection, stopConnection } = require('./mongoMockConnection');

let connectionMock;
describe('Insere uma nova tarefa no BD', () => {
  const payloadMovie = {
    "title": "aaa",
    "description": "bbb",
    "status": "ccc",
  };


  beforeEach(async () => {
    connectionMock = await getConnection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

  afterEach(async () => {
    connectionMock = await stopConnection();
    MongoClient.connect.restore();
    await stopConnection();

    // connectionMock.db('to-do_list').collection('tasks').drop();
    // await MongoClient.connect.restore();
  });

  describe('quando é inserido com sucesso', () => {
    it('retorna um objeto', async () => {
      const response = await createTask(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" da nova tarefa inserida', async () => {
      const response = await createTask(payloadMovie);

      expect(response).to.have.a.property('id')
    });
  });
});
