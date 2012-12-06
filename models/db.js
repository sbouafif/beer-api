var mongoose = require('mongoose');

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
  , price: ObjectId
  , rate: ObjectId
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
  , beers: ObjectId
  , rate: ObjectId
  , prices: ObjectId
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