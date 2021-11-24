const express = require('express');
const router = express.Router();

let tasks = [{ "number": "1", "name": "make lunch" }, { "number": "2", "name": "make dinner" }, { "number": "3", "name": "make breakfast" }];

router.get('/task', (req, res, next) => {
    let { taskId } = req.query;
    if (!taskId) {
        next();
    }
    const tasksList = [...tasks];

    const found = tasksList.find(item => item.number === taskId)
    if(found){
        res.status(200).json(found);
    }
    else{
        res.status(404).send('something wrong...');
    }
});

router.get('/task', (req, res) => {

    let { taskName } = req.query;
    if(!taskName){
        next();
    };
    const tasksList = [...tasks];

    const found = tasksList.find(item => item.name === taskName)
    console.log(typeof found === 'undefined')
    if(typeof found === 'undefined'){
        console.log(1);
        res.status(404).send('something wrong...');
    }
    else{
        console.log(2);
        res.status(200).json(found);
        
    }
   
});

// router.post('/task', (req, res) => {
//     let { number, name } = req.body;
//     let task = { number, name }
//     tasks.tasks.push({ task });
//     res.status(200).json(tasks);
// });

// router.get('/tasks', (req, res) => {
//     res.status(200).json(tasks);
// });

module.exports = router;