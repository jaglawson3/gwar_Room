angular.module('gwarRoom', ['ui.router'])

  .config(function($stateRouterProvider, $locationProvider) {
    console.log("GwarRoom app.js is alive!")
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('/', {
      templateUrl: 'templates/main.html',
      controller: 'MainController',
      url: '/main'
    }).state('detail', {
      templateUrl: 'templates/details.html',
      controller: 'DetailController',
      url: '/home/:id'
    })
  });
