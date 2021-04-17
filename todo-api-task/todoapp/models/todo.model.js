const mongoose = require('mongoose')


const todoSchema = new mongoose.Schema({
    userid: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: true
    }
})

const Todo = mongoose.model('todos', todoSchema)
module.exports = { Todo }