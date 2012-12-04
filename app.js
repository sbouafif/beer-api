
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , beer = require('./routes/beer')
  , bar = require('./routes/bar')
  , http = require('http')
  , path = require('path')
  , mongoose = require('mongoose');

var app = express();

var db = mongoose.createConnection('localhost', 'beer-api')
  , Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

var Beer = new Schema({
    name: String
  , origin: String
  , type: String
  , degree: Number
  , price: ObjectId
  , rate: ObjectId
});

var beerModel = db.model('beers', Beer);

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/beers', beer.list);
app.get('/beers/create', beer.createForm);
app.post('/beers/create', beer.create);
app.get('/beers/price/:sort', beer.list);
app.get('/beers/rate/:sort', beer.list);
app.get('/beers/:beer', beer.show);


http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
