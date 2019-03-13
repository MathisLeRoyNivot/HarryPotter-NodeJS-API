// Import depedencies
const express = require("express");
const http = require("http");
// const url = require('url');
const { argv } = require("yargs");
const bodyParser = require("body-parser");
const { ObjectID } = require("mongoose");

// Import db
const { mongoose } = require("./db/db");
// Import controller
const controller = require("./controller/controller.js");

const inputPort = argv.port;
const port =
  inputPort && !isNaN(inputPort) && (inputPort > 0 && inputPort % 1 == 0)
    ? inputPort
    : 3000;

const inputFct = argv.fct;
const inputTable = argv.table;
switch (inputFct) {
  case "get":
    switch (inputTable) {
      case "characters":
        controller.getCharacters;
        break;
      case "houses":
        controller.getHouses;
        break;
      case "movies":
        controller.getMovies;
        break;
      default:
        console.log("You must enter 'characters', 'houses' or 'movies'.");
    }
    break;
  case "post":
    switch (inputTable) {
      case "characters":
        controller.postCharacters;
        break;
      case "houses":
        controller.postHouses;
        break;
      case "movies":
        controller.postMovies;
        break;
      default:
        console.log("You must enter 'characters', 'houses' or 'movies'.");
    }
    break;
  case "delete":
    switch (inputTable) {
      case "characters":
        controller.deleteCharacter;
        break;
      case "houses":
        controller.deleteHouse;
        break;
      case "movies":
        controller.deleteMovie;
        break;
      default:
        console.log("You must enter 'characters', 'houses' or 'movies'.");
    }
    break;
  default:
    console.log("You must enter 'get', 'post' or 'delete'.");
}

http.Server(app);

console.log(
  `Server is running on port : ${port} \n You can access to the server at the following address : http://localhost:${port}`
);
app.listen(port);

module.exports = {};
