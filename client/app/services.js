angular.module('gwarRoom')
  .factory('GWarService', GWarService);

GWarService.$inject = ['$http']

function GWarService($http) {
  console.log("Hello from Real Estate Service")
}
