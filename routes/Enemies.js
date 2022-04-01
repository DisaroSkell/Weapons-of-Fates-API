module.exports = app => {
    const router = require('express').Router()
    const controller = require('../controllers/Enemies')

    router.post('/', controller.postEnemy)
    
    router.get('/:id', controller.getEnemy)
    
    router.get('/', controller.getAllEnemies)
    
    router.put('/:id', controller.putEnemy)
    
    router.delete('/:id', controller.deleteEnemy)

    //Can Use:
    const controller2 = require('../controllers/CanUse')

    router.post('/:ide/abilities', controller2.postAbilityToEnemy)

    router.get('/:ide/abilities', controller2.getEnemyAbilityInventory)

    router.get('/:ide/abilities/:ida', controller2.getEnemyAbility)

    router.put('/:ide/abilities/:ida', controller2.putEnemyAbility)

    router.delete('/:ide/abilities/:ida', controller2.deleteAbilityFromUsage)
    
    app.use('/enemies', router)
}