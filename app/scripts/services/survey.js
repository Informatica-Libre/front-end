/*jshint unused:false*/

'use strict';

/**
 * @ngdoc function
 * @name informaticaLibreApp.factory:surveyService
 * @description
 * # surveyService
 * Directive of the informaticaLibreApp survey service.
 */
angular.module('informaticaLibreApp')
	.factory('surveyService', ['$http', function($http) {

		return {

			getReport: function() {

				return $http({
					method: 'GET',
					url: 'https://informaticalibre.herokuapp.com/reports/basic'
				});

			},

			getTotal: function() {

				return $http({
					method: 'GET',
					url: 'https://informaticalibre.herokuapp.com/answer/count'
				});

			},

			createAnswer: function(surveyData) {

				return $http({
					method: 'POST',
					url: 'https://informaticalibre.herokuapp.com/answer/create',
					data: surveyData
				});

			}

		};

	}]);