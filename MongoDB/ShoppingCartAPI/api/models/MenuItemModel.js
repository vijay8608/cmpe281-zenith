var mongoose = require('mongoose');

var menuItems = new mongoose.Schema({
  _id: { type: String },
  restaurant_id: String,
  name: String,
  description: String,
  price: Number,
  category: String,
  subCategory: String
});


var tests = new mongoose.Schema({
  _id: { type: String },
  name : String
});

module.exports =mongoose.model('menuItems', menuItems);
//mongoose.model('test2', test2);
