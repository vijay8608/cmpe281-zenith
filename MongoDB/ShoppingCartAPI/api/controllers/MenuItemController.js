'use strict';
var mongoose = require('mongoose');

//var menuItems = mongoose.model('menuItems');
var menu = mongoose.model('menu1');


exports.list_all_menuItems = function(req, res) {
  menu.find(function(err, result) {
    if (err)
      {
        console.log("-------In error-----");
        res.send(err);
      }
      console.log("*********in get all menuItems",result.length);
      res.json(result);
  });

  exports.get_items_restaurant = function(req, res) {
	  console.log("******Restaurant RId=",req.params.RId);
	  menu.find({restaurant_id:req.params.RId}, function(err, result) {
	    if (err)
	      {
	        console.log("-------Error in get_a_restaurant-----");
	        res.send(err);
	      }
	      console.log("*********in get_items_restaurant",result);
	      res.json(result);
	  });
	};

};

