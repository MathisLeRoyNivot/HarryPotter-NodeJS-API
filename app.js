// Import depedencies
const http = require("http");
const { argv } = require("yargs");
const access = require("./access/access.js");

// Port argument, if nothing entered, default port is 3000
const inputPort = argv.port;
const inputGet = argv.get;
let port = inputPort && !isNaN(inputPort) && (inputPort > 0 && inputPort % 1 === 0 && inputPort < 65536) ? inputPort : 3000;

// Function and table argument, the user must enter one of the functions (get, post, delete)
// and one of the tables (characters, houses, movies)
switch (inputGet) {
  case "characters":
    access.getCharacters;
    break;
  case "houses":
    access.getHouses;
    break;
  case "movies":
    access.getMovies;
    break;
}


//Launch server on port given by the user
http.Server(access.app);
access.app.listen(port, () => {
  if (inputGet) {
    console.log(`Server is running on port : ${port}\nYou can access to the server at the following address :`,`\x1b[32m`,`http://localhost:${port}/${inputGet}`);
  } else {
    access.getHomePage;
    console.log(`Server is running on port : ${port}\nYou can access to the server at the following address :`,`\x1b[32m`,`http://localhost:${port}/`);
  }
});

let linkGet = (attributes) => {
  if (attributes === "characters") {
    var linkCharac = `http://localhost:${port}/characters`;
    document.getElementById('linkGetCharacters').href=linkCharac;
  } else if (attributes === "houses") {
    var linkHou = `http://localhost:${port}/houses`;
    document.getElementById('linkGetHouses').href=linkHou;
  } else if(attributes === "movies") {
    var linkMov = `http://localhost:${port}/movies`;
    document.getElementById('linkGetMovies').href=linkMov;
  }
};

module.exports = { linkGet };