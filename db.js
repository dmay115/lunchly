/** Database for lunchly */

const pg = require("pg");

db = new pg.Client({
    user: "derek",
    host: "localhost",
    database: "lunchly",
    password: "new_password", // or omit this line altogether
    port: 5432, // or your PostgreSQL port
});

db.connect();

module.exports = db;
