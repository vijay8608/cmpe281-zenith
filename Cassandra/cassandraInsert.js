var cassandra = require('cassandra-driver');
var async = require('async');
 //Connect to the cluster
var client = new cassandra.Client({contactPoints: ['127.0.0.1'], keyspace: 'doordash'});
Now that you are connected to the “demo” keyspace, let’s insert a user into the “users” table:

// Read users and insert to doordash
   function (callback) {
       client.execute("insert into user_doordash (user_id, restaurant_id, order_id int, order_item, order_quantity, order_price, order_date_time) values(?,?,?,?,?,?), ['Sachin','Starbucks001',111,'Pizza',1,10,2017-11-17 13:30:54.234]", function (err, result) {
           if (!err){
               
                   console.log("Successful insert into doordash");
               } else {
                   console.log("Unsuccessful...Error");
               }
           }
 
           // 
           callback(err, null);
       });
   },
  function (callback) {
       client.execute("insert into order_doordash (order_id, order_item, order_quantity, order_price) values(?,?,?,?), [127,'Pizza',1,10]", function (err, result) {
           if ( result.rows.length > 0 ) {
              console.log("Successful insert into doordash");
           } else {
               console.log("Unsuccessful...Error");
           }
 
           // 
           callback(err, null);
       });
   }
], function (err, results) {
   // All finished, quit
   process.exit();
});
