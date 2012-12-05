var db = require('../models/db')
  , beerModel = db.getBeerModel();

exports.JSONList = function(req, res){
    db.getBeerModel().find({}, function (err, beers) {
        res.contentType('json');
        res.json({
            success: true, 
            data: beers
        });
    });
};

exports.list = function(req, res){
    db.getBeerModel().find({}, function (err, beers) {
        res.render('beerList', {title: 'Liste des bieres', beers:beers});
    });
};


exports.show = function(req, res){
    res.send('beer');
};

exports.rate = function(req, res){
};

/** Back office **/
exports.createForm = function(req, res){
    res.render('beerCreate', {title:'Ajouter une biere'});
};

exports.updateForm = function(req, res){
    res.render('beerUpdate', {title:'Mettre a jour une biere', objId:req.params.id});
};


exports.create = function(req, res){
    var instance = new beerModel();
    instance.name = req.body.name;
    instance.origin = req.body.origin;
    instance.type = req.body.type;
    instance.degree = req.body.degree;
    instance.desc = req.body.desc;
    
    console.log(req.body);
    instance.save(function (err) {
  //
    });

    res.render('elementAdded', {title: 'Biere ajoutee', element: 'Biere', back: '/beers/create'});
 };

exports.update = function(req, res){
    var beer = db.getBeers({_id: req.body.id});
    
    beer.update({ name: req.body.name,
                      origin: req.body.origin,
                      type: req.body.type,
                      degree: req.body.degree,
                      desc: req.body.desc
                    },
                    {upsert: true},
                    function (err, res){
                         console.log('error: '+err+' - '+res);
                     }
    );

    res.render('elementAdded', {title: 'Biere ajoutee', element: 'Biere', back: '/beers/list'});
 };

exports.delete = function(req, res){
    db.getBeers({_id: req.params.id}).remove();

    res.redirect('/beers/list');
}