const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'takenote'
});

db.getAllNotes = (callback) => {
  db.query("select * from notes", (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      console.log('db.query goes');
      callback(null, results);
    }
  })
}

module.exports = db;