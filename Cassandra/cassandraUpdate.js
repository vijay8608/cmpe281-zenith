
var cassandra = require('cassandra-driver');
var async = require('async');
 //Connect to the cluster
var client = new cassandra.Client({contactPoints: ['127.0.0.1'], keyspace: 'doordash'});


// Read users and update to doordash
   function (callback) {
       client.execute("update user_doordash set order_quantity =2 WHERE restaurant_id='Starbucks001'", function (err, result) {
           if (!err){
               
                   console.log("Successful update into doordash");
               } else {
                   console.log("Unsuccessful...Error");
               }
           }
 
           // 
           callback(err, null);
       });
   }
], function (err, results) {
   // All finished, quit
   process.exit();
});
