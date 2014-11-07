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

		var surveyResult = function() {

			return $http({
				method: 'GET',
				url: 'https://informaticalibre.herokuapp.com/reports/basic'
			});

		};

		var surveyTotal = function() {

			return $http({
				method: 'GET',
				url: 'https://informaticalibre.herokuapp.com/answer/count'
			});

		}

		return {

			getReport: function() {

				return surveyResult();

			},

			getTotal: function() {

				return surveyTotal();

			}

		};

	}]);