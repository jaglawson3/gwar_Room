angular.module('gwarRoom')
   .controller('OverviewController', OverviewController)
   .controller('DetailsController', DetailsController);

function OverviewController($scope, ServerService) {
   ServerService.on(function(data) {
     $scope.servers = data;
     $scope.$apply();
   });
}

function DetailsController($scope, $stateParams, ServerService) {
   ServerService.on(function(data) {
     $scope.server = data[$stateParams.id];
     $scope.$apply();
   });
}
