const express = require('express');
const router = express.Router();
const db = require('../models');

// GET /pokemon - return a page with favorited Pokemon
router.get('/', function(req, res) {
  // TODO: Get all records from the DB and render to view

  // 1.1 Model Association, notice no " ' ' " around `pokemon`
  db.pokemon.findAll()
  .then( pokemons => {
    res.render('/pokemon', )
  })
  .catch();


  res.render('/pokemon')
});

router.get('/:name', function(req, res) {
  // TODO: Get all records from the DB and render to view
  
  console.log(`🦄: req.params`, req.params.name);
});

// POST /pokemon - receive the name of a pokemon and add it to the database
router.post('/', function(req, res) {
  // Reference database

  db.pokemon.findOrCreate()
  .then( pokemons => {
    res.render('/pokemon', )
  })
  .catch();

  // TODO: Get form data and add a new record to DB
  res.send(req.body);
});

module.exports = router;
