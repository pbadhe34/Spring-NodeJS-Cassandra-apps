var http = require('http');
var fs = require('fs');
var url = require('url');
var address = getIPAddress();

// Create a server
var server = http.createServer( function (request, response) {  
   // Parse the request containing file name
   var pathname = url.parse(request.url).pathname;
   
   // Print the name of the file for which request is made.
   console.log("Request for " + pathname + " received.");

response.writeHead(200, {'Content-Type': 'text/html'});	
         
     // Write the content of the file to response body
    var address = request.connection.localAddress
    var port = request.connection.localPort;

   //address = request.connection.remoteAddress;
  // port = request.connection.remotePort;
 //console.log(address+"\n");
 //console.log(port+"\n");
     response.write("Hey There..I am running on "+ getIPAddress()+" with port "+port);		
     response.end();
    
}).listen(3400, getIPAddress());

// Console will print the message
console.log('Server running at '+address);

 

function getIPAddress() {
  var interfaces = require('os').networkInterfaces();
  for (var devName in interfaces) {
    var iface = interfaces[devName];

    for (var i = 0; i < iface.length; i++) {
      var alias = iface[i];
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal)
        return alias.address;
    }
  }

  return '0.0.0.0';
}