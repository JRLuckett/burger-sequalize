var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var router = express.Router();
var models = require('../models');

router.get('/', function(req, res) {
    models.Burgers.findAll().then(function(data){
    var hbsObject = {
      Burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post('/', function(req, res) {
     models.Burgers.create({
        name: req.body.name,
        devoured: 0
     }).then(function(){
    res.redirect("/");
     });
});

router.put('/:id', function(req, res) {
   models.Burgers.update({
    devoured:1
    },{where:{
        id:req.params.id
    }}
   ).then(function(){
        res.redirect('/');
   });
});

router.delete('/:id', function(req, res) {
    models.Burgers.destroy(
        {where:{
            id:req.params.id
        }}).then(function(){
            res.redirect("/");
        });
});
router.use(function(req, res) {
    res.redirect('/');
});
//export
module.exports = router;
