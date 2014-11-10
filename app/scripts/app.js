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
    'ngTouch',
    'ngFacebook'
  ])
  .config(function ($routeProvider, $httpProvider, $facebookProvider) {

    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;
    //Remove the header used to identify ajax call  that would prevent CORS from working
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    // Ng-Facebook Config
    $facebookProvider.setCustomInit({
      version: 'v2.0'
    });

    $facebookProvider.setAppId('754444554604995');
    $facebookProvider.setPermissions('public_profile, email, publish_actions');
    
    // Route Configration
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

    // Loads Facebook SDK
    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));


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
