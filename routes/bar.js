var db = require('../models/db')
  , barModel = db.getBarModel();

exports.JSONList = function(req, res){
    db.getBarModel().find({}, function (err, bars) {
        res.contentType('json');
        res.json({
            success: true, 
            data: bars
        });
    });
};

exports.list = function(req, res){
    db.getBarModel().find({}, function (err, bars) {
        res.render('barList', {title: 'Liste des bars', bars:bars});
    });
};


exports.show = function(req, res){
    res.send('bar');
};

exports.rate = function(req, res){
};

/** Back office **/
exports.createForm = function(req, res){
    res.render('barCreate', {title:'Ajouter une biere'});
};

exports.updateForm = function(req, res){
    res.render('barUpdate', {title:'Mettre a jour une biere', objId:req.params.id});
};


exports.create = function(req, res){
    var instance = new barModel();
    instance.name = req.body.name;
    instance.address = req.body.address,
    instance.happy_start = req.body.happy_start,
    instance.happy_end = req.body.happy_end,
    instance.latitude = req.body.lat,
    instance.longitude = req.body.long,
    instance.desc = req.body.desc,
    instance.photo = req.body.photo;
    
    console.log(req.body);
    instance.save(function (err) {
  //
    });

    res.render('elementAdded', {title: 'Biere ajoutee', element: 'Biere', back: '/bars/create'});
 };

exports.update = function(req, res){
    var bar = db.getBars({_id: req.body.id});
    
    bar.update({ name: req.body.name,
                 address: req.body.address,
                 happy_start: req.body.happy_start,
                 happy_end: req.body.happy_end,
                 latitude: req.body.lat,
                 longitude: req.body.long,
                 desc: req.body.desc,
                 photo: req.body.photo
               },
               {upsert: true},
               function (err, res){
                   console.log('error: '+err+' - '+res);
               }
    );

    res.render('elementAdded', {title: 'Bar ajoute', element: 'Biere', back: '/bars/list'});
 };

exports.delete = function(req, res){
    db.getBars({_id: req.params.id}).remove();

    res.redirect('/bars/list');
}