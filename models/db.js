var mongoose = require('mongoose');

exports.getObjId = function (){
  var db = mongoose.createConnection('localhost', 'beerAPI')
    , Schema = mongoose.Schema
    , ObjectId = Schema.ObjectId;

    return ObjectId;
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
  , price: ObjectId
  , rate: ObjectId
  });
  
    return db.model('beers', Beer);
};

exports.getBeers = function(selector) {
    var db = mongoose.createConnection('localhost', 'beerAPI');

    return db.model('beers').find(selector);
};