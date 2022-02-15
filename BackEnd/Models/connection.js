const { MongoClient } = require('mongodb');

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

require('dotenv').config();

let db = null;

const connection = () =>
    (db
      ? Promise.resolve(db)
      : MongoClient.connect(process.env.URL_CONNECTION, OPTIONS)
      .then((conn) => {
      db = conn.db('to-do_list');
      return db;
      })
      .catch((err) => console.log(`Erro ao conectar com o banco: ${err}`))
    );

module.exports = connection;