const express = require('express');

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

const tasks = require('./Controllers/Tasks/router');
const error = require('./Middleware/error');

app.use('/tasks', tasks);

app.use(error);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));