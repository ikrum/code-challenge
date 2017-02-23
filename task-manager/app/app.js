var app = angular.module('TaskManager', ['ui.router', 'dndLists']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/home/home.html',
        controller: 'HomeCtrl',
      });

    $stateProvider
      .state('404', {
        url: '/404',
        templateUrl: 'app/errors/404.html',
      });
  });

app.run(function ($rootScope, $state) {

});
