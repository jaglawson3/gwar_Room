angular.module('gwarRoom', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    console.log("GwarRoom app.js is alive!")

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('overview', {
      templateUrl: 'templates/overview.html',
      controller: 'OverviewController',
      url: '/overview'
    }).state('details', {
      templateUrl: 'templates/details.html',
      controller: 'DetailsController',
      url: '/details/:id'
    }).state('settings', {
      templateUrl: 'templates/settings.html',
      controller: 'SettingsController',
      url: '/settings'
    })
  });
