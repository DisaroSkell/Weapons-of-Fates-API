const fs = require('fs')
const { Client } = require('pg')

const db = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'wof_rpg',
  password: '1234',
  port: 5432,
})

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected to database " + db.database + "!");
})

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