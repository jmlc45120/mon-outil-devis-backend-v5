// import type { HttpContext } from '@adonisjs/core/http'

import { HttpContext } from '@adonisjs/core/http'
import Client from '#models/client'

export default class ClientsController {
  async store({ request, response }: HttpContext) {
    const data = request.only(['name', 'email', 'company_name', 'phone'])

    const client = await Client.create(data)

    return response.created(client)
  }
  async index({ response }: HttpContext) {
    const clients = await Client.all()
    return response.ok(clients)
  }
}