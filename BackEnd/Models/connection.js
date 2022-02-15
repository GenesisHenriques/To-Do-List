const { MongoClient } = require('mongodb');

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

require('dotenv').config();

const user = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

console.log(user, password);

const MONGO_DB_URL = `mongodb+srv://${user}:${password}@cluster0.sej92.mongodb.net/test`;

let db = null;

const connection = () => {
    return db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS)
    .then((conn) => {
    db = conn.db('model_example');
    return db;
    })
};

module.exports = connection;