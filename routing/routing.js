const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const { Character } = require('../models/characters');
const { House } = require('../models/houses');
const { Movie } = require('../models/movies');

const app = express();
app.use(bodyParser.json());

// --- STYLES DIRECTORY IMPORTATION ---
const styles = path.join(__dirname, '../' + 'styles');
app.use(express.static(styles));

const ObjectId = mongoose.Types.ObjectId;

// --------- GET METHODS ---------

// Generating the home page
const getHomePage = app.get('/', (req, res) => {
  const homePage = path.join(__dirname, '../' + 'index.html');
  res.sendFile(homePage);
});

// Characters
const getCharacters = app.get('/api/characters', (req, res) => {
  Character.find().then(characterList => {
    res.json(characterList);
  }, err => {
    res.status(500).send(err);
  });
});

// Houses
const getHouses = app.get('/api/houses', (req, res) => {
  House.find().then(houseList => {
    res.json(houseList);
  }, err => {
    res.status(500).send(err);
  });
});

// Movies
const getMovies = app.get('/api/movies', (req, res) => {
  Movie.find().then(movieList => {
    res.json(movieList);
  }, err => {
    res.status(500).send(err);
  });
});





// --------- POST METHODS ---------
// Characters
const postCharacters = app.post('/api/characters', (req, res) => {
  const newCharacter = new Character({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    house: req.body.house,
    movies: req.body.movies
  });
  newCharacter.save().then(character => {
    res.send(character);
    console.log(character);
  }).catch(err => {
    res.status(500).send(err);
  });
});

// Houses
const postHouses = app.post('/api/houses', (req, res) => {
  const newHouse = new House({
    name: req.body.name,
    colors: req.body.colors,
    animal: req.body.animal,
    trait: req.body.trait,
    head: req.body.head,
    ghost: req.body.ghost,
    commom_room: req.body.commom_room
  });
  newHouse.save().then(house => {
    res.send(house);
    console.log(house);
  }).catch(err => {
    res.status(500).send(err);
  });
});

// Movies
const postMovies = app.post('/api/movies', (req, res) => {
  const newMovie = new Movie({
    title: req.body.title,
    director: req.body.director,
    release_date: req.body.release_date
  });
  newMovie.save().then(movie => {
    res.send(movie);
    console.log(movie);
  }).catch(err => {
    res.status(500).send(err);
  });
});





// --------- DELETE METHODS ---------
// Characters
const deleteCharacter = app.delete('/api/characters/:id', (req, res) => {
  const id = req.params.id;
  if (!ObjectId.isValid(id)) {
    res.status(404).send();
  } else {
    Character.findByIdAndRemove(id).then(character => {
      if (!character) {
        res.status(404).send();
      } else {
        res.send('This item has been deleted');
      };
    }).catch(err => {
      res.status(500).send(err);
    });
  };
});

// Houses
const deleteHouse = app.delete('/api/houses/:id', (req, res) => {
  const id = req.params.id;
  if (!ObjectId.isValid(id)) {
    res.status(404).send();
  } else {
    House.findByIdAndRemove(id).then(house => {
      if (!house) {
        res.status(404).send();
      } else {
        res.send('This item has been deleted');
      };
    }).catch(err => {
      res.status(500).send(err);
    });
  };
});

// Movies
const deleteMovie = app.delete('/api/movies/:id', (req, res) => {
  const id = req.params.id;
  if (!ObjectId.isValid(id)) {
    res.status(404).send();
  } else {
    Movie.findByIdAndRemove(id).then(movies => {
      if (!movies) {
        res.status(404).send();
      } else {
        res.send('This item has been deleted');
      };
    }).catch(err => {
      res.status(500).send(err);
    });
  };
});


// --------- PUT METHODS ---------
// Characters
const putCharacter = app.put('/api/characters/:id', function (req, res) {
  const id = req.params.id;
  const editedData = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    house: req.body.house,
    movies: req.body.movies
  };
  if (!ObjectId.isValid(id)) {
    res.status(404).send();
  } else {
    Character.findByIdAndUpdate(id, editedData).then(character => {
      if (!character) {
        res.status(404).send();
      } else {
        res.send(character);
      };
    }).catch(err => {
      res.status(500).send(err);
    });
  };
});

// Houses
const putHouse = app.put('/api/houses/:id', function (req, res) {
  const id = req.params.id;
  const editedData = {
    name: req.body.name,
    colors: req.body.colors,
    animal: req.body.animal,
    trait: req.body.trait,
    head: req.body.head,
    ghost: req.body.ghost,
    commom_room: req.body.commom_room
  };
  if (!ObjectId.isValid(id)) {
    res.status(404).send();
  } else {
    House.findByIdAndUpdate(id, editedData).then(house => {
      if (!house) {
        res.status(404).send();
      } else {
        res.send(house);
      };
    }).catch(err => {
      res.status(500).send(err);
    });
  };
});

// Movies
const putMovie = app.put('/api/movies/:id', function (req, res) {
  const id = req.params.id;
  const editedData = {
    title: req.body.title,
    director: req.body.director,
    release_date: req.body.release_date
  };
  if (!ObjectId.isValid(id)) {
    res.status(404).send();
  } else {
    Movie.findByIdAndUpdate(id, editedData).then(movie => {
      if (!movie) {
        res.status(404).send();
      } else {
        res.send(movie);
      };
    }).catch(err => {
      res.status(500).send(err);
    });
  };
});

// --------- EXPORTING PREVIOUS MODULES ---------
module.exports = {
  getHomePage,
  getCharacters,
  getHouses,
  getMovies,
  postCharacters,
  postHouses,
  postMovies,
  deleteCharacter,
  deleteHouse,
  deleteMovie,
  putCharacter,
  putMovie,
  putHouse,
  app
};