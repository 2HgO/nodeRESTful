// index.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const apiRoutes = require('./api-routes');

const app = express();

app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/resthub', { useNewUrlParser: true });

let db = mongoose.connection
if (!db) {
    console.error('Error connecting to db');
} else {
    console.log('Connected to db');
}

const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello World with express and nodemon'));
app.use('/api', apiRoutes);

app.listen(port, () => console.log(`Running Resthub on port ${ port }`));