const connection = require('../connection');

module.exports = async () => (await connection()).collection('tasks').find().toArray();