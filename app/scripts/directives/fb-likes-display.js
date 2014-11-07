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
  .directive('fbLikes', ['$http', function($http) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {

        $http({
          method: 'GET',
          url: 'https://graph.facebook.com/infoLibreCR?fields=likes'
        }).success(function(response) {

          $(element).text(response.likes);

        });

      }
    };
  }]);
