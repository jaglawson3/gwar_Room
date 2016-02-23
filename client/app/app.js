angular.module('gwarRoom', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    console.log("GwarRoom app.js is alive!")

    $urlRouterProvider.otherwise('/war-room');

    $stateProvider.state('/war-room', {
      templateUrl: 'templates/war-room.html',
      controller: 'MainCtrl',
      url: '/war-room'
    })
  });
