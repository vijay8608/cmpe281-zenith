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


//hashing a password before saving it to the database

userSchema.pre('save', function (next) {
  var usr = this;
  bcrypt.hash(usr.password, 10, function (err, hash) {
    if (err) {
      return next(err);
    }
    usr.password = hash;
    next();
  })
});



var user = module.exports = mongoose.model('user', userSchema);

module.exports.addUser = function(form, callback){
  user.create(form, callback);
}

