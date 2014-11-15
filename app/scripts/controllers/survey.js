'use strict';

/**
 * @ngdoc function
 * @name informaticaLibreApp.controller:SurveyCtrl
 * @description
 * # HomeCtrl
 * Controller of the informaticaLibreApp
 */
angular.module('informaticaLibreApp')
  .controller('SurveyCtrl', function ($scope, surveyService, $facebook) {


    /**
     * Check if the respondent has connected with facebook before. 
     */
    $facebook.getLoginStatus().then(function(response) {

      if ( response.status === 'connected') {

        $scope.fbAuth = true;

      }

    });


    /*
     *  Watch for changes in $scope.degree to disable $scope.cpic input
     */
    $scope.$watch('degree',function(){
      if($scope.degree == "No posee ningún grado académico" || $scope.degree == "Posee técnico o diplomado" || $scope.degree == "Bachillerato incompleto en informática"){
        $scope.cpic = "No";
        $scope.cpicInputDisabled = true;
      } else {
        $scope.cpic = undefined;
        $scope.cpicInputDisabled = false;
      }
    });


    /**
     * Gathers all the form data, connects user to FB and submits the survey.
     */
    $scope.submitSurvey = function() {

      
      /**
       * Converts answer to boolean value
       */
      if ( $scope.certification = 'No' ) {

        $scope.certification = false;

      } else {

        $scope.agree = true;

      }


      /**
       * Converts answer to boolean value
       */
      if ( $scope.cpic = 'No' ) {

        $scope.cpic = false;

      } else {

        $scope.cpic = true;

      }

      
      /**
       * Converts answer to boolean value
       */
      if ( $scope.agree = 'false' ) {

        $scope.agree = false;

      } else {

        $scope.agree = true;

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
        identification: $scope.id_number, //ID de la persona - opcional
        email: false //Email del usuario
      };

      
      /**
       * Check for facebook connection so the survey cannot be done multiple times.
       */ 
      if ( !$scope.fbAuth ) {

        
        /**
         * Connects to facebook and requests permissions.
         */
        $facebook.login().then(function(response) {


          var fbUserID = response.authResponse.userID;
          
          /**
           * If the respondent approves FB connection
           */
          if (response.status === 'connected') {


            /**
             * Gest user email, profile URL, profile name & picture.
             */
            $facebook.api('/me').then(function(response) {

              surveyData.email = response.email;
              surveyData.facebook_profile_name = response.id;
              surveyData.facebook_profile_url = response.link;
              surveyData.facebook_profile_picture = 'http://graph.facebook.com/' + fbUserID + '/picture';


              /**
               * Sends survey data to the server.
               */
              surveyService.createAnswer(surveyData).success(function(response) {

                console.log('Informatica Libre: ', response);

              }).error(function(response) {

                console.log('Informatica Libre Error: ', response);

              });

            }, function(error) {

              console.log('Facebook API Error:', error);

            });


          } else {

            console.log('User declined connection to facebook');

          }


        }, function(error) {

          console.log('FB Login Error: ', error);

        });

      }

    };
    
  	
    /**
     * Gets total amount of respondents.
     */
    surveyService.getTotal().success(function(response) {

  		$scope.totalRespondents = response.total;

  	});

  	
    /**
     * Gets the survey results to display in the widget's footer.
     */
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
