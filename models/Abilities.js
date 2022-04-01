const db = require("../config/db")

function createAbility(name, damage, mana) {
    return new Promise((resolve, reject) => {
        const values = [name, damage, mana]
        const sql = `insert into abilities (namea, damagea, mana_cost) values ($1, $2, $3);`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

function readAbility(id) {
    return new Promise((resolve, reject) => {
        const values = [id]
        const sql = `select * from abilities where ida = $1;`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

function readAllAbilities() {
    return new Promise((resolve, reject) => {
        const values = []
        const sql = `select * from abilities;`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

function updateAbility(id, name, damage, mana) {
    return new Promise((resolve, reject) => {
        const values = [id, name, damage, mana]
        const sql = `update abilities set namea = $2, damagea = $3, mana_cost = $4 where ida = $1;`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

function removeAbility(id) {
    return new Promise((resolve, reject) => {
        const values = [id]
        const sql = `delete from abilities where ida = $1;`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

module.exports = {
    createAbility,
    readAbility,
    readAllAbilities,
    updateAbility,
    removeAbility
}