/*jshint unused:false*/
/* global $:false */

'use strict';

/**
 * @ngdoc function
 * @name informaticaLibreApp.directive:fbLikes
 * @description
 * # fbLikes
 * Directive of the informaticaLibreApp facebook likes
 */
angular.module('informaticaLibreApp')
  .directive('fbLikes', function() {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {

        // Gets the number of page likes from FB and
        // sets the text on the respective element
        $.ajax({
          url: 'https://graph.facebook.com/infoLibreCR?fields=likes',
          type: 'GET',
          success: function(data) {
            $(element).text(data.likes);
          }
        });

      }
    };
  });
