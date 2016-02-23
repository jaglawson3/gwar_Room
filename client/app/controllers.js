angular.module('gwarRoom')
  .controller('MainController', MainController)
  .controller('DetailController', DetailController);

HomeController.$inject = ['$scope', 'GWarService'];

function MainController($scope, GWarService) {
  console.log("Hello from Home Controller")
}

DetailController.$inject = ['$scope', 'GWarService']

function DetailController($scope, GWarService) {
  console.log("Hello from the Details Controller")
}
