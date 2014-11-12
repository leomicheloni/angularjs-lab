var app = angular.module("miapp", ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider.when("/", {
		controller: "mainController",
		templateUrl: "list.tmpl"
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
			return $http.get("data.json");
		}
	};
});