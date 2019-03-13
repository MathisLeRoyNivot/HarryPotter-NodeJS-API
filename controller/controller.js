const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

const { Character } = require('./models/characters');
const { House } = require('./models/houses');
const { Movie } = require('./models/movies');

const app = express();
app.use(bodyParser.json());


// --------- GET METHODS ---------
// Characters
const getCharacters = app.get('/characters', (req, res) => {
    Character.find().then(characterList => {
        res.json(characterList);
    }, err => {
        res.status(500).send(err);
    })
})

// Houses
const getHouses = app.get('/houses', (req, res) => {
    House.find().then(houseList => {
        res.json(houseList);
    }, err => {
        res.status(500).send(err);
    })
})

// Movies
const getMovies = app.get('/movies', (req, res) => {
    Movie.find().then(movieList => {
        res.json(movieList);
    }, err => {
        res.status(500).send(err);
    })
})





// --------- POST METHODS ---------
// Characters
const postCharacters = app.post('/characters', (req, res) => {
    const newCharacter = new Character({
        text: req.body.text
    });
    newCharacter.save().then(character => {
        res.send(character);
        console.log(character);
    }).catch(err => {
        res.status(500).send(err);
    });
})

// Houses
const postHouses = app.post('/houses', (req, res) => {
    const newHouse = new House({
        text: req.body.text
    });
    newHouse.save().then(character => {
        res.send(house);
        console.log(house);
    }).catch(err => {
        res.status(500).send(err);
    });
})

// Movies
const postMovies = app.post('/movies', (req, res) => {
    const newMovie = new Character({
        text: req.body.text
    });
    newMovie.save().then(movie => {
        res.send(movie);
        console.log(movie);
    }).catch(err => {
        res.status(500).send(err);
    });
})





// --------- DELETE METHODS ---------
// Characters
const deleteCharacter = app.delete('/characters/:id', (req, res) => {
    const { id } = req.params;
    if (!ObjectID.isValid(id)) {
        res.status(404).send();
    } else {
        Character.findByIdAndRemove(id).then(character => {
            if (!character) {
                res.status(404).send();
            } else {
                res.send(character);
            }
        }).catch(err => {
            res.status(500).send(err);
        });
    }
});

// Houses
const deleteHouse = app.delete('/houses/:id', (req, res) => {
    const { id } = req.params;
    if (!ObjectID.isValid(id)) {
        res.status(404).send();
    } else {
        House.findByIdAndRemove(id).then(house => {
            if (!house) {
                res.status(404).send();
            } else {
                res.send(house);
            }
        }).catch(err => {
            res.status(500).send(err);
        });
    }
});

// Movies
const deleteMovie = app.delete('/movies/:id', (req, res) => {
    const { id } = req.params;
    if (!ObjectID.isValid(id)) {
        res.status(404).send();
    } else {
        Todo.findByIdAndRemove(id).then(movie => {
            if (!movie) {
                res.status(404).send();
            } else {
                res.send(movie);
            }
        }).catch(err => {
            res.status(500).send(err);
        });
    }
});





// --------- PUT METHODS ---------

module.exports = {
    getCharacters,
    getHouses,
    getMovies,
    postCharacters,
    postHouses,
    postMovies,
    deleteCharacter,
    deleteHouse,
    deleteMovie
}