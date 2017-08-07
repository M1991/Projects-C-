 var app=angular
            .module("nextApp", [])
            .controller("nextCtrl", ['$scope','$http', '$location', '$log', function($scope, $http, $location, $log){
                $scope.scrollTo = function(authSwap){
                    $location.hash(authSwap);
                    $anchorScroll();
                }

                $scope.authSwap = false;
                $scope.contentSwap = true;

                $scope.loginNow = function (){
                    $scope.authSwap = true;
                    $scope.contentSwap = false;
                }
             }]);