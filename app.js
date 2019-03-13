// Import depedencies
const http = require("http");
const { argv } = require("yargs");
const access = require("./access/access.js");

// Port argument, if nothing entered, default port is 3000
const inputPort = argv.port;
const inputFct = argv.fct;
const inputTable = argv.table;
let port = (inputPort && !isNaN(inputPort) && (inputPort > 0 && inputPort % 1 === 0 && inputPort < 65536)) ? inputPort : 3000;

// Function and table argument, the user must enter one of the functions (get, post, delete)
// and one of the tables (characters, houses, movies)
switch (inputFct) {
  case "get":
    switch (inputTable) {
      case "characters":
        access.getCharacters;
        break;
      case "houses":
        access.getHouses;
        break;
      case "movies":
        access.getMovies;
        break;
      default:
        console.log("You must enter 'characters', 'houses' or 'movies'.");
    }
    break;
  case "post":
    switch (inputTable) {
      case "characters":
        access.postCharacters;
        break;
      case "houses":
        access.postHouses;
        break;
      case "movies":
        access.postMovies;
        break;
      default:
        console.log("You must enter 'characters', 'houses' or 'movies'.");
    }
    break;
  case "delete":
    switch (inputTable) {
      case "characters":
        access.deleteCharacter;
        break;
      case "houses":
        access.deleteHouse;
        break;
      case "movies":
        access.deleteMovie;
        break;
      default:
        console.log("You must enter 'characters', 'houses' or 'movies'.");
    }
    break;
  default:
    console.log("You must enter 'get', 'post' or 'delete'.");
}

//Launch server on port given by the user

http.Server(access.app);

access.app.listen(port, () => {
  console.log(`Server is running on port : ${port} \n You can access to the server at the following address : http://localhost:${port}/${inputTable}`);
});

module.exports = {};