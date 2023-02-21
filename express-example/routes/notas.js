const Notas = require('../models/Notas');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    Notas.findAll().then(notas => {
        res.send({
            notas
        });
    });
});

module.exports = router;
