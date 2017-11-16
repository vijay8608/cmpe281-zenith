var mongoose = require('mongoose');

var restaurant1 = new mongoose.Schema({
  _id: { type: String },
  name: String,
  description: String,
  address: {
    street: String, 
    city: String,
    state: String,
    zip: Number
  },
  phone: String,
  rating: Number,
  openingHours: String
});

var restaurant = new mongoose.Schema({
  _id: { type: String },
  name: String,
  description: String,
  phone: String,
  rating: Number,
  openingHours: String
});

var test2 = new mongoose.Schema({
  _id: { type: String },
  name: String
});


var tests = new mongoose.Schema({
  _id: { type: String },
  name : String
});

mongoose.model('restaurant1', restaurant1);
mongoose.model('restaurant', restaurant);
mongoose.model('tests', tests);
mongoose.model('test2', test2);
//module.exports = mongoose.model('test', test);
//module.exports = mongoose.model('Restaurant', RestaurantSchema);
