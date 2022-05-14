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
      callback(null, results);
    }
  })
}

db.addNote = (noteToAdd, callback) => {
  let { title, category, tagline, note, status } = noteToAdd;
  db.query(`insert into notes (title, category, tagline, note, status) values ("${title}", "${category}", "${tagline}", "${note}", "None")`, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      console.log(`inserted note titled <${title}> into the db.`);
      callback(null, results);
    }
  })
}

module.exports = db;