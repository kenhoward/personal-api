var express = require('express');
	bodyParser = require('body-parser')

var app = express()
var port = 8001

app.listen(port)
console.log('listening to ' + port)

app.use(bodyParser.json()); // Is this my CORS middleware

app.use('/', function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.get('/name', function(req, res) {
	res.send(JSON.stringify({Name: 'Kenny'}));
})

app.get('/location', function(req, res) {
	res.send(JSON.stringify({City: 'Salt Lake City, Utah'}));
})

app.get('/hobbies', function(req, res) {
	res.send(JSON.stringify({Hobbies: ['Annoying Erik', 'Travelin da earf']}));
})

app.get('/occupations', function(req, res) {
	res.send(JSON.stringify({previousEmployer: ['The Royal Bank of Scotland', 'Utah Community Credit Union']}))
})

app.get('/occupations/latest', function(req, res) {
	res.send(JSON.stringify({latestEmployer: 'The unemployment line'}))
})






// var app = ('personalApi');

// app.service('mahService', function($http, $q) {
// 	this.getMahName = function() {
// 		var deferred = $q.defer();

// 		$http({
// 			method: 'GET',
// 			url: 'http://localhost:9001/api/name'
// 		}).then(function(res) {
// 			console.log(res);
// 			deferred.resolve(res);
// 		}, function(err) {
// 			deferred.resolve(err);
// 		})
// 	}
// })


// // in app.js

// // under the $routeProvider

// /*
// app.config(function($routeProvider) {
// 	$routeProvider
// 	.when('/')
// 	...
// 	...

// 	resolve {

// 	}	
// })
// */
