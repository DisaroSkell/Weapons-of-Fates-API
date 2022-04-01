const model = require('../models/Rarity')

function postRarity(req, res) {
    const name = req.body.name

    const promise = model.createRarity(name)
    promise.then((values) => {
        res.status(201).send(values)
    }).catch((err) => {
        console.error(err.message)
        res.status(500).send({
            message: `Cannot create resource`
        })
    })
}

function getAllRarities(req, res) {
    const promise = model.readAllRarities()
    promise.then((values) => {
        res.status(200).send(values.rows)
    }).catch((err) => {
        console.error(err.message)
        res.status(404).send({
            message: `Cannot find resource`
        })
    })
}

function getRarity(req, res) {
    const id = req.params.id
    
    const promise = model.readRarity(id)
    promise.then((values) => {
        res.status(200).send(values.rows)
    }).catch((err) => {
        console.error(err.message)
        res.status(404).send({
            message: `Cannot find resource`
        })
    })
}

function putRarity(req, res) {
    const id = req.params.id
    const name = req.body.name

    const promise = model.updateRarity(id,name)
    promise.then((values) => {
        res.status(204).send(values)
    }).catch((err) => {
        console.error(err.message)
        res.status(500).send({
            message: `Cannot update resource`
        })
    })
}

function deleteRarity(req, res) {
    const id = req.params.id

    const promise = model.removeRarity(id)
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
    postRarity,
    getAllRarities,
    getRarity,
    putRarity,
    deleteRarity
}