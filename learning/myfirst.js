var http = require ('http');

http.createServer(function (req , res){



  res.write(' hello');
  res.end('hello d!');
}).listen(8080);
