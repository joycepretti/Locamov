'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Location extends Model {
  movie() {
    return this.belongsTo('App/Models/Movie', 'movie_id', 'id')
  }
}

module.exports = Location
