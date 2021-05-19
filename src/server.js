const express = require('express');
const cors = require('cors');
const middleware = require('./middleware');
const jsonData = require('./data');

const app = express();

const port = 5000 || process.env.IP;

app.use(cors());

app.use(middleware.decodeToken);

app.get('/api/todos', (req, res) => {
	return res.json(jsonData);
});

app.listen(port, () => {
	console.log(`Server is up and running on port ${port}`);
});
