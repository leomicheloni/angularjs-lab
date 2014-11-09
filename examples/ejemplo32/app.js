var app = angular.module("miapp", []);
app.controller("mainController", function($scope, $http){
	$http.get("data.json").success(function(data){
		$scope.nombres = data;
	});
});