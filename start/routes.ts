/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import ClientsController from '#controllers/clients_controller'
import QuotesController from '#controllers/quotes_controller'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})
// CLIENTS
router.post('/clients', [ClientsController, 'store']) // ajoute un client
router.get('/clients', [ClientsController, 'index']) // liste tous les clients
router.get('/clients/:id', [ClientsController, 'show']) // récupère un client
router.put('/clients/:id', [ClientsController, 'update']) // modifie un client
router.delete('/clients/:id', [ClientsController, 'destroy']) // supprime un client

// DEVIS
router.post('/quotes', [QuotesController, 'store'])
router.get('/quotes', [QuotesController, 'index'])
router.put('/quotes/:id', [QuotesController, 'update'])
router.delete('/quotes/:id', [QuotesController, 'destroy'])