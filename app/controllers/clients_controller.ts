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
  async update({ request, response, params }: HttpContext) {
    const client = await Client.find(params.id)
  
    if (!client) {
      return response.notFound({ message: 'Client non trouvé' })
    }
  
    const data = request.only(['name', 'email', 'company_name', 'phone'])
  
    client.merge(data)
    await client.save()
  
    return response.ok(client)
  }
  async destroy({ response, params }: HttpContext) {
    const client = await Client.find(params.id)
  
    if (!client) {
      return response.notFound({ message: 'Client non trouvé' })
    }
  
    await client.delete()
    return response.noContent()
  }
}