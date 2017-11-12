'use strict';
var mongoose = require('mongoose');
//var Restaurants = mongoose.model('Restaurants');
var restaurant1 = mongoose.model('restaurant1');
var restaurant = mongoose.model('restaurant');
var tests = mongoose.model('tests');
var test2 = mongoose.model('test2');

exports.list_all_restaurants = function(req, res) {

restaurant1.find({}, function(err, result) {
  if (err)
    {
      console.log("-------In error-----");
      res.send(err);
    }
    console.log("*********in Restaurant1",result);
});


};

exports.justGet = function(req, res) {
  console.log("*********in justGet");
    //res.json("hi");
    var MongoClient = require('mongodb').MongoClient;

// Connect to the db
	MongoClient.connect("mongodb://localhost:27017/ShoppingCart", function (err, db) {
	    
	    db.collection('Restaurants', function (err, collection) {
	        collection.find({"_id":"R1"}).toArray(function(err, items) {
	            if(err) throw err;    
	            console.log("restaurants=",items);  
	            res.json(items);          
        	});
	    });
	                
	});

};
