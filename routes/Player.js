module.exports = app => {
    const router = require('express').Router()
    const controller = require('../controllers/Player')

    router.post('/', controller.postPlayer)

    router.get('/', controller.getAllPlayers)

    router.get('/:username', controller.getPlayer)
    
    router.put('/:username', controller.putPlayer)
    
    router.delete('/:username', controller.deletePlayer)

    //Abilities Inventory:
    const controllerA = require('../controllers/AbilitiesInventory')

    router.post('/:username/abilities', controllerA.postAbilityToInventory)

    router.get('/:username/abilities', controllerA.getPlayerAbilityInventory)

    router.get('/:username/abilities/:ida', controllerA.getPlayerAbility)
    
    router.delete('/:username/abilities/:ida', controllerA.deleteAbilityFromInventory)

    //Outfits Inventory:
    const controllerO = require('../controllers/OutfitsInventory')

    router.post('/:username/outfits', controllerO.postOutfitToInventory)

    router.get('/:username/outfits', controllerO.getPlayerOutfitInventory)

    router.get('/:username/outfits/:ido', controllerO.getPlayerOutfit)
    
    router.delete('/:username/outfits/:ido', controllerO.deleteOutfitFromInventory)

    //Weapons Inventory:
    const controllerW = require('../controllers/WeaponsInventory')

    router.post('/:username/weapons', controllerW.postWeaponToInventory)

    router.get('/:username/weapons', controllerW.getPlayerWeaponInventory)

    router.get('/:username/weapons/:idw', controllerW.getPlayerWeapon)

    router.put('/:username/weapons/:idw', controllerW.putPlayerWeapon)
    
    router.delete('/:username/weapons/:idw', controllerW.deleteWeaponFromInventory)

    app.use('/players', router)
}