var mongoose = require ('mongoose');
var bcrypt = require('bcrypt');

//users schems

var userSchema = mongoose.Schema({
	firstname: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  lastname: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  mobilenumber: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  }
});