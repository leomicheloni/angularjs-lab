var miapp = angular.module('miapp', []);

miapp.controller('CountryCtrl', function ($scope) {
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
	
	$scope.order = function(predicate){
		$scope.countries = $scope.countries.sort(function(a, b){
			return a[predicate] > b[predicate];
		});
	};
	
	$scope.remove = function (country){
		var i = $scope.countries.indexOf(country);
		$scope.countries.splice(i, 1);
	};	
});
