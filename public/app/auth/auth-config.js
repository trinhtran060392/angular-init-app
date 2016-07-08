'use strict';

angular.module('app.auth', ['ui.router']).config(config);

function config($stateProvider) {

  $stateProvider.state('login', {

    url: '/login',
    views: {
      'root': {
        templateUrl: 'app/auth/views/m0018_login.html'
      }      
    }

  })
  .state('password-setting', {
    url: '/password-setting',
    views: {
      'root': {
        templateUrl: 'app/auth/views/m0021_setting_pass.html'
      }
    }
  });
}