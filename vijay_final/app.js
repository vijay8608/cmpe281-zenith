var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());


user = require('./models/users');

//connect to mongoose

//to connect locally
mongoose.connect('mongodb://localhost/cmpe281project');

// to connect to mongo container
//mongoose.connect('mongodb://192.168.99.100:27017/281project');

var db = mongoose.connection;

app.get('/', function(req, res){
	res.send('Hello World');
});


app.post('/register', function(req, res){
	var form = req.body;
	user.addUser(form, function(err, user){
		if (err){
			throw err;
		}
		res.json(form);
	});

});

app.listen(3000);

console.log('Running on port 3000.......');

