var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
app.use(session({
	secret: 'bigfohteen',
	resave: false,
	saveUninitialized: true,
	cookie: { maxAge: 60000 }
}));
var flash = require('express-flash');
app.use(flash());
require('./server/config/mongoose.js');
require('./server/models/token.js');
app.use(bodyParser.json());
var path = require('path');
app.use(express.static(path.join(__dirname, 'public/dist/public')));
require('./server/config/routes.js')(app)

app.listen(8000, function() {
	console.log('listening on port 8000');
})
