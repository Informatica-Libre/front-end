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

  		$scope.totalRespondents = response.total;

  	});

  	surveyService.getReport().success(function(response) {


  		if ( response.values.not_agree_with_cpic > response.values.agree_with_cpic ) {

  			$scope.tendency = 'Mayoría rechaza el proyecto'
  			$scope.icon = 'ban'

  		} else {

				$scope.tendency = 'Mayoría acepta el proyecto'
  			$scope.icon = 'check'

  		}

  	});

  });
