const db = require("../config/db")

function createEnemy(name, health_max, xp, gold, strength, resistance, weekness) {
    return new Promise((resolve, reject) => {
        const values = [name, health_max, xp, gold, strength, resistance, weekness]
        const sql = `insert into enemies (namee, health_maxe, xp_reward, gold_reward, strength, resistance, weekness) values ($1, $2, $3, $4, $5, $6 ,$7);`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

function readEnemy(id) {
    return new Promise((resolve, reject) => {
        const values = [id]
        const sql = `select * from enemies where ide = $1;`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

function readAllEnemies() {
    return new Promise((resolve, reject) => {
        const values = []
        const sql = `select * from enemies;`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

function updateEnemy(id, name, health_max, xp, gold, strength, resistance, weekness) {
    return new Promise((resolve, reject) => {
        const values = [id, name, health_max, xp, gold, strength, resistance, weekness]
        const sql = `update enemies set namee = $2, health_maxe = $3, xp_reward = $4, gold_reward = $5, strength = $6, resistance = $7, weekness = $8 where ide = $1;`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

function removeEnemy(id) {
    return new Promise((resolve, reject) => {
        const values = [id]
        const sql = `delete from enemies where ide = $1;`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

module.exports = {
    createEnemy,
    readEnemy,
    readAllEnemies,
    updateEnemy,
    removeEnemy
}