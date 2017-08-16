'use strict';

angular.module("haphansoftPortal.controllers")
    .controller('clientsController',
    ['$rootScope', '$scope',
    function($rootScope, $scope) {

        $rootScope.menu = 33;

        $scope.showMoreData = 1;
        $scope.showLink = true;

        $scope.showMore = function () {

            $scope.showMoreData++;

            // for testing:
            if ($scope.showMoreData>3){
                $scope.showLink = false;
            }
        }


    }]);