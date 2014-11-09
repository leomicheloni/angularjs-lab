var app = angular.module('app', []);

app.controller('mainController', function ($scope) {
	$scope.time = +new Date();
	
	setInterval(function(){
		$scope.time = +new Date;
	}, 1000);
		
});
