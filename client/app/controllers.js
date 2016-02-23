angular.module('gwarRoom')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$scope', 'detailService'];

function MainCtrl($scope, detailService) {
  console.log("Hello from Home Controller")

}
