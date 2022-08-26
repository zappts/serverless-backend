var express = require('express');
var router = express.Router();

//  /lottery?type=megasena
router.get('/', function (req, res, next) {
    let numberArray = new Set();
    if (!req.query.type) {
        res.statusCode = 400;
        res.send({
            error: "type is mandatory in query string"
        })
        return;
    }
    if (req.query.type === 'megasena') {
        while (numberArray.size != 6) {
            console.log(numberArray.size);
            numberArray.add(Math.floor(Math.random() * 60) + 1);
        }

    }

    res.send({
        numbers: Array.from(numberArray.values())
    });
});

module.exports = router;
