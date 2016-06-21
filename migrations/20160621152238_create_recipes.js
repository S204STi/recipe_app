'use strict';
exports.up = function(knex) {
  return knex.schema.createTable('recipes', function(table){
    table.increments();
    table.string('recipe_title');
    table.string('recipe_subtitle');
    table.string('recipe_author');
    table.integer('date_created');
    table.text('recipe_ingredients');
    table.text('recipe_instructions');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('recipes');
};
