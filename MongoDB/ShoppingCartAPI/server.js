var express = require('express'),
app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
Restaurant = require('./api/models/RestaurantModel');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/ShoppingCart', { useMongoClient: true }); 

var routes = require('./api/routes/RestaurantRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('Listening ShoppingCartAPI RESTful API server on: ' + port);