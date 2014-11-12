/*jshint unused:false*/
/* global $:false */

'use strict';

/**
 * @ngdoc function
 * @name informaticaLibreApp.directive:bootstrapNav
 * @description
 * # bootstrapNav
 * Directive of the informaticaLibreApp bootstrap nav
 */
angular.module('informaticaLibreApp')
  .directive('bootstrapNav', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        
        $(element).find('.navbar-nav li a').on('click', function() {
            
          if ( window.innerWidth <= 767 ) {

            $('.navbar-toggle').click();

          }
        
        });

      }
    };
  });
