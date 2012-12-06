
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , beer = require('./routes/beer')
  , bar = require('./routes/bar')
  , http = require('http')
, path = require('path');

var app = express();

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
app.get('/beers/list.json', beer.JSONList);
app.get('/beers/list', beer.list);
app.get('/beers/create', beer.createForm);
app.post('/beers/create', beer.create);
app.get('/beers/:id/update', beer.updateForm);
app.post('/beers/update', beer.update)
app.get('/beers/:id/delete', beer.delete);
app.get('/beers/price/:sort', beer.list);
app.get('/beers/rate/:sort', beer.list);
app.get('/beers/:beer', beer.show);

app.get('/bars/list.json', bar.JSONList);
app.get('/bars/list', bar.list);
app.get('/bars/create', bar.createForm);
app.post('/bars/create', bar.create);
app.get('/bars/:id/update', bar.updateForm);
app.post('/bars/update', bar.update)
app.get('/bars/:id/delete', bar.delete);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
