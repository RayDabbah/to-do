const Todo = require('./models/toDoModels')

module.exports = function (app) {
    app.get('/', (req, res) => {
        Todo.remove({}, (err, response)=>{
            console.log(response)
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
        ]
        Todo.create(seeds, (err, response) => {
            res.send(response)
        })
    })
}