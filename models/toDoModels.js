const mongoose = require('mongoose');


const toDoSchema = new mongoose.Schema({
    name: String,
    toDo: String,
    isDone: Boolean,
    file: Boolean,
})

module.exports = mongoose.model('todos', toDoSchema)