const mysql = require('mysql2');
 
const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    database:'nodejsdata',
    password:'My2023'
});

module.exports = pool.promise();