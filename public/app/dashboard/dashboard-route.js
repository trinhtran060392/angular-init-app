'use strict';

angular.module('app.dashboard', ['ui.router']).config(config);

function config($stateProvider) {

  $stateProvider.state('app', {

    abstract: true,
    views: {
      'root': {
        templateUrl: 'app/layout.tpl.html'
      }
    }
  })
  .state('app.dashboard', {

    url: '/dashboard',
    views: {
      'content@app': {
        templateUrl: 'app/dashboard/views/dashboard.tpl.html'
      }
    }
  });
}