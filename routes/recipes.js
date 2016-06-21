'use strict';

var knex = require('../db/knex');
function Recipes() {
  return knex('recipe_app');
}
