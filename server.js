var express = require('express');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Reservation Data (DATA)
// =============================================================
let current = [{ name: 'MQ', phone: '123 - 456 - 7890', email: 'abc@abc.com' }];
let wait = [];

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'view.html'));
});

app.get('/add', function(req, res) {
  res.sendFile(path.join(__dirname, 'add.html'));
});

app.get('/view', function(req, res) {
  return res.json(current);
});

app.post('/view', function(req, res) {
  let newreservation = req.body;

  console.log(newreservation);

  current.push(newreservation);
  //res.json(newreservation);
});

app.listen(PORT, function() {
  console.log('App listening on PORT ' + PORT);
});