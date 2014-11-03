var arguments = process.argv.slice(2);
var connect = require('connect');
var http = require('http');
var port = arguments[1] || 3001;

connect()
    .use(connect.static(arguments[0]))
    .listen(port);