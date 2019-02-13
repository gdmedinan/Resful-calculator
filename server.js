var express = require( 'express'),
   app = express(),
   port = process.env.PORT || 3001,
   mongoose = require('mongoose'),
   Calc = require('./api/models/calculatorModel'),
   bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Calcdb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/calculatorRoutes'); //importing route
routes(app); //register the route


app.listen(port);

console.log('calculator rest API server started and listening on: ' + port);
