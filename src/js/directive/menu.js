var angular     = require('angular');

angular.module('spaExercise').directive('menu', function (){
    return {
        restrict: 'E',
        replace: 'true',
        template: require('./../../html/template/menu.jade')
    }
});
