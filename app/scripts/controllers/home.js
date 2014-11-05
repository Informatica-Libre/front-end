'use strict';

/**
 * @ngdoc function
 * @name informaticaLibreApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the informaticaLibreApp
 */
angular.module('informaticaLibreApp')
  .controller('HomeCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
