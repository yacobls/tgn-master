var mysql = require('mysql');

// Database Connection
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Teknog@r2022',
    database:'teknogar'
});

conn.connect((err)=>{
    if(err) throw err;
    console.log('Mysql Connected')
});

module.exports = conn;