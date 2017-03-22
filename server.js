var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

var app = express();
var db = require("./models");

var routes = require('./controller/burger-controller.js');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(methodOverride('_method'));

app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use('/', routes);

app.listen(process.env.PORT || 3000);

db.sequelize.sync();
