var express = require('express');
var router = express.Router();
var os = require('os');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { freemem: os.freemem() ,totalmem:os.totalmem()});
});

module.exports = router;

//var period = 1000;
//var intervalObject  = setInterval(function(){
//  console.info(os.freemem())
//  console.info(os.totalmem())
//
//},period);