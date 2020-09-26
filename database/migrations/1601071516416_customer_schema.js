'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CustomerSchema extends Schema {
  up() {
    this.create('customers', (table) => {
      table.increments()
      table.string('name', 255).notNullable()
      table.string('address', 255)
      table.string('number', 20)
      table.string('complement', 20)
      table.string('zipcode', 8)
      table.string('neighborhood', 50)
      table.string('city', 30)
      table.string('state', 2)
      table.date('birthday').notNullable()
      table.string('document', 20).notNullable()
      table.string('email', 255).notNullable().unique()
      table.boolean('enabled').defaultTo(true)
      table.timestamps()
    })
  }

  down() {
    this.drop('customers')
  }
}

module.exports = CustomerSchema
