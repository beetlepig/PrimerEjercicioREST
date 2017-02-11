var express = require('express');
var router = express.Router();
var DB= require('../public/javascripts/usersDB');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/process', function(req, res){
    console.log('Form (from querystring): ' + req.query.form);
    console.log('CSRF token (from hidden form field): ' + req.body._csrf);
    console.log('Name (from visible form field): ' + req.body.name);
    console.log('Email (from visible form field): ' + req.body.email);
    DB.create(req.body.name,req.body.email);


    res.redirect(303, '/users');

});

module.exports = router;
