var Express = require("express");
var Socket = require("socket.io");
var http = require("http");
var unirest = require('unirest');
var warroom = require("./warroom-client");
var db = require('monk')('mongodb://localhost/gwarroom');
var database = db.get('info');

var app = Express();
var server = http.createServer(app);
var io = Socket(server);

app.use(Express.static("./client"));

var port = (process.env.PORT || '3000');
app.set('port', port);

server.listen(port);

server.listen(port, function () {
  console.log("listening on " + port)
});

io.on('connection', function (socket) {
 	warroom(function(err, data) {
 		if(err){
 			console.log(err);
 			return
 		} else {
 			var zeeData = data.data;
 			storageData = zeeData.map(function(server){
 			return new Promise(function(resolve, reject) {
 				storeData(server)
 					.then(function(sever) {
 						averageIt(server)
 						resolve(server)
 					})
 				})
 			})
 		}
 		Promise.all(storageData).then(function(servers) {
 			socket.emit("status", {
 				body: {
 					data: servers
 				}
 			})
 		}).then(function(storageData){
 			console.log('stored data!')
 		})
 	})
 });

 function averageIt(data) {
  	return new Promise(function(res, rej){
  		db.get('info').find({ id: data.id }).success(function(results) {
  			var average;
  			for(var info in results) {
  				average = average + results[info].responseTime;
  			}
  			data.average = average / 100;
  			res(data);
  		})
  	})
 };

 function storeData(data) {
  	return db.get('info').insert({
  		id: data.id,
  		responseTime: data.responseTime,
   })
 }
