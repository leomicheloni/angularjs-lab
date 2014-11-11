var app = angular.module("miapp", ["ngRoute"]);

app.controller("mainController", function($scope){	
	$scope.nombre  = "Hernán";
	$scope.apellido = "Crespo";
});

app.directive("tplUsuario", function(){
	return {
		template: "<label>hola {{nombre}}, {{apellido}}</label>"
	};
});