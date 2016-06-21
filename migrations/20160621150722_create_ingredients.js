'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('ingredients', function(table){
    table.increments();
    table.string('name');
    table.string('units_type');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('ingredients');
};
