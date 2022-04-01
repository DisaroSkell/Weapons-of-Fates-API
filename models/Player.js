const db = require("../config/db")

function createPlayer(username, email, password) {
    return new Promise((resolve, reject) => {
        const values = [username, email, password]
        const sql = `insert into player (username, email, password, health_maxp, mana_max, isadmin) values ($1, $2, $3, 100, 100, false);`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

function readPlayer(username) {
    return new Promise((resolve, reject) => {
        const values = [username]
        const sql = `select * from player where username = $1;`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

function readPlayerByEmail(email) {
    return new Promise((resolve, reject) => {
        const values = [email]
        const sql = `select * from player where email = $1;`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve (result)
        })
    })
}

function readAllPlayers() {
    return new Promise((resolve, reject) => {
        const values = []
        const sql = `select * from player;`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

function updatePlayer(username, email, password, health_max, current_health, mana_max, current_mana, gold, admin, weapon, outfit, ability1, ability2) {
    return new Promise((resolve, reject) => {
        const values = [username, email, password, health_max, current_health, mana_max, current_mana, gold, admin, weapon, outfit, ability1, ability2]
        const sql = `update player set email = $2, password = $3, health_maxp = $4, current_health = $5, mana_max = $6,
        current_mana = $7, gold_purse = $8, isadmin = $9, chosen_weapon = $10, chosen_outfit = $11, chosen_ability1 = $12, chosen_ability2 = $13 where username = $1;`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

function removePlayer(username) {
    return new Promise((resolve, reject) => {
        const values = [username]
        const sql = `delete from player where username = $1;`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

module.exports = {
    createPlayer,
    readPlayer,
    readPlayerByEmail,
    readAllPlayers,
    updatePlayer,
    removePlayer
}