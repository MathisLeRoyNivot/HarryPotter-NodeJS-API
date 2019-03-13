const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

const { Character } = require('./models/characters');
const { House } = require('./models/houses');
const { Movie } = require('./models/movies');

const app = express();
app.use(bodyParser.json());

app.get('/characters', (req, res) => {
    Character.find().then(characterList => {
        
    }, err => {
        res.status(500).send(err);
    })
})

app.get('/houses', (req, res) => {
    House.find().then(houseList => {

    }, err => {
        res.status(500).send(err);
    })
})

app.get('/movies', (req, res) => {
    Movie.find().then(movieList => {

    }, err => {
        res.status(500).send(err);
    })
})
