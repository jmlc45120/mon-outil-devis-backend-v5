import { BaseSchema } from '@adonisjs/lucid/schema'

export default class QuotesTable extends BaseSchema {
  protected tableName = 'quotes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title').notNullable()
      table.decimal('total', 10, 2).notNullable()
      table.enum('status', ['draft', 'sent', 'accepted', 'rejected']).defaultTo('draft')
      table
        .integer('client_id')
        .unsigned()
        .references('id')
        .inTable('clients')
        .onDelete('CASCADE')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
