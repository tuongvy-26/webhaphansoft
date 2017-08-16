'use strict';

angular.module("haphansoftPortal.controllers",[]);

angular.module('haphansoftPortal', [
    'ngRoute',
    'haphansoftPortal.controllers',
    'angular-loading-bar',
    'angularUtils.directives.dirPagination',
    'ng-translation'
]);


angular.module('haphansoftPortal')
    .config(
        ['ngTranslationProvider','$routeProvider', '$httpProvider', 'cfpLoadingBarProvider', 'paginationTemplateProvider',
            function (ngTranslationProvider, $routeProvider, $httpProvider, cfpLoadingBarProvider, paginationTemplateProvider){

                ngTranslationProvider
                    .setDirectory('languages')
                    .setFilesSuffix('.json')
                    .langsFiles({
                        en: 'en',
                        vn: 'vn'
                    })
                    .fallbackLanguage('en');

                $routeProvider
                    .when("/home", {
                        templateUrl:"app/templates/home.html",
                        controller:"homeController"
                    })
                    .when("/services", {
                        templateUrl:"app/templates/services.html",
                        controller:"servicesController"
                    })
                    .when("/about", {
                        templateUrl:"app/templates/about.html",
                        controller:"aboutController"
                    })
                    .when("/team", {
                        templateUrl:"app/templates/team.html",
                        controller:"teamController"
                    })
                    .when("/clients", {
                        templateUrl:"app/templates/clients.html",
                        controller:"clientsController"
                    })
                    .when("/contact", {
                        templateUrl:"app/templates/contact.html",
                        controller:"contactController"
                    })
                    .when("/vacance", {
                        templateUrl:"app/templates/vacance.html",
                        controller:"vacanceController"
                    })
                    .otherwise({redirectTo: '/home'});


                cfpLoadingBarProvider.includeSpinner = true;

                paginationTemplateProvider.setPath('app/templates/partials/dirPagination.tpl.html');

            }]
    )
    .run(
        ['ngTranslation','$rootScope', '$location', '$interval',

            function (ngTranslation,$rootScope, $location,  $interval) {

                $rootScope.multilanguages = "en";

                ngTranslation.use($rootScope.multilanguages);

                $rootScope.$on('$routeChangeStart', function (event, next) {
                    console.log('next ' + JSON.stringify(next));
                    if (next.$$route) {
                        $rootScope.requestedRoute = next.$$route.originalPath;
                    }
                });

                // automatically unload semantic space when the app is closed
                var onBeforeUnloadHandler = function (event) {
                    console.log("onBeforeUnloadHandler"+event);
                };
            }
        ]);
