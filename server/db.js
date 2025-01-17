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

db.editNote = (updateObj, callback) => {
  // updateObj = {id: idVal, field: fieldVal}
  //console.log('updateObj field: ', updateObj.field)
  let fieldName = Object.keys(updateObj)[1];
  //console.log('fieldName: ', fieldName);
  db.query(`update notes set ${fieldName}="${updateObj[fieldName]}" where id=${updateObj.id}`, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      console.log(`updated note!`);
      callback(null, results);
    }
  })
}

// update notes set status='Hidden' where id=4;
// update notes set title="updated title", category="Science" where id=4

module.exports = db;