'use strict';

/**
 * @ngdoc overview
 * @name angularCodestyleApp
 * @description
 * # angularCodestyleApp
 *
 * Main module of the application.
 */

angular
    .module('angularCodestyleApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ui.router',
        'ngSanitize',
        'ui.bootstrap'
    ])
    .config(function($stateProvider, $routeProvider) {
        $routeProvider.otherwise('/home');
        // Now set up the states
        $stateProvider
            .state('nestedexample', {
                url: '/nestedexample',
                templateUrl: 'views/nestedexample.html'
            })
            .state('nestedexample.list', {
                url: '/list',
                templateUrl: 'views/nestedexample.list.html',
                controller: function($scope) {
                    $scope.items = ['A', 'List', 'Of', 'Items'];
                }
            })
            .state('about', {
                url: '/about',
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .state('home', {
                url: '/home',
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .state('boostrap', {
                url: '/boostrapUI',
                templateUrl: 'views/boostrap.html'
            });
    });
