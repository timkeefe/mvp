var express = require('express');
var server = express();

server.set('port', (process.env.PORT || 5000));

server.use(express.static(__dirname + '/public'));

// views is directory for all template files
// app.set('views', __dirname);
// app.set('view engine', 'html');
server.use(express.static(__dirname ));


server.get('/', function(request, response) {
  response.render('/index');
  // response.write('writing some stuff')
  // response.end();
});

server.listen(server.get('port'), function() {
  console.log('Node app is running on port', server.get('port'));
});

// module.exports = server;
