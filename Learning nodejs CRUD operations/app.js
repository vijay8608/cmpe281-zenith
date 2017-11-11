var express = require('express');
var app = express();
var bodyParser = require ('body-parser');
var mongoose = require ('mongoose');


app.use(bodyParser.json());

Book = require ('./models/book')
Genre = require ('./models/genre')

// connect to mongoose

mongoose.connect('mongodb://localhost/bookstore',{
	useMongoClient: true,
});
var db = mongoose.connection;

app.get('/', function (req, res){
	res.send('Pleaseeee use /api/books or /api/genres');
});

app.get('/api/genres', function (req, res){
	Genre.getGenres(function(err, genres){

		if (err){
			throw error;
		}
		res.json(genres);
	});
	
});


app.post('/api/genres', function (req, res){

	var genre = req.body;

	Genre.addGenre(genre, function(err, genre){

		if (err){
			throw error;
		}
		res.json(genre);
	});
	
});


app.get('/api/books', function (req, res){
	Book.getBooks(function(err, books){

		if (err){
			throw error;
		}
		res.json(books);
	});
	
});


app.post('/api/books', function (req, res){

	var book = req.body;

	Book.addBook(book, function(err, book){

		if (err){
			throw error;
		}
		res.json(book);
	});
	
});

app.get('/api/books/:_id', function (req, res){
	Book.getBookById(req.params._id ,function(err, book){

		if (err){
			throw error;
		}
		res.json(book);
	});
	
});

app.listen(3000);

console.log('Running on port 3000.........');



