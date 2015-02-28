(function() {
  'use strict';

  angular
  .module('app.core')
  .controller('User', User);

  User.$inject = ['$scope','$state','storage','userApi'];

  function User($scope, $state, storage, userApi) {
    var user = this;

    user.login = function(){
      if($scope.loginForm.$valid){
        userApi.login(user.info).then(function(result){
          console.log(result);
          // user.store(user);
          // console.log(user);
        },function(error){
          console.log(error);
        });
      }else{
        $scope.loginForm.username.$setDirty();
        $scope.loginForm.password.$setDirty();
      }
    };

    user.register = function(){
        if($scope.registerForm.$valid){
          userApi.register(user.new).then(function(user){
            console.log(user);
            // scope.setUser(user);
          },function(error){
            console.error(error);
          });
        }else{
          $scope.registerForm.username.$setDirty();
          $scope.registerForm.password.$setDirty();
        }
    }

    user.store = function(userInfo){
      storage.set('user',userInfo);
    }
  }

  



})();
