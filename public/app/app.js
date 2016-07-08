'use strict';

angular.module('app', ['ui.router', 'app.dashboard', 'app.auth', 'ngMessages']).config(config);

function config($urlRouterProvider) {

  $urlRouterProvider.otherwise(function ($injector) {

    var $state = $injector.get('$state');
    $state.go('login');
  });
}

