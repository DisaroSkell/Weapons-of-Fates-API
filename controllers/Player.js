const model = require('../models/Player')

function postPlayer(req, res) {
    const username = req.params.username
    const email = req.body.email
    const password = req.body.password

    const promise = model.createPlayer(username, email, password)
    promise.then((values) => {
        res.status(201).send(values)
    }).catch((err) => {
        console.error(err.message)
        res.status(500).send({
            message: `Cannot create resource`
        })
    })
}

function getAllPlayers(req, res) {
    const promise = model.readAllPlayers()
    promise.then((values) => {
        res.status(200).send(values.rows)
    }).catch((err) => {
        console.error(err.message)
        res.status(404).send({
            message: `Cannot find resource`
        })
    })
}

function getPlayer(req, res) {
    const username = req.params.username
    
    const promise = model.readPlayer(username)
    promise.then((values) => {
        res.status(200).send(values.rows)
    }).catch((err) => {
        console.error(err.message)
        res.status(404).send({
            message: `Cannot find resource`
        })
    })
}

function putPlayer(req, res) {
    const username = req.params.username
    const email = req.body.email
    const password = req.body.password
    const health_max = req.body.health_max
    const current_health = req.body.current_health
    const mana_max = req.body.mana_max
    const current_mana = req.body.current_mana
    const gold = req.body.gold
    const admin = req.body.admin
    const weapon = req.body.weapon
    const outfit = req.body.outfit
    const ability1 = req.body.ability1
    const ability2 = req.body.ability2

    const promise = model.updatePlayer(username, email, password, health_max, current_health, mana_max, current_mana, gold, admin, weapon, outfit, ability1, ability2)
    promise.then((values) => {
        res.status(204).send(values)
    }).catch((err) => {
        console.error(err.message)
        res.status(500).send({
            message: `Cannot update resource`
        })
    })
}

function deletePlayer(req, res) {
    const username = req.params.username

    const promise = model.removePlayer(username)
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
    postPlayer,
    getAllPlayers,
    getPlayer,
    putPlayer,
    deletePlayer
}