const model = require('../models/Outfits')

function postOutfit(req, res) {
    const name = req.body.name
    const sprite = req.body.sprite
    const price = req.body.price

    const promise = model.createOutfit(name,sprite,price)
    promise.then((values) => {
        res.status(201).send(values)
    }).catch((err) => {
        console.error(err.message)
        res.status(500).send({
            message: `Cannot create resource`
        })
    })
}

function getAllOutfits(req, res) {
    const promise = model.readAllOutfits()
    promise.then((values) => {
        res.status(200).send(values.rows)
    }).catch((err) => {
        console.error(err.message)
        res.status(404).send({
            message: `Cannot find resource`
        })
    })
}

function getOutfit(req, res) {
    const id = req.params.id
    
    const promise = model.readOutfit(id)
    promise.then((values) => {
        res.status(200).send(values.rows)
    }).catch((err) => {
        console.error(err.message)
        res.status(404).send({
            message: `Cannot find resource`
        })
    })
}

function putOutfit(req, res) {
    const id = req.params.id
    const name = req.body.name
    const sprite = req.body.sprite
    const price = req.body.price

    const promise = model.updateOutfit(id,name,sprite,price)
    promise.then((values) => {
        res.status(204).send(values)
    }).catch((err) => {
        console.error(err.message)
        res.status(500).send({
            message: `Cannot update resource`
        })
    })
}

function deleteOutfit(req, res) {
    const id = req.params.id

    const promise = model.removeOutfit(id)
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
    postOutfit,
    getAllOutfits,
    getOutfit,
    putOutfit,
    deleteOutfit
}