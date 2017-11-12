/**
  Loading all dependencies.
**/
var express         =     require("express");
var redis           =     require("redis");
var mysql           =     require("mysql");
var session         =     require('express-session');
var redisStore      =     require('connect-redis')(session);
var bodyParser      =     require('body-parser');
var cookieParser    =     require('cookie-parser');
var path            =     require("path");
var async           =     require("async");
var client          =     redis.createClient();
var app             =     express();
var router          =     express.Router();


var pool    =   mysql.createPool({
    connectionLimit : 100,
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'redis_demo',
    debug    :  false
});

app.set('views', path.join(__dirname,'../','views'));
app.engine('html', require('ejs').renderFile);

// IMPORTANT
// Here we tell Express to use Redis as session store.
// We pass Redis credentials and port information.
// And express does the rest ! 

app.use(session({
    secret: 'ssshhhhh',
    store: new redisStore({ host: 'localhost', port: 6379, client: client,ttl :  260}),
    saveUninitialized: false,
    resave: false
}));
app.use(cookieParser("secretSign#143_!223"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
