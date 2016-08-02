'use strict';

var app = angular
  .module('TaskRabbitCloneApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'firebase'
  ])
  .constant('FURL', 'https://taskrabbitclone-986e6.firebaseio.com/')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/post', {
        templateUrl: 'views/post.html'
      })
      .when('/edit', {
        templateUrl: 'views/edit.html'
      })
      .when('/browse', {
        templateUrl: 'views/browse.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });