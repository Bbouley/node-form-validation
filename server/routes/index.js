var express = require('express');
var router = express.Router();

var puppyArray = [];

var peopleArray = [];


router.get('/puppy/new', function(req, res, next){
  res.render('addpuppy');
});

router.post('/puppy/new', function(req, res, next){
  var name = req.body.puppyName;
  var id = req.body.puppyId;
  var puppy = new Puppy(name, id);
  var error1 = 'You didn\'t enter a name!';
  var error2 = 'You didn\'t enter an ID!';
  var test = emptyTestPuppy(name,id);
    if(test === 'name blank'){
      res.render('addpuppy', {error1:error1});
    } else if(test === 'id blank'){
      res.render('addpuppy', {error2:error2});
    } else if (test === 'both blank'){
      res.render('addpuppy', {error2:error2, error1:error1});
    } else if(test === true){
      puppyArray.push(puppy);
      res.redirect('/puppies');
    }
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
  var error1 = 'You didn\'t enter a name!';
  var error2 = 'You didn\'t enter an hobby!';
  var test = emptyTestPerson(name, hobby);
   if(test === 'name blank'){
      res.render('addperson', {error1:error1});
    } else if(test === 'hobby blank'){
      res.render('addperson', {error2:error2});
    } else if (test === 'both blank'){
      res.render('addperson', {error2:error2, error1:error1});
    } else if(test === true){
      peopleArray.push(person);
      res.redirect('/people');
    }
});

router.get('/people', function(req, res, next){
  res.render('showPeople', {peopleArray : peopleArray});
});



var Puppy = function(name, id){
  this.name = name;
  this.id = id;
};

var Person = function(name, hobby){
  this.name = name;
  this.hobby = hobby;
};

function emptyTestPuppy(name, id){
  if(id === '' && name === ''){
      return 'both blank';
  } else if (id === ''){
      return 'id blank';
  } else if(name === ''){
      return 'name blank';
  } else {
    return true;
  }
}

function emptyTestPerson(name, hobby){
  if (name === '' && hobby === ''){
    return 'both blank';
  } else if (name === ''){
    return 'name blank';
  } else if (hobby === ''){
    return 'hobby blank';
  } else {
    return true;
  }
}


module.exports = router;
