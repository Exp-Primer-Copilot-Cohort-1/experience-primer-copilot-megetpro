// Create web server
// Create a web server that can listen to requests for /hello and respond with some HTML that says <h1>Hello World!</h1>
// For an extra challenge, make the homepage (localhost:8080) display a file index that links to your two pages.

var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function(req,res){
  var path = url.parse(req.url).pathname;
  switch(path){
    case '/':
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('Hello World!');
      break;
    case '/comments.html':
      fs.readFile(__dirname + path, function(err,data){
        if(err){
          res.writeHead(404);
          res.write('File not found');
        } else {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data);
        }
      });
      break;
    case '/hello.html':
      fs.readFile(__dirname + path, function(err,data){
        if(err){
          res.writeHead(404);
          res.write('File not found');
        } else {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data);
        }
      });
      break;
    default:
      res.writeHead(404);
      res.write('Route not defined');
      break;
  }
  res.end();
});

server.listen(8080);
console.log('Server listening on port 8080');