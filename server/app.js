var Express = require("express")
var Socket = require("socket.io")
var http = require("http")
var unirest = require('unirest')
var db = require('monk')('localhost/realState')

var app = Express()
var server = http.Server(app)
var io = Socket(server)
