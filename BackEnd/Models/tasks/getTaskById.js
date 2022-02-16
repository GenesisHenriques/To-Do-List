const { ObjectId } = require('mongodb');
const connection = require('../connection');

module.exports = async (id) => (await connection())
.collection('tasks').find(ObjectId(id)).toArray();