angular.module('gwarRoom')
  .controller('MainController', MainController);

MainController.$inject = ['$scope', 'GWarService'];

function MainController($scope, GWarService) {
  console.log("Hello from Home Controller")
}
