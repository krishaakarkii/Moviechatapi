const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    director: { type: String, required: true },
    year: { type: Number, required: true, min: 1900, max: 2100 },
    genre: { type: String },
});

module.exports = mongoose.model('Movie', movieSchema);
