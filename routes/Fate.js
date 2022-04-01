module.exports = app => {
    const router = require('express').Router()
    const controller = require('../controllers/Fate')

    router.post('/', controller.postFate)

    router.get('/', controller.getAllFates)

    router.get('/:id', controller.getFate)
    
    router.put('/:id', controller.putFate)
    
    router.delete('/:id', controller.deleteFate)

    app.use('/fates', router)
}