// Import depedencies
const express = require('express');
const http = require('http');
// const url = require('url');
const { argv } = require('yargs');
const { ObjectID } = require('mongoose');

// Import db
const { mongoose } = require('./db/db');

const inputPort = argv._[0];
const port = (inputPort && !isNaN(inputPort) && (inputPort > 0 && inputPort % 1 == 0)) ? inputPort : 3000;

http.Server(app);

console.log(`Server is running on port : ${port} \n You can access to the server at the following address : http://localhost:${port}`);
app.listen(port);

module.exports = {  }