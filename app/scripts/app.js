'use strict';

/**
 * @ngdoc overview
 * @name informaticaLibreApp
 * @description
 * # informaticaLibreApp
 *
 * Main module of the application.
 */
angular
  .module('informaticaLibreApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/survey', {
        templateUrl: 'views/survey.html',
        controller: 'SurveyCtrl'
      })
      .when('/people', {
        templateUrl: 'views/people.html',
        controller: 'PeopleCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function($rootScope, $location, $anchorScroll, $routeParams) {

    //when the route is changed scroll to the proper element.
    $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {

      $location.hash($routeParams.section);
      $anchorScroll();

      // Horrible Scroll hack for Fixed Header
      setTimeout(function(){
        window.scrollTo(window.pageXOffset, window.pageYOffset - 25);
      },10);

    });

  });
