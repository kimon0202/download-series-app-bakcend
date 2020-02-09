'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateEntriesSchema extends Schema {
  up () {
    this.create('entries', (table) => {
      table.increments()
      table.timestamps()
      table.string('title').notNullable()
    })
  }

  down () {
    this.drop('entries')
  }
}

module.exports = CreateEntriesSchema
