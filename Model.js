var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cartSchema = new mongoose.Schema({
  item_name : String,
  Date : Date,
  quantity : Number,
  Cust_Id : Number
});

var custSchema = new mongoose.Schema({
  cust_name : String,
  Date : Date,
  total_bill : Number,
  Cust_Id : Number
});

mongoose.model("Cart", cartSchema);
mongoose.model("Cust", custSchema);
