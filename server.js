// Load express package and create app
var express = require('express');
var app = express();
var path = require('path');

// Send index.html to the user
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
    
});

// Fire da server!
app.listen(process.env.PORT, process.env.IP);
console.log("Le server iz listening");