const { mongoose } = require('../db/db');

const Movie = mongoose.model('movies', {
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    director: {
        type: String,
        minlength: 1,
        trim: true
    },
    release_date: {
        type: Number,
        minlength: 1,
        trim: true
    }
});

module.exports = { Movie };