'use strict';

angular.module('q3AssessmentApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('myroute', {
        url: '/',
        templateUrl: 'app/myroute/myroute.html',
        controller: 'MyrouteCtrl'
      });
  });
