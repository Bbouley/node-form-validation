var express = require('express');
var router = express.Router();

var puppyArray = [];

var peopleArray = [];

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
  res.redirect('/puppies');
});

router.get('/puppies', function(req, res, next){
  res.render('showPuppies', {puppyArray : puppyArray});
});


router.get('/people/new', function(req, res, next){
  res.render('addperson');
});


router.post('/people/new', function(req, res, next){
  var name = req.body.personName;
  var hobby = req.body.personHobby;
  var person = new Person(name, hobby);
  peopleArray.push(person);
  console.log(peopleArray);
  res.redirect('/people');
});

router.get('/people', function(req, res, next){
  res.render('showPeople', {peopleArray : peopleArray});
});



module.exports = router;

var Puppy = function(name, id){
  this.name = name;
  this.id = id;
};

var Person = function(name, hobby){
  this.name = name;
  this.hobby = hobby;
};
