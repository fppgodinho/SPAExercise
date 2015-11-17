var angular     = require('angular');

angular.module('spaExercise').directive('layout', function (){
    return {
        restrict: 'E',
        replace: 'true',
        template: require('./../../html/template/layout.jade')
    }
});
