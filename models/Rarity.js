const db = require('../config/db')

function createRarity(name) {
    return new Promise((resolve, reject) => {
        const values = [name]
        const sql = `insert into rarity (namer) values ($1);`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

function readRarity(id) {
    return new Promise((resolve, reject) => {
        const values = [id]
        const sql = `select * from rarity where idr = $1;`
        db.query(sql, values, (err, result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

function readAllRarities() {
    return new Promise((resolve, reject) => {
        const values = []
        const sql = `select * from rarity;`
        db.query(sql, values, (err, result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

function updateRarity(id, name) {
    return new Promise((resolve, reject) => {
        const values = [id, name]
        const sql = `update rarity set namer = $2 where idr = $1;`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

function removeRarity(id) {
    return new Promise((resolve, reject) => {
        const values = [id]
        const sql = `delete from rarity where idr = $1;`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

module.exports = {
    createRarity,
    readRarity,
    readAllRarities,
    updateRarity,
    removeRarity
}