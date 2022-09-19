

//import the Express library
let express = require('express');
const portNumber =4200;
let app = express(); //make an instance of express
let server = require('http').createServer(app);  // create a server (using the Express framework object)
 
//call the require statement
const WebSocket = require("ws");
const wss = new WebSocket.Server({server});

// serving static files
let static = require('node-static'); // for serving static files (i.e. css,js,html...)
// serve anything from this dir ...
app.use(express.static(__dirname + '/public'));

//make a route to test page...(put ontop of the first app.use())
app.use('/wsC', wsClientRequestRoute);

//default route
app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});
 


//and the function:
function wsClientRequestRoute(req, res, next) {
    res.sendFile(__dirname + '/public/ws.html');
}

// make server listen for incoming messages
server.listen(portNumber, function(){
  console.log('listening on port:: '+portNumber);
})

//wss listens for the connection event for incoming sockets, and if one is connected -:
//ws is  a single socket instance
//req is the request
wss.on('connection', function connection(ws,req) {
    const in_ip = req.connection.remoteAddress;
  //log to SERVER console
    console.log(`a connection has been established from ${in_ip}`);
  //use the socket instance to SEND message back
  ws.send("test message from server");
  

ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  
});

});