'use strict';

var express = require('express'),
		app = express(),
		bodyParser = require('body-parser'),
		methodOverride = require('method-override'),
		recipes = require('./routes/recipes');//this is the path

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use('recipes', recipes);//this is the url to run the middleware on


//-----set empty url path to /recipes
app.get('', function(req, res){
		console.log('entering redirect');
		res.redirect('recipes');
});

var port = process.env.PORT || 3000;

app.listen(port, function(){
	console.log("I am listening on " + port + ", good luck Commander...");
});
