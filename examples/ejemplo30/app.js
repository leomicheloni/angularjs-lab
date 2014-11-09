var app = angular.module('app', []);

app.controller('mainController', function ($scope) {
	$scope.time = +new Date();
	
	$scope.$watch('time', function(newValue, oldValue){
		console.log(newValue);
	});

	
	setInterval(function(){
		$scope.time = +new Date;
		$scope.$apply();
	}, 1000);
	
	
});
