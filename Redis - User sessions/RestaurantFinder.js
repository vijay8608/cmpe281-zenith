var
  bodyParser  = require('body-parser'), 
  express     = require('express'),
   
  app = express();
   
app.set('view engine', 'pug'); 
app.get(  // method "get"
  '/',   
  function(req, res) {
    res.render('index', { 
      pageTitle: 'Restaurant Finder'
    });
  }
);
 
app.post( // method "post"
  '/', 
  bodyParser.urlencoded({ extended : false }), 
  function(req,res) {
    var
      latitude  = req.body.latitude,    
      longitude = req.body.longitude;
       
    res.render('index', { 
      pageTitle : 'Restaurant Finder Results',
      latitude  : latitude,
      longitude : longitude,
      results   : []                  
    });
  }
);
 
app.listen(3000, function () {
  console.log('Sample store finder running on port 3000.');
});
