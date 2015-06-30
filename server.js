// Grab the HTTP and File system modules
var http = require('http');
var fs   = require('fs');

// Create our server using the HTTP module
http.createServer(function(req, res){
    
    //write to the server. set config for response
    res.writeHead(200, {
        'Content-Type': 'text/html',
        'Access-Controll-Allow-Origin': '*'
    });
    
    //grab index.html from fs
    var readStream = fs.createReadStream(__dirname + '/index.html');
    
    //send the file to the user
    readStream.pipe(res);
    
}).listen(process.env.PORT, process.env.IP); //for C9, bind to $PORT and $IP

// Info
console.log('Visit me at http://localhost:' + process.env.PORT);

