var app = angular.module('app', []);

app.controller('MyController', function ($scope, notify) {
	
	$scope.callNotify = function (msg) {
		notify(msg);
	};
	
});

app.factory('notify', function () {
	var msgs = [];
	
	return function (msg) {
		msgs.push(msg);
		if (msgs.length == 3) {
			alert(msgs.join("\n"));
			msgs = [];
		}
	};
	
});
