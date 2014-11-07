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

        surveyService.getReport().success(function(response) {

          console.log(response);

        });

        // Starst the survery result graph.
        var surveyResults = Morris.Bar({
          element: attrs.id,
          resize: true,
          data: [
            { y: 'Sin Título', a: 100},
            { y: 'Con Título ', a: 45},
            { y: 'Colegiados', a: 12},
            { y: 'Apoyan', a: 5},
            { y: 'No Apoyan', a: 25}
          ],
          xkey: 'y',
          xLabelMargin: 10,
          ykeys: ['a'],
          labels: ['Resultado'],
          barColors: ['#9b59b6']
        });

      }
    };
  });