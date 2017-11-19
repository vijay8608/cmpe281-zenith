
var cassandra = require('cassandra-driver');
var async = require('async');
 //Connect to the cluster
var client = new cassandra.Client({contactPoints: ['127.0.0.1'], keyspace: 'doordash'});


// Read users and delete from doordash
   function (callback) {
       client.execute("delete from user_doordash WHERE restaurant_id='Starbucks001'", function (err, result) {
           if (!err){
               
                   console.log("Successful delete into doordash");
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
