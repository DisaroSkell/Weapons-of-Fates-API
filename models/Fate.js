const db = require("../config/db")

function createFate(name, desc) {
    return new Promise((resolve, reject) => {
        const values = [name, desc]
        const sql = `insert into fate (namef, descf) values ($1, $2);`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

function readFate(id) {
    return new Promise((resolve, reject) => {
        const values = [id]
        const sql = `select * from fate where idf = $1;`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

function readAllFates() {
    return new Promise((resolve, reject) => {
        const values = []
        const sql = `select * from fate;`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

function updateFate(id, name, desc) {
    return new Promise((resolve, reject) => {
        const values = [id, name, desc]
        const sql = `update fate set namef = $2, descf = $3 where idf = $1;`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

function removeFate(id) {
    return new Promise((resolve, reject) => {
        const values = [id]
        const sql = `delete from fate where idf = $1;`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

module.exports = {
    createFate,
    readFate,
    readAllFates,
    updateFate,
    removeFate
}