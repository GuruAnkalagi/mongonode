var express = require('express');
var app = express();
var http = require('http');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";



app.get('/getdata/customer', function (req, res) {

	MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("testpeople");
  /*var myobj = { name: "BEL", address: "mattikere" };
    dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });*/

	dbo.collection("customers").find({}).toArray(function(err, result) {
    if (err) throw err;
    res.json(result);
    db.close();
  });

});

});



http.createServer(app).listen(1300, function (err) 
{
	console.log('running server on port 1300');
});