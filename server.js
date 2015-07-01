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

// admin page. the dashboard http://localhost:1337/admin
adminRouter.get('/', function(req, res){
    res.send("This is the dashboard");
});

// users page. http://localhost:1337/admin/users
adminRouter.get('/users', function(req, res){
    res.send("Here are all the users");
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