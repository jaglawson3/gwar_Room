angular.module('gwarRoom')
  .controller('MainController', HomeController)
  .controller('DetailController', DetailController);

HomeController.$inject = ['$scope', 'GWarService'];

function MainController($scope, GWarService) {
  console.log("Hello from Home Controller")
}

DetailController.$inject = ['$scope', 'GWarService', '$stateParams', 'BidService']

function DetailController($scope, GWarService, $stateParams) {
  console.log("Hello from the Details Controller")
}
