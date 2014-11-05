/*jshint unused:false*/
/* global $:false */

'use strict';

/**
 * @ngdoc function
 * @name informaticaLibreApp.directive:surveyHolder
 * @description
 * # surveyHolder
 * Directive of the informaticaLibreApp survey holder
 */
angular.module('informaticaLibreApp')
  .directive('surveyHolder', function() {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {

        // Checks which column is the tallest and adds the class to display de
        // dividing center line.
        var $contentCols = $(element).find('.container > .row > [class^=col-]');

        if ( $($contentCols[0]).height() > $($contentCols[1]).height() ) {

          $($contentCols[0]).addClass('separator-line-right');

        } else {

          $($contentCols[1]).addClass('separator-line-left');

        }

      }
    };
  });
