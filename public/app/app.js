'use strict';

angular.module('app', ['ui.router', 'app.dashboard']).config(config);

function config($urlRouterProvider) {

  $urlRouterProvider.otherwise(function ($injector) {

    var $state = $injector.get('$state');
    $state.go('app.dashboard');
  });
}

