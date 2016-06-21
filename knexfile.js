'use strict';

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/recipe_app'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
