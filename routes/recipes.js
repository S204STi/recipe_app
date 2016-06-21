'use strict';

var knex = require('../db/knex'),
    express = require('express'),
    router = express.Router();

// function recipes() {
//   return knex('recipe_app');
// }

//GET all recipes view on home load
router.get('/', function(req, res){
  knex('recipes').then(function(response){
    res.render('home', {recipes:response});
  });
});

//GET new recipe form view
router.get('/new', function(req, res){
  res.render('new');
});

//POST new recipe from form view /recipes/new
router.post('/new',function(req, res){
  knex('recipes').insert({
    recipe_title: req.body.recipe_title,
    recipe_subtitle: req.body.sub_title,
    genre: req.body.genre,
    recipe_author: req.body.recipe_author,
    date_created: req.body.date_created,
    recipe_ingredients: req.body.recipe_ingredients,
    recipe_instructions: req.body.recipe_instructions
  }).then(function(){
    res.redirect('/recipes');
  });
});

//GET sort by alphabet

//GET sort by primary meat

//GET sort by genre

//GET edit view for recipe /recipes/:id/edit


//POST edit update


//POST delete recipe /recipes/:id/delete


module.exports = router;
