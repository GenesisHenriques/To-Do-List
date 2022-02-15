const connection = require('../getConnection');

module.exports = async () => (await connection()).collection('tasks').find().toArray();