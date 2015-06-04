'use strict';

/**
 * @ngdoc function
 * @name angularCodestyleApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularCodestyleApp
 */
angular.module('angularCodestyleApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
