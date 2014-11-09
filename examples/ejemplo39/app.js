var app = angular.module("miapp", ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider.when("/:nombre", {
		controller: "mainController",
		templateUrl: "main.tmpl"
	});
});

app.controller("mainController", function($scope, $routeParams){	
	$scope.nombre = $routeParams.nombre;
});