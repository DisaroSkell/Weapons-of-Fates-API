module.exports = app => {
    const router = require('express').Router()
    const controller = require('../controllers/Rarity')

    router.post('/', controller.postRarity)

    router.get('/', controller.getAllRarities)

    router.get('/:id', controller.getRarity)
    
    router.put('/:id', controller.putRarity)
    
    router.delete('/:id', controller.deleteRarity)

    app.use('/rarities', router)
}