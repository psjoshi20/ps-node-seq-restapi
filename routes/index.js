// bring controller form controllers folder
const todosController = require('../controllers/todos.js');
const todoItemsController = require('../controllers/todoitem.js');
// two routes - 
// '/api' route- displays welcome messgae
module.exports = app => {
	app.get('/api', (req, res) =>
		res.status(200).send({
			message: 'Create Your Own Todo Lists API'
		})
	);
// app.post('/api/todos) where the request for creating a new to-do list can be send. 
	app.post('/api/todos', todosController.create);
    app.get('/api/todos', todosController.list);
    app.post('/api/todos/:todoId/items', todoItemsController.create);
    app.delete('/api/todos/:todoId', todosController.destroy);
};

// there is still some error 
// todos table contents are displyed
