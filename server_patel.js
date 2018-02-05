var express = require('express');
var mysql = require('mysql');
var http = require('http');
var bodyParser = require('body-parser');

var app = express();
// app.use(express.static(__dirname + '/client'));

// parse all from data
app.use(bodyParser.urlencoded({extended: true}));

// defines now
var dataFormat = require('dateformat');
var now = new Date();

// view engine, tamplate parsing (EJS types)
app.set('view engine' , 'ejs');

// JS and CSS files
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/tether/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));





var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'sampledb',
});


connection.connect(function(error){
	//callback
	if(error){
		console.log('Error');
	} else {
		console.log('Connected');
	}
})

// express wait for the user to enter a URL
app.get('/',function(req,resp){
    resp.end("here comes the html...")

})

app.listen(1337, function(){
	console.log('listening on 1337');
});
