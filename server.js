var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

//controllers
var SightingCtrl = require('./controllers/sighting-ctrl');


//express
var app = express();


//express middleware
app.use(bodyParser.json());


//endpoints

app.get('/sighting', SightingCtrl.create);
app.get('/sighting', SightingCtrl.read);
app.get('/sighting', SightingCtrl.update);
app.get('/sighting', SightingCtrl.delete);

//connections
var port = 8888;
var mongoUri = 'mongodb://localhost:27017/mini-birds-mongoose';

mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
	console.log('connected to monoDb at: ', mongoUri)
})

app.listen(port, function() {
	console.log('listening on port ', port);
})