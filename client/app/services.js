angular.module('gwarRoom')
  .factory('detailService', detailService);

detailService.$inject = ['$stateParams']

function detailService($stateParams) {
  console.log("Hello from Detail Service")
  var socket = io()
  var details = []
  socket.on("machines", function(data) {
    return
  })
}
