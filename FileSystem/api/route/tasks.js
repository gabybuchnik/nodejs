const express = require('express');
const router = express.Router();

let tasks = { tasks: [{ "number": "1", "name": "make lunch" }, { "number": "2", "name": "make dinner" }, { "number": "3", "name": "make breakfast" }] };

router.get('/task', (req, res, next) => {
    let { taskId } = req.query;
    if (!taskId) {
        next();
    }
    const tasksList = { ...tasks.tasks };
    for (let index in tasksList) {
        if (tasksList[index].number === taskId) {
            res.status(200).json(tasksList[index]);
        }
    }
});

router.get('/task', (req, res) => {
    let { taskName } = req.query;
    const tasksList = { ...tasks.tasks };
    for (let index in tasksList) {
        if (tasksList[index].name === taskName) {
            res.status(200).json(tasksList[index]);
        }
    }
});

router.post('/task', (req, res) => {
    let { number, name } = req.body;
    let task = { number, name }
    tasks.tasks.push({ task });
    res.status(200).json(tasks);
});

router.get('/tasks', (req, res) => {
    res.status(200).json(tasks);
});

module.exports = router;