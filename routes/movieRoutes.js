const express = require('express');
const { createMovie, updateMovie, deleteMovie, getMovies } = require('../controllers/movieController');
const authenticate = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', getMovies);
router.post('/', authenticate, createMovie);
router.put('/:id', authenticate, updateMovie);
router.delete('/:id', authenticate, deleteMovie);

module.exports = router;
