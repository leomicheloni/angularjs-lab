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

});

miapp.filter("trim", function(){
	return function(value, largo){
		var limit = largo || 10;
		return value.substring(0, limit-3) + "...";	
	};
});
