const model = require('../models/OutfitsInventory')

function postOutfitToInventory(req, res) {
    const username = req.params.username
    const ido = req.body.ido

    const promise = model.addOutfitToInventory(username,ido)
    promise.then((values) => {
        res.status(201).send(values)
    }).catch((err) => {
        console.error(err.message)
        res.status(500).send({
            message: `Cannot create resource`
        })
    })
}

function getPlayerOutfitInventory(req, res) {
    const username = req.params.username

    const promise = model.readPlayerOutfitInventory(username)
    promise.then((values) => {
        res.status(200).send(values.rows)
    }).catch((err) => {
        console.error(err.message)
        res.status(404).send({
            message: `Cannot find resource`
        })
    })
}

function getPlayerOutfit(req, res) {
    const username = req.params.username
    const ido = req.params.ido
    
    const promise = model.readPlayerOutfit(username,ido)
    promise.then((values) => {
        res.status(200).send(values.rows)
    }).catch((err) => {
        console.error(err.message)
        res.status(404).send({
            message: `Cannot find resource`
        })
    })
}

function deleteOutfitFromInventory(req, res) {
    const username = req.params.username
    const ido = req.params.ido

    const promise = model.removeOutfitFromInventory(username,ido)
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
    postOutfitToInventory,
    getPlayerOutfitInventory,
    getPlayerOutfit,
    deleteOutfitFromInventory
}