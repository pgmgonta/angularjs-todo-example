var todoApp = angular.module('todoApp', []);

todoApp.controller('TodoListCtrl', function ($scope) {
  $scope.todos = [
    { title: 'example todo1', comment: 'example comment1' },
    { title: 'example todo2', comment: 'example comment2' }
  ];
});

