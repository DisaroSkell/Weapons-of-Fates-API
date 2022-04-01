const model = require('../models/Abilities')

function postAbility(req, res) {
    const name = req.body.name
    const damage = req.body.damage
    const mana = req.body.mana

    const promise = model.createAbility(name, damage, mana)
    promise.then((values) => {
        res.status(201).send(values)
    }).catch((err) => {
        console.error(err.message)
        res.status(500).send({
            message: `Cannot create resource`
        })
    })
}

function getAllAbilities(req, res) {
    const promise = model.readAllAbilities()
    promise.then((values) => {
        res.status(200).send(values.rows)
    }).catch((err) => {
        console.error(err.message)
        res.status(404).send({
            message: `Cannot find resource`
        })
    })
}

function getAbility(req, res) {
    const id = req.params.id
    
    const promise = model.readAbility(id)
    promise.then((values) => {
        res.status(200).send(values.rows)
    }).catch((err) => {
        console.error(err.message)
        res.status(404).send({
            message: `Cannot find resource`
        })
    })
}

function putAbility(req, res) {
    const id = req.params.id
    const name = req.body.name
    const damage = req.body.damage
    const mana = req.body.mana

    const promise = model.updateAbility(id,name,damage,mana)
    promise.then((values) => {
        res.status(204).send(values)
    }).catch((err) => {
        console.error(err.message)
        res.status(500).send({
            message: `Cannot update resource`
        })
    })
}

function deleteAbility(req, res) {
    const id = req.params.id

    const promise = model.removeAbility(id)
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
    postAbility,
    getAllAbilities,
    getAbility,
    putAbility,
    deleteAbility
}