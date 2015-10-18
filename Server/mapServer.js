var express = require('express');
var app = express();
var controller = require('./Server/controller');

app.get('/', function(req, res) {
	res.sendfile('/home/michael/Dropbox/Map Project/Client/HomePage.html');
})

app.listen(3000, function() {
	console.log('hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii');
});