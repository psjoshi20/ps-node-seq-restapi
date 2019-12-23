const todosController = require('../controllers/todos.js');

module.exports = app => {
	app.get('/api', (req, res) =>
		res.status(200).send({
			message: 'Create Your Own Todo Lists API'
		})
	);

	app.post('/api/todos', todosController.create);
};