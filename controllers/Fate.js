const model = require('../models/Fate')

function postFate(req, res) {
    const name = req.body.name
    const desc = req.body.desc

    const promise = model.createFate(name,desc)
    promise.then((values) => {
        res.status(201).send(values)
    }).catch((err) => {
        console.error(err.message)
        res.status(500).send({
            message: `Cannot create resource`
        })
    })
}

function getAllFates(req, res) {
    const promise = model.readAllFates()
    promise.then((values) => {
        res.status(200).send(values.rows)
    }).catch((err) => {
        console.error(err.message)
        res.status(404).send({
            message: `Cannot find resource`
        })
    })
}

function getFate(req, res) {
    const id = req.params.id
    
    const promise = model.readFate(id)
    promise.then((values) => {
        res.status(200).send(values.rows)
    }).catch((err) => {
        console.error(err.message)
        res.status(404).send({
            message: `Cannot find resource`
        })
    })
}

function putFate(req, res) {
    const id = req.params.id
    const name = req.body.name
    const desc = req.body.desc

    const promise = model.updateFate(id,name,desc)
    promise.then((values) => {
        res.status(204).send(values)
    }).catch((err) => {
        console.error(err.message)
        res.status(500).send({
            message: `Cannot update resource`
        })
    })
}

function deleteFate(req, res) {
    const id = req.params.id

    const promise = model.removeFate(id)
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
    postFate,
    getAllFates,
    getFate,
    putFate,
    deleteFate
}