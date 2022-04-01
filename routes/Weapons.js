module.exports = app => {
    const router = require('express').Router()
    const controller = require('../controllers/Weapons')

    router.post('/', controller.postWeapon)

    router.get('/', controller.getAllWeapons)

    router.get('/:id', controller.getWeapon)
    
    router.put('/:id', controller.putWeapon)
    
    router.delete('/:id', controller.deleteWeapon)

    app.use('/weapons', router)
}