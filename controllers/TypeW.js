const model = require('../models/TypeW')

function postTypeW(req, res) {
    const name = req.body.name

    const promise = model.createTypeW(name)
    promise.then((values) => {
        res.status(201).send(values)
    }).catch((err) => {
        console.error(err.message)
        res.status(500).send({
            message: `Cannot create resource`
        })
    })
}

function getAllTypesW(req, res) {
    const promise = model.readAllTypesW()
    promise.then((values) => {
        res.status(200).send(values.rows)
    }).catch((err) => {
        console.error(err.message)
        res.status(404).send({
            message: `Cannot find resource`
        })
    })
}

function getTypeW(req, res) {
    const id = req.params.id
    
    const promise = model.readTypeW(id)
    promise.then((values) => {
        res.status(200).send(values.rows)
    }).catch((err) => {
        console.error(err.message)
        res.status(404).send({
            message: `Cannot find resource`
        })
    })
}

function putTypeW(req, res) {
    const id = req.params.id
    const name = req.body.name

    const promise = model.updateTypeW(id,name)
    promise.then((values) => {
        res.status(204).send(values)
    }).catch((err) => {
        console.error(err.message)
        res.status(500).send({
            message: `Cannot update resource`
        })
    })
}

function deleteTypeW(req, res) {
    const id = req.params.id

    const promise = model.removeTypeW(id)
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
    postTypeW,
    getAllTypesW,
    getTypeW,
    putTypeW,
    deleteTypeW
}