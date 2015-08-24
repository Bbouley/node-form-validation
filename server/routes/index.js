var express = require('express');
var router = express.Router();

var puppyArray = [];

// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Add a Puppy' });
// });

router.get('/puppy/new', function(req, res, next){
  res.render('addpuppy');
});

router.post('/puppy/new', function(req, res, next){
  var name = req.body.puppyName;
  var id = req.body.puppyId;
  var puppy = new Puppy(name, id);
  puppyArray.push(puppy);
  console.log(puppyArray);
  res.redirect('/puppies');
});

router.get('/puppies', function(req, res, next){
  res.render('showPuppies', {puppyArray : puppyArray});
});

router.get('/people/new', function(req, res, next){

})



module.exports = router;

var Puppy = function(name, id){
  this.name = name;
  this.id = id;
};
