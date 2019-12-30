//You are going to create your first controller for todos inside a new directory and file controllers/todos.js.
 //We start by requiring the todos model.
// Then, we are exporting the controller function inside which create function exists. This function will handle the business logic behind the route handler that we are going to define soon for creating a new todo in our database. It accepts two parameters, req for incoming requests and res to send the response back to an individual incoming request. On success, .then() function will trigger and send back the todo item with an HTTP status of 201. If an error is encountered, .catch will return the error with an HTTP status of 400.

const Todo = require('../models').Todo;
const TodoItem = require('../models').TodoItem;

// create a new todo
module.exports = {
	create(req, res) {
		return Todo.create({
			title: req.body.title
        })
        .then(todo => res.status(201).send(todo))
		 .catch(error => res.status(400).send(error));
	},
// for this create new route 
// in routes/index.js app.get('/api/todos', todosController.list);
// list(req, res) {
//     return Todo.all()
//        .then(todos => res.status(201).send(todos))
//        .catch(error => res.status(400).send(error));
// },
list(req, res) {
    return Todo.findAll({
        include: [
            {
                model: TodoItem,
                as: 'todoItems'
            }
        ]
    })
        .then(todos => res.status(201).send(todos))
        .catch(error => res.status(400).send(error));
},

//app.delete('/api/todos/:todoId', todosController.destroy);
destroy(req, res) {
    return Todo.findById(req.params.todoId)
        .then(todo => {
            if (!todo) {
                return res.status(400).send({
                    message: 'Todo List not found'
                });
            }
            return todo
                .destroy()
                res.status(200).send({ message: 'Todo List deleted Successfully' })
                .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
}
};

// above controller is requres in routes/index.js