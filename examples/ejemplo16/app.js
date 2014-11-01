var miapp = angular.module('miapp', []);

miapp.controller('CountryCtrl', function ($scope, $locale) {
	$scope.countries = [{
			"name" : "China",
			"population" : 1359821000
		}, {
			"name" : "India",
			"population" : 1205625000
		}, {
			"name" : "United States of America",
			"population" : 312247000
		}, {
			"name" : "Brazil",
			"population" : 201032714
		}, {
			"name" : "Argentina",
			"population" : 42192500
		}, {
			"name" : "Chile",
			"population" : 17819054
		}
	];
});
