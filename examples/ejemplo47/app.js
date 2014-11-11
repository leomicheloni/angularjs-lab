var app = angular.module("miapp", []);

app.controller("mainController", function ($scope, $window) {
	$scope.saludar = function(){
		$window.alert("hola");
	};

});