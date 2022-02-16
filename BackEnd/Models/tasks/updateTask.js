const { ObjectId } = require('mongodb');
const connection = require('../connection');

module.exports = async (id, title, description, status) => (await connection())
.collection('tasks').updateOne(
  { _id: ObjectId(id) },
  { $set: { title, description, status } },
);