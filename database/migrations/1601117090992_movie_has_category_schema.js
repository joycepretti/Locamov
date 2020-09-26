'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MovieHasCategorySchema extends Schema {
  up() {
    this.create('movie_has_categories', (table) => {
      table.increments()
      table.integer('movie_id').unsigned()
      table.foreign('movie_id').references('id').inTable('movies')
      table.integer('category_id').unsigned()
      table.foreign('category_id').references('id').inTable('categories')
      table.timestamps()
    })
  }

  down() {
    this.drop('movie_has_categories')
  }
}

module.exports = MovieHasCategorySchema
