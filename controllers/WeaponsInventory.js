const model = require('../models/WeaponsInventory')

function postWeaponToInventory(req, res) {
    const username = req.params.username
    const idw = req.body.idw

    const promise = model.addWeaponToInventory(username,idw)
    promise.then((values) => {
        res.status(201).send(values)
    }).catch((err) => {
        console.error(err.message)
        res.status(500).send({
            message: `Cannot create resource`
        })
    })
}

function getPlayerWeaponInventory(req, res) {
    const username = req.params.username

    const promise = model.readPlayerWeaponInventory(username)
    promise.then((values) => {
        res.status(200).send(values.rows)
    }).catch((err) => {
        console.error(err.message)
        res.status(404).send({
            message: `Cannot find resource`
        })
    })
}

function getPlayerWeapon(req, res) {
    const username = req.params.username
    const idw = req.params.idw
    
    const promise = model.readPlayerWeapon(username,idw)
    promise.then((values) => {
        res.status(200).send(values.rows)
    }).catch((err) => {
        console.error(err.message)
        res.status(404).send({
            message: `Cannot find resource`
        })
    })
}

function putPlayerWeapon(req, res) {
    const username = req.params.username
    const idw = req.params.idw
    const xp = req.body.xp
    const foots_won = req.body.foots_won
    const fate_level = req.body.fate_level

    const promise = model.updatePlayerWeapon(username, idw, xp, foots_won, fate_level)
    promise.then((values) => {
        res.status(204).send(values)
    }).catch((err) => {
        console.error(err.message)
        res.status(500).send({
            message: `Cannot update resource`
        })
    })
}

function deleteWeaponFromInventory(req, res) {
    const username = req.params.username
    const idw = req.params.idw

    const promise = model.removeWeaponFromInventory(username,idw)
    promise.then((values) => {
        res.status(204).send(values)
    }).catch((err) => {
        console.error(err.message)
        res.status(500).send({
            message: `Cannot delete resource`
        })
    })
}

module.exports = {
    postWeaponToInventory,
    getPlayerWeaponInventory,
    getPlayerWeapon,
    putPlayerWeapon,
    deleteWeaponFromInventory
}