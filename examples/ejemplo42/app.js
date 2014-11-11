var app = angular.module("miapp");

app.controller("mainController", function($scope){	
	$scope.nombre  = "Hernán";
	$scope.apellido = "Crespo";
});

app.directive("tplUsuario", function(){
	return {
		templateUrl: "usuario.tmpl"
	};
});