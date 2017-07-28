const Todo = require('./models/toDoModels')

module.exports = function () {

    Todo.remove({}, (err) => {
        if (err) console.log(err)
    });
    var seeds = [
        {
            name: 'Shmerel',
            toDo: 'Learn',
            isDone: false,
            file: false,

        },
        {
            name: 'Jake',
            toDo: 'Eat',
            isDone: false,
            file: false,

        },
        {
            name: 'George',
            toDo: 'Sleep',
            isDone: false,
            file: false,

        },
        {
            name: 'Getzel',
            toDo: 'Es Gala',
            isDone: false,
            file: false,

        },
        {
            name: 'Chaim Yankel',
            toDo: 'Make the Cholent',
            isDone: false,
            file: false,
        }
    ]
    Todo.create(seeds, (err) => {
        if (err) console.log(err)
    })
}