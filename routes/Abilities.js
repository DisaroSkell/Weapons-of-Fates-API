module.exports = app => {
    const router = require('express').Router()
    const controller = require('../controllers/Abilities')

    router.post('/', controller.postAbility)

    router.get('/', controller.getAllAbilities)

    router.get('/:id', controller.getAbility)
    
    router.put('/:id', controller.putAbility)
    
    router.delete('/:id', controller.deleteAbility)

    app.use('/abilities', router)
}