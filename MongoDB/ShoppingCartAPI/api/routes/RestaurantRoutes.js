'use strict';

module.exports = function(app) {
  var restaurantCtrl = require('../controllers/RestaurantController');
  var menuItemCtrl = require('../controllers/MenuItemController');

  //app.route('/')
  //  .get(restaurantCtrl.justGet);

  // Restaurant Routes
  app.route('/restaurants')
    .get(restaurantCtrl.list_all_restaurants);

  app.route('/restaurants/:id')
    .get(restaurantCtrl.get_a_restaurant);

  // Menu Routes
   app.route('/menuItems')
  	.get(menuItemCtrl.list_all_menuItems);

};
