const db = require('../config/db')

function addAbilityToInventory(username, ida) {
    return new Promise((resolve, reject) => {
        const values = [username,ida]
        const sql = `insert into abilities_inventory (ida, idp) values ($1, $2);`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

function readPlayerAbilityInventory(username) {
    return new Promise((resolve, reject) => {
        const values = [username]
        const sql = `select * from abilities_inventory where idp = $1;`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

function readPlayerAbility(username, ida) {
    return new Promise((resolve, reject) => {
        const values = [username, ida]
        const sql = `select * from abilities_inventory where idp = $1 and ida = $2;`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

function removeAbilityFromInventory(username, ida) {
    return new Promise((resolve, reject) => {
        const values = [username, ida]
        const sql = `remove from abilities_inventory where idp = $1 and ida = $2;`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

module.exports = {
    addAbilityToInventory,
    readPlayerAbilityInventory,
    readPlayerAbility,
    removeAbilityFromInventory
}