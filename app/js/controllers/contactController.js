'use strict';

angular.module("haphansoftPortal.controllers")
    .controller('contactController',
    ['$rootScope', '$scope',
    function($rootScope,$scope) {

        $rootScope.menu = 41;

        $scope.contact ={
            myName:null,
            myEmail:null,
            myDesc:null
        };
        $scope.formSubmit = function () {

            var temp = '\nCall API "Send email": '
                +'\nName:'+$scope.contact.myName
                +'\nEmail:'+$scope.contact.myEmail
                +'\nDesc:'+$scope.contact.myDesc;

            alert(temp);
        }

    }]);

