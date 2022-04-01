const db = require("../config/db")

function createWeapon(name, damage, xp, type, rarity) {
    return new Promise((resolve, reject) => {
        const values = [name, damage, xp, type, rarity]
        const sql = `insert into weapons (namew, damagew, xp_max, weapon_type, rarity) values ($1, $2, $3, $4, $5);`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

function readWeapon(id) {
    return new Promise((resolve, reject) => {
        const values = [id]
        const sql = `select * from weapons where idw = $1;`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

function readAllWeapons() {
    return new Promise((resolve, reject) => {
        const values = []
        const sql = `select * from weapons;`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

function updateWeapon(id, name, damage, xp, type, rarity) {
    return new Promise((resolve, reject) => {
        const values = [id, name, damage, xp, type, rarity]
        const sql = `update weapons set namew = $2, damagew = $3, xp_max = $4, weapon_type = $5, rarity = $6 where idw = $1;`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

function removeWeapon(id) {
    return new Promise((resolve, reject) => {
        const values = [id]
        const sql = `delete from weapons where idw = $1;`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

module.exports = {
    createWeapon,
    readWeapon,
    readAllWeapons,
    updateWeapon,
    removeWeapon
}