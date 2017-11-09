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

router.route("/cart")
.get(function(req, res)
{
    console.log("In Get");

    console.log(req.params.username);
      Cart.find({ 'username' :  req.params.username },
      function(err, cartd) {

        if (err){
          console.log('In error');
          res.send(err);
        }

        //console.log(cartd.quantity);
        console.log('User logged in');
        console.log(cartd);
        res.json(cartd);

      });

})
