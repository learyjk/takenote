const db = require('./db');

const express = require('express');
//const db = FILL_ME_IN

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, (req, res) => {
  console.log(`Listening on port ${port}`);
}); ``

app.get('/api/notes', (req, res) => {
  db.getAllNotes((err, results) => {
    if (err) {
      console.log('error getting notes');
      throw err;
    };
    //console.log(results);
    res.send(results);
  });
});

app.post('/api/notes', (req, res) => {
  console.log('post req with body: ' + req.body);
  db.addNote(req.body, (err, results) => {
    if (err) {
      console.log('error getting notes');
      throw err;
    };
    res.send();
  });
});