'use strict';

angular.module('TaskManager')
.controller('HomeCtrl', function ($scope, $state) {
  $scope.models = {
    selected: null,
    lists: { todo: [], inProgress: [], done: [] },
  };

  // Generate dummy data
  $scope.models.lists.todo.push({ label: 'Testing the task manager' });
  $scope.models.lists.todo.push({ label: 'Deploy in production' });
  $scope.models.lists.inProgress.push({ label: 'Inspecting the codes' });
  $scope.models.lists.done.push({ label: 'Download the excercise files' });
  $scope.models.lists.done.push({ label: 'Install dependencies' });
  $scope.models.lists.done.push({ label: 'Run the app' });

  // add new project from input box
  $scope.addProject = function () {
    if ($scope.newProject.trim() == '') return;
    $scope.models.lists.todo.push({ label: $scope.newProject });
    $scope.newProject = '';
  };

  // get the headline from key
  $scope.getHeading = function (key) {
    var obj = {
      todo: 'To do',
      inProgress: 'In Progress',
      done: 'Done',
    };
    return obj[key] || '';
  };
});
