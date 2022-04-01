const db = require('../config/db')

function addWeaponToInventory(username, idw) {
    return new Promise((resolve, reject) => {
        const values = [username,idw]
        const sql = `insert into weapons_inventory (idw, idp, fate_level) values ($1, $2, 1);`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

function readPlayerWeaponInventory(username) {
    return new Promise((resolve, reject) => {
        const values = [username]
        const sql = `select * from weapons_inventory where idp = $1;`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

function readPlayerWeapon(username, idw) {
    return new Promise((resolve, reject) => {
        const values = [username, idw]
        const sql = `select * from weapons_inventory where idp = $1 and idw = $2;`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

function updatePlayerWeapon(username, idw, xp, foots_won, fate_level) {
    return new Promise((resolve, reject) => {
        const values = [username, idw, xp, foots_won, fate_level]
        const sql = `update weapons_inventory set xp = $3, foots_won = $4, fate_level = $5 where idp = $1 and idw = $2;`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

function removeWeaponFromInventory(username, idw) {
    return new Promise((resolve, reject) => {
        const values = [username, idw]
        const sql = `remove from weapons_inventory where idp = $1 and idw = $2;`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

module.exports = {
    addWeaponToInventory,
    readPlayerWeaponInventory,
    readPlayerWeapon,
    updatePlayerWeapon,
    removeWeaponFromInventory
}