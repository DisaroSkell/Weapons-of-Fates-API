module.exports = app => {
    const router = require('express').Router()
    const controller = require('../controllers/TypeW')

    router.post('/', controller.postTypeW)

    router.get('/', controller.getAllTypesW)

    router.get('/:id', controller.getTypeW)
    
    router.put('/:id', controller.putTypeW)
    
    router.delete('/:id', controller.deleteTypeW)

    app.use('/typesw', router)
}