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
              { y: 'Con Título', a: response.values.with_title},
              { y: 'Colegiados', a: response.values.belongs_to_cpic},
              { y: 'Apoyan', a: response.values.agree_with_cpic},
              { y: 'No Apoyan', a: response.values.not_agree_with_cpic}
            ],
            xkey: 'y',
            xLabelMargin: 10,
            ykeys: ['a'],
            labels: ['Resultado'],

            // barColors: ['#9b59b6']
            
            // Added function to manage a different color in every single column. @alexramirez
            barColors: function(row, series, type){
                switch(row.label){
                  case 'No Apoyan':
                    return '#D45538';
                    break;

                  case 'Sin Título':
                    return '#5895E0';
                    break;

                  case 'Con Título': 
                    return '#5895E0';
                    break;

                  case 'Colegiados':
                    return '#E4A000';
                    break;

                  case 'Apoyan':
                    return '#D45538';
                    break;

                  default:
                    return '#9b59b6';
                }
            }
          });

        });

      }
    };
  });