var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(req, res) {
	var fs = require('fs');
	var buf = new Buffer('index.html'), 'utf-8');
	response.send(buf.toString());
});
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
