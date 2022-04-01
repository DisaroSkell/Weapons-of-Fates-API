const db = require('../config/db')

function addOutfitToInventory(username, ido) {
    return new Promise((resolve, reject) => {
        const values = [username,ido]
        const sql = `insert into outfits_inventory (ido, idp) values ($1, $2);`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

function readPlayerOutfitInventory(username) {
    return new Promise((resolve, reject) => {
        const values = [username]
        const sql = `select * from outfits_inventory where idp = $1;`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

function readPlayerOutfit(username, ido) {
    return new Promise((resolve, reject) => {
        const values = [username, ido]
        const sql = `select * from outfits_inventory where idp = $1 and ido = $2;`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

function removeOutfitFromInventory(username, ido) {
    return new Promise((resolve, reject) => {
        const values = [username, ido]
        const sql = `remove from outfits_inventory where idp = $1 and ido = $2;`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

module.exports = {
    addOutfitToInventory,
    readPlayerOutfitInventory,
    readPlayerOutfit,
    removeOutfitFromInventory
}