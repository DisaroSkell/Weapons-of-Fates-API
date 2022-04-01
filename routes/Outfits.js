module.exports = app => {
    const router = require('express').Router()
    const controller = require('../controllers/Outfits')

    router.post('/', controller.postOutfit)

    router.get('/', controller.getAllOutfits)

    router.get('/:id', controller.getOutfit)
    
    router.put('/:id', controller.putOutfit)
    
    router.delete('/:id', controller.deleteOutfit)

    app.use('/outfits', router)
}