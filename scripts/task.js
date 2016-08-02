'use strict';

app.controller('TaskController', function($scope, FURL, $firebase, $location) {
	var ref = new Firebase(FURL);
	var fbTask = $firebase(ref.child('task')).$asArray();
	$scope.postTask = function(task) {
		fbTask.$add(task);
		$location.path('/browse');
	};
});