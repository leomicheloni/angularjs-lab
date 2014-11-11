var app = angular.module("miapp", []);
app.controller("mainController", ["$scope", function (scope) {
	scope.saludo = "hola mundo";
}]);
