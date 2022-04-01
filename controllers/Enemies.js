const model = require("../models/Enemies")

function postEnemy(req, res) {
    const name = req.body.name
    const health = req.body.health
    const xp = req.body.xp
    const gold = req.body.gold
    const strength = req.body.strength
    const resistance = req.body.resistance
    const weekness = req.body.weekness

    const promise = model.createEnemy(name,health,xp,gold,strength,resistance,weekness)
    promise.then((values) => {
        res.status(201).send(values)
    }).catch((err) => {
        console.error(err.message)
        res.status(500).send({
            message: `Cannot create resource`
        })
    })
}

function getAllEnemies(req, res) {
    const promise = model.readAllEnemies()
    promise.then((values) => {
        res.status(200).send(values.rows)
    }).catch((err) => {
        console.error(err.message)
        res.status(404).send({
            message: `Cannot find resource`
        })
    })
}

function getEnemy(req, res) {
    const id = req.params.id

    const promise = model.readEnemy(id)
    promise.then((values) => {
        res.status(200).send(values.rows)
    }).catch((err) => {
        console.error(err.message)
        res.status(404).send({
            message: `Cannot find resource`
        })
    })
}

function putEnemy(req, res) {
    const id = req.params.id
    const name = req.body.name
    const health = req.body.health
    const xp = req.body.xp
    const gold = req.body.gold
    const strength = req.body.strength
    const resistance = req.body.resistance
    const weekness = req.body.weekness

    const promise = model.updateEnemy(id,name,health,xp,gold,strength,resistance,weekness)
    promise.then((values) => {
        res.status(204).send(values)
    }).catch((err) => {
        console.error(err.message)
        res.status(500).send({
            message: `Cannot update resource`
        })
    })
}

function deleteEnemy(req, res) {
    const id = req.params.id

    const promise = model.removeEnemy(id)
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
    postEnemy,
    getAllEnemies,
    getEnemy,
    putEnemy,
    deleteEnemy
}