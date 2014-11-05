'use strict';

/**
 * @ngdoc function
 * @name informaticaLibreApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the informaticaLibreApp
 */
angular.module('informaticaLibreApp')
  .controller('MainCtrl', function ($scope, $location) {

    $scope.isPageActive = function (viewLocation) {
      return viewLocation === $location.path();
    };

  });
