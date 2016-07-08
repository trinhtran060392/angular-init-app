'use strict';

angular.module('app.auth').directive('compareTo', compareTo);

function compareTo() {

  var directive = {

    require: 'ngModel',
    scope: {
      otherModelValue: '=compareTo'
    },
    link: link
  }

  return directive;

  function link(scope, element, attributes, ngModel) {

    ngModel.$validators.compareTo = function(modelValue) {
      return modelValue === scope.otherModelValue;
    }

    scope.$watch("otherModelValue", function() {
      ngModel.$validate();
    });
  }
}