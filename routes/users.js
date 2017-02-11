var express = require('express');
var DB= require('../public/javascripts/usersDB');
var router = express.Router();
var ids=[

];

for (i=0; i<DB.ckecksize(); i++){
    ids.push(i);
}

/* GET users listing. */
router.get('/', function(req, res, next) {
 // res.send('respond with a resource');
    console.log(DB.getall());
    console.log(ids);

    res.render('usersView',{users:DB.getall()});

});






router.get('/:userId', function(req, res, next) {
    // res.send('respond with a resource');
    console.log(DB.getuser(req.params.userId));
    res.render('usersView',DB.getuser(req.params.userId));
});



router.delete('/:userId', function(req,res,next){
    var id=req.params.userId;

    var idnumber= parseInt(id);
    console.log(typeof  idnumber)
    console.log(idnumber)




   if(!isNaN(idnumber)){
       console.log('Debo borrar el usuario con id: '+idnumber);
       DB.delte(idnumber);
       res.redirect(303, '/');
    }else {
       console.log('introducir un numero');
       res.end('introducir un numero');
   }



});





module.exports = router;
