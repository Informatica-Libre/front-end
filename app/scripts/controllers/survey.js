'use strict';

/**
 * @ngdoc function
 * @name informaticaLibreApp.controller:SurveyCtrl
 * @description
 * # HomeCtrl
 * Controller of the informaticaLibreApp
 */
angular.module('informaticaLibreApp')
  .controller('SurveyCtrl', function ($scope, surveyService) {

    $scope.submitSurvey = function() {

      
      /**
       * Converts answer to boolean value
       */
      if ( $scope.certification = 'No' ) {

        $scope.certification = false

      } else {

        $scope.agree = true

      }


      /**
       * Converts answer to boolean value
       */
      if ( $scope.cpic = 'No' ) {

        $scope.cpic = false

      } else {

        $scope.cpic = true

      }

      
      /**
       * Converts answer to boolean value
       */
      if ( $scope.agree = 'false' ) {

        $scope.agree = false

      } else {

        $scope.agree = true

      }


      /**
       * Creates the survey answer object.
       */
      var surveyData = {
        degree:  $scope.degree, // Nivel academico - requerido
        work_area: $scope.area, // Area de desarrollo - requerido
        certification:  $scope.certification, //Si posee algun tipo de cerficiacion - requerida
        employment:  $scope.employment,   //  Laboralmente es usted - requerido
        experience: $scope.experience, // Años de experiencia - requerido
        cpic: $scope.cpic,  //Si pertenece al CPIC ?  - requerido
        agree: $scope.agree,   //Si de acuerdo con el proyecto de ley  - Requerido
        company_name: $scope.company_name,  //Nombre de la empresa - Opcional
        gender: $scope.gender, // Genero - opcional
        age: $scope.age, //Edad - opcional
        facebook_profile_name: '',  //Nombre de usuario de facebook cuando se loogean con face - opcional
        facebook_profile_url: '', //URL del perfil de face - opcional
        facebook_profile_picture: '', //URL de la foto de perfil - opcional
        testimonial: $scope.testimonial, //Testimonial - opcional
        agree_publish: $scope.agree_publish, //Si esta de acuerdo con que se publique el testimonio - opcional
        name: $scope.name, //Nombre de la persona - opcional
        identification: $scope.id_name //ID de la persona - opcional
      };

      surveyService.createAnswer(surveyData).success(function(response) {

      }).error(function(response) {

      });

    };
    
  	surveyService.getTotal().success(function(response) {

  		$scope.totalRespondents = response.total;

  	});

  	surveyService.getReport().success(function(response) {


  		if ( response.values.not_agree_with_cpic > response.values.agree_with_cpic ) {

  			$scope.tendency = 'Mayoría rechaza el proyecto'
  			$scope.icon = 'ban'

  		} else if ( response.values.not_agree_with_cpic < response.values.agree_with_cpic ) {

				$scope.tendency = 'Mayoría acepta el proyecto'
  			$scope.icon = 'check'

  		} else if ( response.values.not_agree_with_cpic === response.values.agree_with_cpic )  {

        $scope.tendency = 'Estamos Tablas!'
        $scope.icon = 'meh-o'

      }

  	});

  });
