// Import depedencies
const http = require("http");
const { argv } = require("yargs");
const controller = require("./access/accesss.js");

// Port argument, if nothing entered, default port is 3000
const inputPort = argv.port;
const port =
  inputPort && !isNaN(inputPort) && (inputPort > 0 && inputPort % 1 == 0)
    ? inputPort
    : 3000;

// Function and table argument, the user must enter one of the functions (get, post, delete)
// and one of the tables (characters, houses, movies)
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

//Launch server on port given by the user

http.Server(app);

app.listen(port, () => {
    console.log(`Server is running on port : ${port} \n You can access to the server at the following address : http://localhost:${port}`);
});

module.exports = {};
