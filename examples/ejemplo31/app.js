var app = angular.module('app', []);

app.controller('mainController', function ($scope, $interval) {
	$scope.time = +new Date();
	
	$interval(function(){
		$scope.time = +new Date;
	}, 1000);	
});
