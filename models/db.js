var mongoose = require('mongoose');

exports.getBeerPriceForBarModel = function(){
  var db = mongoose.createConnection('localhost', 'beerAPI')
    , Schema = mongoose.Schema
    , ObjectId = Schema.ObjectId;

    var Price = new Schema({
        price: Number,
        beer: ObjectId,
        bar: ObjectId
    });

    return db.model('prices', Price);
};

exports.getBarRatesModel = function() {
  var db = mongoose.createConnection('localhost', 'beerAPI')
    , Schema = mongoose.Schema
    , ObjectId = Schema.ObjectId;

    var Rate = new Schema({
        rate: Number,
        bar: ObjectId
    });

    return db.model('rateBars', Rate);
}

exports.getBeerRatesModel = function() {
  var db = mongoose.createConnection('localhost', 'beerAPI')
    , Schema = mongoose.Schema
    , ObjectId = Schema.ObjectId;


    var Rate = new Schema({
        rate: Number,
        beer: ObjectId
    });

    return db.model('rateBeers', Rate);
};

exports.getBeerModel = function(){
  var db = mongoose.createConnection('localhost', 'beerAPI')
    , Schema = mongoose.Schema
    , ObjectId = Schema.ObjectId;
 

  var Beer = new Schema({
    name: String
  , origin: String
  , type: String
  , degree: Number
  , desc: String
  });
  
    return db.model('beers', Beer);
};


exports.getBarModel = function(){
  var db = mongoose.createConnection('localhost', 'beerAPI')
    , Schema = mongoose.Schema
    , ObjectId = Schema.ObjectId;
 

  var Bar = new Schema({
    name: String
  , address: String
  , happy_start: Number
  , happy_end: Number
  , latitude: Number
  , longitude: Number
  , desc: String
  , photo: String
  });
  
    return db.model('bars', Bar);
};

exports.getBeers = function(selector) {
    var db = mongoose.createConnection('localhost', 'beerAPI');

    return db.model('beers').find(selector);
};

exports.getBars = function(selector) {
    var db = mongoose.createConnection('localhost', 'beerAPI');

    return db.model('bars').find(selector);
};