const db = require('../config/db')

function allowAbilityToEnemy(ide, idw, priority) {
    return new Promise((resolve, reject) => {
        const values = [ide, idw, priority]
        const sql = `insert into can_use (idw, ide, use_prio) values ($1, $2, $3);`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

function readEnemyAbilityInventory(ide) {
    return new Promise((resolve, reject) => {
        const values = [ide]
        const sql = `select * from can_use where ide = $1;`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

function readEnemyAbility(ide, idw) {
    return new Promise((resolve, reject) => {
        const values = [ide, idw]
        const sql = `select * from can_use where ide = $1 and idw = $2;`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

function updateEnemyAbility(ide, idw, priority) {
    return new Promise((resolve, reject) => {
        const values = [ide, idw, priority]
        const sql = `update can_use set use_prio = $3 where ide = $1 and idw = $2;`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

function revokeAbilityFromUsage(ide, idw) {
    return new Promise((resolve, reject) => {
        const values = [ide, idw]
        const sql = `remove from can_use where ide = $1 and idw = $2;`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

module.exports = {
    allowAbilityToEnemy,
    readEnemyAbilityInventory,
    readEnemyAbility,
    updateEnemyAbility,
    revokeAbilityFromUsage
}