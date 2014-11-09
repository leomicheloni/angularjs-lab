var app = angular.module("miapp", ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider.when("/", {
		controller: "mainController",
		templateUrl: "list.tmpl"
	});
	
	$routeProvider.when("/404",{
		templateUrl: "notfound.tmpl",
		controller: "notFoundController"
	});

	$routeProvider.otherwise({
		redirectTo: "/404"
	});
});

app.controller("mainController", function($scope, usuarios){	
	usuarios.get().success(function(data){
		$scope.nombres = data;
	});
});

app.controller("notFoundController", function(){
});

app.factory("usuarios", function($http){
	return {
		get: 	function() {
			return $http.jsonp("http://localhost:3002/data.json?callback=JSON_CALLBACK");
		}
	};
});