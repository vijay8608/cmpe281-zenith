'use strict';

module.exports = function(app) {
  var restaurantCtrl = require('../controllers/RestaurantController');

  app.route('/')
    .get(restaurantCtrl.justGet);

  // Restaurant Routes
  app.route('/restaurants')
    .get(restaurantCtrl.list_all_restaurants);
};
