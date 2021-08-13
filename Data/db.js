// get the client
const mysql = require('mysql2/promise');
 
// create the connection to database
module.exports = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db',
})