var http = require('http');
var dt = require('./module');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    // res.write('<h2 style="text-align: center;">the date and time is currently:</h2> ' + dt.myDateTime());
    res.write('<h2 style="text-align: center;">The date and time is currently:</h2> ' + dt.myDateTime());
    res.end();

}).listen(8080);

console.log('Server running at http://localhost:8080/');

// server.js

// var http = require('http');
// var dt = require('./module');

// http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});  // Corrected 'text/hhtml' to 'text/html'
    // res.write('<h2 style="text-align: center;">The date and time is currently:</h2> ' + dt.myDateTime());
//     res.end();
// }).listen(8080);

// console.log('Server running at http://localhost:8080/');
