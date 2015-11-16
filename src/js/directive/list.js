var angular     = require('angular');

angular.module('spaExercise').directive('list', function (){
    return {
        restrict: 'E',
        replace: 'true',
        template: require('./../../html/template/list.jade')
    }
});
