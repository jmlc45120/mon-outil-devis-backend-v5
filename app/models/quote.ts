import { BaseModel, column, belongsTo, BelongsTo } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import Client from '#models/client'

export default class Quote extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare total: number

  @column()
  declare status: 'draft' | 'sent' | 'accepted' | 'rejected'

  @column()
  declare clientId: number

  @belongsTo(() => Client)
  declare client: BelongsTo<typeof Client>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
