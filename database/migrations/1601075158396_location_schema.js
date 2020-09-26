'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LocationSchema extends Schema {
  up() {
    this.create('locations', (table) => {
      table.increments()
      table.date('rental_date')
      table.date('return_date')
      table.integer('movie_id').unsigned()
      table.foreign('movie_id').references('id').inTable('movies')


      table.timestamps()
    })
  }

  down() {
    this.drop('locations')
  }
}

module.exports = LocationSchema
