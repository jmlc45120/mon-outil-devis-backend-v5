import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'clients'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id') // Primary key
      table.string('name').notNullable()
      table.string('email').notNullable()
      table.string('company_name').nullable()
      table.string('phone').nullable()
      table.timestamps(true) // created_at et updated_at
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}