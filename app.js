const express = require('express');
const app = express();
const PORT = 4000;

app.use(express.json());

app.use(
		express.urlencoded({
		extended: true
	})
);

 app.get('/', (req, res) => {
     	res.json({ message : 'web message -REST API with Node.js, and Postgres API' });
    });
require('./routes/index')(app); // hook the routes inside app.js file

app.listen(PORT, () => {
	console.log(`Server running at port ${PORT}.`);
});

module.exports = app;

