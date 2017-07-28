const express = require('express');
const router = express.Router();
const Todo = require('../models/toDoModels')

router.get('/', (req, res) => {
    Todo.find({}, (err, results) => {
        if (err) console.log(err);
        else res.send(results);
    })
});
router.get('/todos/:username', (req, res) => {
    Todo.find({ name: req.params.username }, (err, results) => {
        if (err) console.log(err)
        else res.json(results);
    });
})

router.get('/todo/:id', (req, res) => {
    Todo.findById({ _id: req.params.id }, (err, results) => {
        if (err) console.log(err);
        else res.json(results);
    })
})
router.post('/todo', (req, res) => {
    if (req.body.id) {
        Todo.findByIdAndUpdate(req.body.id, {
            toDo: req.body.todo,
            isDone: req.body.isdone,
            file: req.body.file,
        }, (err) => {
            if (err) console.log(err)
        })
    } else {
        var newToDo = Todo({
            name: req.body.name,
            toDo: req.body.todo,
            isDone: req.body.isdone,
            file: req.body.file,
        })
        newToDo.save(newToDo, err => {
            if (err) console.log(err)
        });
    }
    res.send('Your todo has been saved!')
})
router.delete('/todo', (req, res)=>{
    Todo.findByIdAndRemove(req.body.id, err =>{
        if(err) throw err;
        else res.send('You have successfully deleted your todo')
    })
})
module.exports = router;