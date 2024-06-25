const express = require('express');
const router = express.Router();
const Calorie = require('../models/calories');

router.get('/calories',function(req,res,next){
    Calorie.find({}).then(function(calories){
        res.send(calories);
    }).catch(next);
});

router.post('/calories',function(   req,res,next){
    Calorie.create(req.body).then(function(ob){
        res.send(ob);
    }).catch(next);
});

module.exports = router;
