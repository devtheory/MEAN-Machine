// Load express package and create app
var express = require('express');
var app = express();
var path = require('path');

// Send index.html to the user
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
    
});

// Create routes for the admin section

// get an instance of the router
var adminRouter = express.Router();

// route middleware that will happen on every request
adminRouter.use(function(req, res, next){ // defines middleware
  // log each request to the console
  console.log(req.method, req.url);
  // and continue with routing
  next();
});

// route middleware to validate :name
adminRouter.param('name', function(req, res, next, name){
  //validation stuff here
  console.log("validating the name: " + name);
  
  //if validations pass, then save name as a param to the request
  req.name = name;
  
  // and move on!
  next();
});
// admin page. the dashboard http://localhost:1337/admin
adminRouter.get('/', function(req, res){
    res.send("This is the dashboard");
});

// users page. http://localhost:1337/admin/users
adminRouter.get('/users', function(req, res){
    res.send("Here are all the users");
});

// route with params in request
adminRouter.get('/users/:name', function(req, res){
  res.send("Hello, " + req.name + "!");
});

// posts page. http://localhost:1337/admin/posts
adminRouter.get('/posts', function(req, res){
    res.send("Here are the posts");
});

// apply the routes to our application
app.use('/admin', adminRouter); //admin creates the root for all routes defined for adminRouter

// Fire da server!
app.listen(process.env.PORT, process.env.IP);
console.log("Le server iz listening");