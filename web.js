var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
	fs.readFileSync('index.html', function(err, data) {
	if(err) throw err;
 	console.log(data);
});
 // response.send('Kickstarter from scratch');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
