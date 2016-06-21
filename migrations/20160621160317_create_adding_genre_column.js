'use strict';
exports.up = function(knex) {
  return knex.schema.table('recipes', function(table){
    table.string('genre');
  });
};

exports.down = function(knex) {
  return knex.schema.table('recipes', function(table){
    table.dropColumn('genre');
  });
};
