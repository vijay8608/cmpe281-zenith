var express    = require("express");
var mysql      = require('mysql');
var app		   = express();
/*
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Vijay@2017',
  database : 'Online_food_ordering'
});
*/

var pool      =    mysql.createPool({
    connectionLimit : 100, //important
    host     : 'localhost',
    user     : 'root',
    password : 'Vijay@2017',
    database : 'Online_food_ordering',
    debug    :  false
});


//connection.connect();

/*
connection.query("SELECT * from users", function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
});

connection.end();

*/

/*
connection.connect(function(err) {
  if (err) throw err;
  connection.query("SELECT * FROM users", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});

connection.end();
*/
/*
connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");    
} else {
    console.log("Error connecting database ... nn");    
}
});

app.get("/",function(req,res){
connection.query('SELECT * from users', function(err, rows, fields) {
connection.end();
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
  });
});


app.listen(3000);

*/



function handle_database(req,res) {
    
    pool.getConnection(function(err,connection){
        if (err) {
          res.json({"code" : 100, "status" : "Error in connection database"});
          return;
        }   

        console.log('connected as id ' + connection.threadId);
        
        connection.query("select * from users",function(err,rows){
            connection.release();
            if(!err) {
                res.json(rows);
            }           
        });

        connection.on('error', function(err) {      
              res.json({"code" : 100, "status" : "Error in connection database"});
              return;     
        });
  });
}

app.get("/",function(req,res){-
        handle_database(req,res);
});

app.listen(3000);