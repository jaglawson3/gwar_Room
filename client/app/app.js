angular.module('gwarRoom', ['ui.router'])

  .config(function($stateRouterProvider, $urlRouterProvider) {
    console.log("GwarRoom app.js is alive!")
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('/war-room', {
      templateUrl: 'war-room.html',
      controller: 'MainController',
      url: '/war-room'
    }).state('detail', {
      templateUrl: 'templates/details.html',
      controller: 'DetailController',
      url: '/home/:id'
    })
  });
