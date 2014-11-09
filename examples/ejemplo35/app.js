var app = angular.module("miapp", ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider.when("/", {
		controller: "mainController",
		template: "<ul><li ng-repeat='nombre in nombres'>{{nombre}}</li></ul>"
	});
});

app.controller("mainController", function($scope, usuarios){	
	usuarios.get().success(function(data){
		$scope.nombres = data;
	});
});

app.factory("usuarios", function($http){
	return {
		get: 	function() {
		return $http.jsonp("http://localhost:3002/data.json?callback=JSON_CALLBACK");
		}
	};
});