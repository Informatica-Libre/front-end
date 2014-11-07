/*jshint unused:false*/
/* global $:false */
/* global Morris:false */

'use strict';

/**
 * @ngdoc function
 * @name informaticaLibreApp.directive:resultsChart
 * @description
 * # resultsChart
 * Directive of the informaticaLibreApp results chart
 */
angular.module('informaticaLibreApp')
  .directive('resultsChart', function(surveyService) {

    return {

      restrict: 'A',
      link: function(scope, element, attrs) {

        var chartData;

        surveyService.getReport().success(function(response) {

          // Starst the survery result graph.
          var surveyResults = Morris.Bar({
            element: attrs.id,
            resize: true,
            data: [
              { y: 'Sin Título', a: response.values.no_title},
              { y: 'Con Título ', a: response.values.with_title},
              { y: 'Colegiados', a: response.values.belongs_to_cpic},
              { y: 'Apoyan', a: response.values.agree_with_cpic},
              { y: 'No Apoyan', a: response.values.not_agree_with_cpic}
            ],
            xkey: 'y',
            xLabelMargin: 10,
            ykeys: ['a'],
            labels: ['Resultado'],
            barColors: ['#9b59b6']
          });

        });

      }
    };
  });