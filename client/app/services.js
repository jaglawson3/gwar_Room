angular.module('gwarRoom')
   .factory('ServerService', ServerService);

 function ServerService() {
   console.log("I will get your data from you if it kills me!")

   var socket = io();
   var callbacks = [];

   socket.on('status', function(data) {
     callbacks.forEach(function (callback) {
       callback(data.body.data);
     });
   });

   return {
     on: function (callback) {
       callbacks.push(callback);
     }
   };
 }
