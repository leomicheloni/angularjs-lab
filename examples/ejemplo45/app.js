var app = angular.module("miapp");

app.controller("mainController", function ($scope) {
	$scope.usuario = {
		nombre : "Hernán",
		apellido: "Crespo"
	}

});

app.directive("tplUsuario", function () {
	return {
		templateUrl : function (el, attr) {
			return attr.type + ".tmpl";
		},
		scope : {
			data : "=info"
		},
		restrict : "E"
	};
});
