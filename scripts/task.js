'use strict';

app.controller('TaskController', function($scope, FURL, $firebase, $location, $routeParams) {
	var ref = new Firebase(FURL);
	var fbTasks = $firebase(ref.child('task')).$asArray();
	var taskId = $routeParams.taskId;

	$scope.tasks = fbTasks;

	$scope.postTask = function(task) {
		fbTasks.$add(task);
		$location.path('/browse');
	};

	if (taskId) {
		$scope.selectedTask = $firebase(ref.child('task').child(taskId)).$asObject();
	}

	$scope.updateTask = function(task) {
		$scope.selectedTask.$save(task);
		$location.path('/browse');
	};
});