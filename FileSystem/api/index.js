const express = require('express');
const taskRouter = require('./route/tasks');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());
const port = process.env.port || 8080;

app.use('/', taskRouter);

app.listen(port, () => { console.log(`listen to ${port}`) });