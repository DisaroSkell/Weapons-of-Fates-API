const model = require('../models/Weapons')

function postWeapon(req, res) {
    const name = req.body.name
    const damage = req.body.damage
    const xp = req.body.xp
    const type = req.body.type
    const rarity = req.body.rarity

    const promise = model.createWeapon(name, damage, xp, type, rarity)
    promise.then((values) => {
        res.status(201).send(values)
    }).catch((err) => {
        console.error(err.message)
        res.status(500).send({
            message: `Cannot create resource`
        })
    })
}

function getAllWeapons(req, res) {
    const promise = model.readAllWeapons()
    promise.then((values) => {
        res.status(200).send(values.rows)
    }).catch((err) => {
        console.error(err.message)
        res.status(404).send({
            message: `Cannot find resource`
        })
    })
}

function getWeapon(req, res) {
    const id = req.params.id
    
    const promise = model.readWeapon(id)
    promise.then((values) => {
        res.status(200).send(values.rows)
    }).catch((err) => {
        console.error(err.message)
        res.status(404).send({
            message: `Cannot find resource`
        })
    })
}

function putWeapon(req, res) {
    const id = req.params.id
    const name = req.body.name
    const damage = req.body.damage
    const xp = req.body.xp
    const type = req.body.type
    const rarity = req.body.rarity

    const promise = model.updateWeapon(id,name, damage, xp, type, rarity)
    promise.then((values) => {
        res.status(204).send(values)
    }).catch((err) => {
        console.error(err.message)
        res.status(500).send({
            message: `Cannot update resource`
        })
    })
}

function deleteWeapon(req, res) {
    const id = req.params.id

    const promise = model.removeWeapon(id)
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
    postWeapon,
    getAllWeapons,
    getWeapon,
    putWeapon,
    deleteWeapon
}