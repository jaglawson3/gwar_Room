var Express = require("express")
var Socket = require("socket.io")
var http = require("http")
var unirest = require('unirest')
var warroom = require("./warroom-client")
var db = require('monk')('localhost/gwarRoom')

var app = Express()
var server = http.Server(app)
var io = Socket(server)


app.use(Express.static("./client"))

// warroom((error, data) => console.log(data))



warroom(function (error, data) {
  setInterval(function () {
    var server1 = [];
    var server2 = [];
    var server3 = [];
    function getDetailData () {
      server1.push(data.data[0].name, data.data[0].cpu, data.data[0].cpu, data.data[0].memory);
      server2.push(data.data[1].name, data.data[1].cpu, data.data[1].cpu, data.data[1].memory);
      server3.push(data.data[2].name, data.data[2].cpu, data.data[2].cpu, data.data[2].memory);
    }
    getDetailData();
    console.log(server1, server2, server3);
    // console.log(data) // OR insert this data...
  }, 2000)
})

io.on("connection", function (socket) {
  socket.emit("machines", {
    servers: server1, server2, server3
  })
})


app.listen(process.env.PORT || 3000)

server.listen(8080, function () {
  console.log("listening on 8080")
})

//socket.emit on this
//socket.on and li
