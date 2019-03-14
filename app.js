// Import depedencies
const http = require("http");
const { argv } = require("yargs");
const routing = require("./routing/routing.js");

// Port argument, if nothing entered, default port is 3000
const inputPort = argv.port;
const inputGet = argv.get;
let port = inputPort && !isNaN(inputPort) && (inputPort > 0 && inputPort % 1 === 0 && inputPort < 65536) ? inputPort : 3000;

// Function and table argument, the user must enter one of the functions (get, post, delete)
// and one of the tables (characters, houses, movies)
switch (inputGet) {
  case "characters":
    routing.getCharacters;
    break;
  case "houses":
    routing.getHouses;
    break;
  case "movies":
    routing.getMovies;
    break;
}


//Launch server on port given by the user
http.Server(routing.app);
const launchRouting = (inputGet, callback) => {
  routing.app.listen(port, () => {
    if (inputGet) {
      callback(`Server is running on port : ${port}\nYou can routing to the server at the following address :\x1b[32m http://localhost:${port}/${inputGet}`);
    } else {
      routing.getHomePage;
      callback(`Server is running on port : ${port}\nYou can routing to the server at the following address : \x1b[32m http://localhost:${port}/`);
    }
  });

};



launchRouting(inputGet, (err, logPort) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log(logPort);
  }
});

module.exports = {};