var mongoose = require('mongoose');


//book schema

var bookSchema = mongoose.Schema({
	title : {
		type : String,
		required : true,
	},
	create_date : {
		type : Date,
		default : Date.now
	},
	genre : {
		type : String,
		required : true,
	},
	title : {
		type : String,
		required : true,
	},
	description : {
		type : String,
	},
	author : {
		type : String,
		required : true,
	},
	publisher : {
		type : String,
	},
	pages : {
		type : String,
	},	
	image_url : {
		type : String,
	},
	buy_url : {
		type : String,
	}

});

var Book = module.exports = mongoose.model('Book', bookSchema);

// Get Books

module.exports.getBooks = function (callback, limit){
	Book.find(callback).limit(limit);
}


module.exports.getBookById = function (id, callback){
	Book.findById(id, callback);
}

//Add book

module.exports.addBook = function (book, callback){
	Book.create(book, callback);
}







