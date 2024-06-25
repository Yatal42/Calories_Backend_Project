const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.status(200).json([
        {firstname:"Tal",lastname:"Yaakobi",id:"315788653",email:'taltal2345@gmail.com'},
        {firstname:"Gil",lastname:"Levkovitch",id:"111",email:'gil.lev@joindaisy.com'} ]);
});

module.exports = router;
