/**
 * Created by Yang on 2017/6/5.
 */
var express = require('express');

//initialize app as an express application
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname+'/public'));
require ("./test/app.js")(app);

var port = process.env.PORT || 3000;

app.listen(port);
