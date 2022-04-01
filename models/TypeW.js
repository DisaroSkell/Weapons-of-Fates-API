const db = require("../config/db")

function createTypeW(name) {
    return new Promise((resolve, reject) => {
        const values = [name]
        const sql = `insert into typew (nametw) values ($1);`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

function readTypeW(id) {
    return new Promise((resolve, reject) => {
        const values = [id]
        const sql = `select * from typew where idt = $1;`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

function readAllTypesW() {
    return new Promise((resolve, reject) => {
        const values = []
        const sql = `select * from typew;`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

function updateTypeW(id, name) {
    return new Promise((resolve, reject) => {
        const values = [id, name]
        const sql = `update typew set nametw = $2 where idt = $1;`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

function removeTypeW(id) {
    return new Promise((resolve, reject) => {
        const values = [id]
        const sql = `delete from typew where idt = $1;`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

module.exports = {
    createTypeW,
    readTypeW,
    readAllTypesW,
    updateTypeW,
    removeTypeW
}