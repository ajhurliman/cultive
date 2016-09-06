'use strict';

var angular = require('angular');
require('angular-ui-router');
require('angular-ui-bootstrap');

var app = angular.module('cultiveApp', ['ui.router', 'ui.bootstrap']);

app.config(function($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.when('', '/home').otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: './partials/home.html',
      controller: 'mainController'
    })

    .state('blog', {
      url: '/blog',
      templateUrl: './partials/blog.html',
      controller: 'mainController'
    });
});

app.controller('mainController', function($scope) {
  $scope.test = 'yo yo yo';
});

// sections
// require('./components/')