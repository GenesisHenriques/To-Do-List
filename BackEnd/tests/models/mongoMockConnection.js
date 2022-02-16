const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

let DBServer;
const OPTION = { useNewUrlParser: true, useUnifiedTopology: true };

const getConnection = async () => {
  DBServer = await MongoMemoryServer.create();
  const URLMock = DBServer.getUri();
  return MongoClient.connect(URLMock, OPTION)
}

const stopConnection = async () => (await DBServer).stop();

module.exports = { getConnection, stopConnection };