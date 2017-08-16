'use strict';

angular.module("haphansoftPortal.controllers")
    .controller('menuController',

        ['$rootScope','$scope', '$location','ngTranslation',
        function ($rootScope, $scope, $location, ngTranslation){

            console.log("call menuController");

            $scope.changeLanguage = function (language) {
                $rootScope.multilanguages=language;
                ngTranslation.use(language);
            };


            $scope.load = function(){
                console.log("call load menuController");
            };

            $scope.routeIs = function(routeName) {
                return $location.path() === routeName;
            };

        }])
;

