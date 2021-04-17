const express = require("express");
const router = express.Router();
//const jwt = require("jsonwebtoken");
const { Todo } = require("../models/todo.model");
//const { User } = require("../models/user.model");
const { validateToken } = require('../middleware/validate.token.middleware')
const { TodoDto } = require("../dto/toods.dto")


//get all todos
router.get("/", async(req, res) => {
    // Get All (todos) From Database
    const Todos = await Todo.find({});


    if (!Todos) return res.status(404).json({ message: "there is no any todos" })

    const todos = []
        // get only title ad status of completed oly to vistores 
    for (let i = 0; i < Todos.length; i++) {
        todos.push(TodoDto(Todos[i]));
    }

    //return tods to the vistores
    res.json({
        todos
    });

});

//get tods of specific authorized user
router.get('/:userid', validateToken, async(req, res) => {

    //get user id from the request and from the token
    const { userid } = req.params;
    const id = req.user.id;

    //check if 
    if (userid != id) return res.status(401).json({ message: "Not Allowed" });
    //get tods of this specific user
    const todos = await Todo.find({ "userid": userid })

    if (!todos) return res.status(404).json({ message: "there is no any todos" })


    res.json({
        todos: todos
    });
})

//post new todo
router.post("/", validateToken, async(req, res) => {
    const { title } = req.body;
    // const user = await User.findOne({ name: 'abdou' })
    const todosinfo = new Todo({
        userid: req.user.id,
        title,
        completed: false
    });
    await todosinfo.save()
    todos = TodoDto(todosinfo)
    res.json(todos)
})

//ubdate todos
router.put('/', validateToken, async(req, res) => {
    const { id, completed } = req.body
    const todo = await Todo.findById(id);
    const todoUserid = todo.userid;
    const reqUserid = req.user.id;

    //check if it is the same user 
    if (todoUserid != reqUserid) return res.status(401).json({ message: "Not Allowed" });

    todo.completed = Boolean(completed)
    await todo.save()
    res.json({ todo: todo })
})

//delete todo 
router.delete('/', validateToken, async(req, res) => {
    const { id } = req.body
    const todo = await Todo.findById(id);
    const todoUserid = todo.userid;
    const reqUserid = req.user.id;

    //check if it is the same user 
    if (todoUserid != reqUserid) return res.status(401).json({ message: "Not Allowed" });

    await todo.delete()
    res.json("deleted")

})


module.exports = router;