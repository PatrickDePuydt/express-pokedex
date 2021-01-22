const express = require('express');
const router = express.Router();
const db = require('../models');

// GET /pokemon - return a page with favorited Pokemon
router.get('/', function(req, res) {

  // 1.1 Model Association, notice no " ' ' " around `pokemon`
  db.pokemon.findAll()
  .then( pokemons => {
    res.render('pokemon/index', pokemons)
  })
  .catch(error => console.log(`❌ Error`, error));
});

router.get('/:name', function(req, res) {
  // TODO: Get all records from the DB and render to view
  
  console.log(`🦄: req.params`, req.params.name);
});

// POST /pokemon - receive the name of a pokemon and add it to the database
router.post('/', function(req, res) {
  db.pokemon.findOrCreate({
    where: {
      name: req.body.name
    }
  }).then( digimon => {
    res.redirect('/pokemon')
  });
});

module.exports = router;
