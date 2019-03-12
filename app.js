// Import depedencies
const express = require('express');
const http = require('http');
// const url = require('url');
const { argv } = require('yargs');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongoose');

// Import models
const { mongoose } = require('./db/db');
const { Character } = require('./models/characters');
const { House } = require('./models/houses');
const { Movie } = require('./models/movies');

const app = express();
app.use(bodyParser.json());

const inputPort = argv._[0];
const port = (inputPort && !isNaN(inputPort) && (inputPort > 0 && inputPort % 1 == 0)) ? inputPort : 3000;

http.Server(app);

console.log(`Server is running on port : ${port} \n You can access to the server at the following address : http://localhost:${port}`);
app.listen(port);