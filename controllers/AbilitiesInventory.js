const model = require('../models/AbilitiesInventory')

function postAbilityToInventory(req, res) {
    const username = req.params.username
    const ida = req.body.ida

    const promise = model.addAbilityToInventory(username,ida)
    promise.then((values) => {
        res.status(201).send(values)
    }).catch((err) => {
        console.error(err.message)
        res.status(500).send({
            message: `Cannot create resource`
        })
    })
}

function getPlayerAbilityInventory(req, res) {
    const username = req.params.username

    const promise = model.readPlayerAbilityInventory(username)
    promise.then((values) => {
        res.status(200).send(values.rows)
    }).catch((err) => {
        console.error(err.message)
        res.status(404).send({
            message: `Cannot find resource`
        })
    })
}

function getPlayerAbility(req, res) {
    const username = req.params.username
    const ida = req.params.ida
    
    const promise = model.readPlayerAbility(username,ida)
    promise.then((values) => {
        res.status(200).send(values.rows)
    }).catch((err) => {
        console.error(err.message)
        res.status(404).send({
            message: `Cannot find resource`
        })
    })
}

function deleteAbilityFromInventory(req, res) {
    const username = req.params.username
    const ida = req.params.ida

    const promise = model.removeAbilityFromInventory(username,ida)
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
    postAbilityToInventory,
    getPlayerAbilityInventory,
    getPlayerAbility,
    deleteAbilityFromInventory
}