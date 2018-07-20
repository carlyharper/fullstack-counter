var express = require('express');
var router = express.Router();

let counter = 0;

router.get('/', function(req, res, next) {
    res.json( { counter: counter} )
});

router.post('/add', function(req, res, next) {
    counter++;
    res.json( { counter: counter } )
});

router.post('/subtract', function(req, res, next) {
    counter--;
    res.json( { counter: counter } )
});

module.exports = router;