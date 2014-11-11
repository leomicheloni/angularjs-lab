var app = angular.module("miapp");

app.controller("mainController", function ($scope) {
	$scope.usuario = {
		nombre : "Hernán",
		apellido : "Crespo"
	}

});

app.directive("tplUsuario", function () {
	return {
		templateUrl : function (el, attr) {
			return "usuario.tmpl";
		},
		link : function (scope, element) {
			element.css({"background-color": "red"});
		}
	};
});
