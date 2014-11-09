var app = angular.module('app', []);

app.controller('mainController', function ($scope, $interpolate) {
	var ex = $interpolate("mi nombre es: {{nombre}}");
	console.log(ex({nombre: "juan"}));
});
