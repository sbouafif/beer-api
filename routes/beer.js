exports.list = function(req, res){
    res.send({ some: 'json' });
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

exports.create = function(req, res){
    var instance = new beerModel();
    instance.name = req.body.name;
    instance.name = req.body.origin;
    instance.name = req.body.type;
    instance.name = req.body.degree;

    instance.save(function (err) {
  //
    });

    res.render('elementAdded', {title: 'Biere ajoutee', element: 'Biere', back: '/beers/create'});
 };