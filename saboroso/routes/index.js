var conn = require('./../inc/db');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  conn.query(`
  
  SELECT * FROM tb_menus ORDER BY title

  `, (err, results)=>{

    if(err){
      console.log(err);
    }

    res.render('index', { 
      title: 'Restaurante Saboroso!',
      menus: results
  });
  });
});

router.get('/menus', function(req, res, next){

  res.render('menus', {
    title: 'menus - Restaurante Saboroso!',
    background: 'images/img_bg_1.jpg',
    h1: 'Saboreie nosso menu!'
  });

});

router.get('/reservations', function(req, res, next){

  res.render('reservations', {
    title: 'reservations - Restaurante Saboroso!',
    background: 'images/img_bg_2.jpg',
    h1: 'Reserve uma Mesa!'
  });

});

router.get('/services', function(req, res, next){

  res.render('services', {
    title: 'services - Restaurante Saboroso!',
    background: 'images/img_bg_1.jpg',
    h1: 'É um prazer poder servir!'
  });

});

router.get('/contacts', function(req, res, next){

  res.render('contacts', {
    title: 'contacts - Restaurante Saboroso!',
    background: 'images/img_bg_3.jpg',
    h1: 'Diga um oi!'
  });

});


module.exports = router;
