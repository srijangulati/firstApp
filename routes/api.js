//require modules
var express = require('express');
var app = express();

//middlewares
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//routes
app.post('/request',function(req,res){
    console.log('getting a request from user');
    res.send(req.body);
});

module.exports = app;