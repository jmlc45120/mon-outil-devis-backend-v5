import { HttpContext } from '@adonisjs/core/http'
import Quote from '#models/quote'

export default class QuotesController {
    async store({ request, response }: HttpContext) {
        const data = request.only(['title', 'total', 'status', 'clientId'])

        const quote = await Quote.create(data)

        return response.created(quote)
    }
    async index({ response }: HttpContext) {
        const quotes = await Quote.query().preload('client') // inclut le client lié

        return response.ok(quotes)
    }
    async update({ request, response, params }: HttpContext) {
        const quote = await Quote.find(params.id)
    
        if (!quote) {
        return response.notFound({ message: 'Devis non trouvé' })
        }
    
        const data = request.only(['title', 'total', 'status', 'clientId'])
    
        quote.merge(data)
        await quote.save()
    
        return response.ok(quote)
    }
    async destroy({ response, params }: HttpContext) {
        const quote = await Quote.find(params.id)
    
        if (!quote) {
            return response.notFound({ message: 'Devis non trouvé' })
        }
    
        await quote.delete()
        return response.noContent()
    }
}
