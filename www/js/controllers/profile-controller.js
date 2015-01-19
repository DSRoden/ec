(function(){
  'use strict';
  angular.module('endorsee')
  .controller('ProfileCtrl', function($scope, $rootScope){
    if(!$rootScope.rootuser){
      $scope.title = 'Endorsee';
      $scope.login = true;
      $scope.register = false;

      $scope.registrationForm = function(){
        $scope.login = false;
        $scope.register = true;
      };

      $scope.loginForm = function(){
        $scope.login = true;
        $scope.register = false;
      };

      $scope.forgotPasswordForm = function(){
        $scope.login = false;
        $scope.register = false;
        $scope.forgotPassword = true;
      };

      $scope.back = function(){
        $scope.login = true;
        $scope.forgotPassword = false;
      };

    } else {
    //if user has logged in
    $scope.title = 'Profile';
    }
  });
})();
