const { mongoose } = require('../db/db');

const Character = mongoose.model('characters', {
    firstname: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    house: {
        type: String,
        minlength: 1,
        trim: true
    },
    movies: {
        type: [movie],
        minlength: 1,
        trim: true
    }
})

module.exports = { Character };