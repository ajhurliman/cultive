var express       = require('express');
var server        = express();
process.env.PWD   = process.cwd();



server.set('port', process.env.PORT || 3000);
server.use(express.static( process.env.PWD + '/build'));

server.listen( server.get('port'), function() {
  console.log( 'server started on port %d', server.get('port'))
});

module.exports = server;
