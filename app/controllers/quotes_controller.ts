import { HttpContext } from '@adonisjs/core/http'
import Quote from '#models/quote'

export default class QuotesController {
  async store({ request, response }: HttpContext) {
    const data = request.only(['title', 'total', 'status', 'clientId'])

    const quote = await Quote.create(data)

    return response.created(quote)
  }
}
