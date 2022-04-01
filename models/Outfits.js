const db = require("../config/db")

function createOutfit(name, sprite, price) {
    return new Promise((resolve, reject) => {
        const values = [name, sprite, price]
        const sql = `insert into outfits (nameo, sprite, price) values ($1, $2, $3);`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

function readOutfit(id) {
    return new Promise((resolve, reject) => {
        const values = [id]
        const sql = `select * from outfits where ido = $1;`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

function readAllOutfits() {
    return new Promise((resolve, reject) => {
        const values = []
        const sql = `select * from outfits;`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

function updateOutfit(id, name, sprite, price) {
    return new Promise((resolve, reject) => {
        const values = [id, name, sprite, price]
        const sql = `update outfits set nameo = $2, sprite = $3, price = $4 where ido = $1;`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

function removeOutfit(id) {
    return new Promise((resolve, reject) => {
        const values = [id]
        const sql = `delete from outfits where ido = $1;`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

module.exports = {
    createOutfit,
    readOutfit,
    readAllOutfits,
    updateOutfit,
    removeOutfit
}