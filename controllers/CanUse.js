const model = require('../models/CanUse')

function postAbilityToEnemy(req, res) {
    const ide = req.params.ide
    const ida = req.body.ida
    const priority = req.body.priority

    const promise = model.allowAbilityToEnemy(ide,ida,priority)
    promise.then((values) => {
        res.status(201).send(values)
    }).catch((err) => {
        console.error(err.message)
        res.status(500).send({
            message: `Cannot create resource`
        })
    })
}

function getEnemyAbilityInventory(req, res) {
    const ide = req.params.ide

    const promise = model.readEnemyAbilityInventory(ide)
    promise.then((values) => {
        res.status(200).send(values.rows)
    }).catch((err) => {
        console.error(err.message)
        res.status(404).send({
            message: `Cannot find resource`
        })
    })
}

function getEnemyAbility(req, res) {
    const ide = req.params.ide
    const ida = req.params.ida
    
    const promise = model.readEnemyAbility(ide,ida)
    promise.then((values) => {
        res.status(200).send(values.rows)
    }).catch((err) => {
        console.error(err.message)
        res.status(404).send({
            message: `Cannot find resource`
        })
    })
}

function putEnemyAbility(req, res) {
    const ide = req.params.ide
    const ida = req.params.ida
    const priority = req.body.priority

    const promise = model.updateEnemyAbility(ide, ida, priority)
    promise.then((values) => {
        res.status(204).send(values)
    }).catch((err) => {
        console.error(err.message)
        res.status(500).send({
            message: `Cannot update resource`
        })
    })
}

function deleteAbilityFromUsage(req, res) {
    const ide = req.params.ide
    const ida = req.params.ida

    const promise = model.revokeAbilityFromUsage(ide,ida)
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
    postAbilityToEnemy,
    getEnemyAbilityInventory,
    getEnemyAbility,
    putEnemyAbility,
    deleteAbilityFromUsage
}