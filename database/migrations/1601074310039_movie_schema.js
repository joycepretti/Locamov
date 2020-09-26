'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MovieSchema extends Schema {
  up() {
    this.create('movies', (table) => {
      table.increments()
      table.string('title', 255)
      table.string('age_range', 2)
      table.boolean('enabled').defaultTo(true)
      table.timestamps()
    })
  }

  down() {
    this.drop('movies')
  }
}

module.exports = MovieSchema
