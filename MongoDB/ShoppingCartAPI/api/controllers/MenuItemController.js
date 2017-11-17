'use strict';
var mongoose = require('mongoose');

var menuItems = mongoose.model('menuItems');

exports.list_all_menuItems = function(req, res) {

/*tests.find({}, function(err, result) {
	if (err)
    {
      console.log("-------In error-----");
      res.send(err);
    }
  	console.log("*********in Test",result);
});
*/
  menuItems.find({}, function(err, result) {
    if (err)
      {
        console.log("-------In error-----");
        res.send(err);
      }
      console.log("*********in get all menuItems",result);
  });

};

