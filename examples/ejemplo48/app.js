var app = angular.module("miapp", []);

app.controller("mainController", function ($scope) {
	$scope.counter = 0;
	$scope.contar = function(){
		$scope.counter++;
	};
});