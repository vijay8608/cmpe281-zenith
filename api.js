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


.post(function(req, res)
{
  var username = req.param("username");
  var type = req.param("type");
  var description = req.param("description");
  var quantity = req.param("quantity");
  var price = req.param("price");

  console.log('In cart post');
  console.log(username);
  console.log(type);
  console.log(description);
  console.log(quantity);
  console.log(price);
  var cart_details = new Cart();

  cart_details.username = username;
  cart_details.type = type;
  cart_details.description = description;
  cart_details.quantity = quantity;
  cart_details.price = price;
console.log(':::::::::::::::::::::::');
cart_details.save(function(err) {
    if (err){
      console.log('Error in Saving details: '+err);
      throw err;
    }
    console.log('Done');
  });
    return res.send('In cart post');
});
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
