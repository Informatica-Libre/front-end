'use strict';

/**
 * @ngdoc function
 * @name informaticaLibreApp.controller:SurveyCtrl
 * @description
 * # HomeCtrl
 * Controller of the informaticaLibreApp
 */
angular.module('informaticaLibreApp')
  .controller('SurveyCtrl', function ($scope, surveyService) {
    
  	surveyService.getTotal().success(function(response) {

  		console.log(response);

  		$scope.totalRespondents = response;

  	});

  });
