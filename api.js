var restaurants = mongoose.model('Restaurants');
var express = require('express');
var router = express.Router();


router.route("/restaurants")
.get(function(req, res)
{
		  Restaurants.find(function(err, advs){
			if(err){
				return res.send(500, err);
			}
			return res.send(200,advs);
		});
})
