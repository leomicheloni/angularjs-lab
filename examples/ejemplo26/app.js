var myApp = angular.module('app', []);
myApp.controller('MainController', function($scope) {
  $scope.timeOfDay = 'morning';
  $scope.name = 'Nikki';
});
myApp.controller('ChildController', function($scope) {
  $scope.name = 'Mattie';
});
myApp.controller('GrandChildController', function($scope) {
  $scope.timeOfDay = 'evening';
  $scope.name = 'Gingerbread Baby';
});