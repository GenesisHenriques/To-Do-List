const connection = require('../connection');

module.exports = async (data) => (await connection()).collection('tasks').insertOne(data);