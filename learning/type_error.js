// Import the required module
const http = require('http');

// Define the hostname and port
const hostname = '127.0.0.1';
const port = 3000;

// Create the server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and content type
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Send the response body
  res.end('welcome to my node_js\n');
});

// Make the server listen on the specified port
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});