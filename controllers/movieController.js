const Movie = require('../models/Movie');

const createMovie = async (req, res) => {
    const { title, director, year, genre } = req.body;

    const movie = new Movie({ title, director, year, genre });
    await movie.save();

    res.status(201).json(movie);
};

const updateMovie = async (req, res) => {
    const { id } = req.params;
    const { title, director, year, genre } = req.body;

    const updatedMovie = await Movie.findByIdAndUpdate(id, { title, director, year, genre }, { new: true });
    if (!updatedMovie) {
        return res.status(404).json({ error: 'Movie not found' });
    }

    res.status(200).json(updatedMovie);
};

const deleteMovie = async (req, res) => {
    const { id } = req.params;

    const deletedMovie = await Movie.findByIdAndDelete(id);
    if (!deletedMovie) {
        return res.status(404).json({ error: 'Movie not found' });
    }

    res.status(200).json({ message: 'Movie deleted successfully' });
};

const getMovies = async (req, res) => {
    const movies = await Movie.find();
    res.status(200).json(movies);
};

module.exports = { createMovie, updateMovie, deleteMovie, getMovies };
