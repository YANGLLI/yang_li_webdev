/**
 * Created by Yang on 2017/6/5.
 */
var express = require('express');

//initialize app as an express application
var app = express();

var ipaddress = '127.0.0.1';
var port      = 3000;

app.use(express.static(__dirname+'/public'));
app.listen(port, ipaddress);

console.log("hello world!");