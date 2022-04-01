const fs = require('fs')
require('dotenv').config()

const { Pool } = require('pg')
const isProduction = process.env.NODE_ENV === 'production'

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`

const db = new Pool({
  connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
  ssl: isProduction,
})

console.log("Connected to database!");

const sql_create = fs.readFile(__dirname + "/../sql/tables.sql", function (err, data) {
    if (err) {
        return console.error(err.message);
    }
    else {
        db.query(data.toString(), [], (err, result) => {
            if (err) {
                return console.error(err.message);
            }
            console.log("Tables successfully created");
        });
    }
});

/*const sql_fill = fs.readFile(__dirname + "/../sql/fill.sql", function (err, data) {
    if (err) {
        return console.error(err.message);
    }
    else {
        db.query(data.toString(), [], (err, result) => {
            if (err) {
                return console.error(err.message);
            }
            console.log("Tables successfully filled");
        });
    }
});*/

module.exports = db