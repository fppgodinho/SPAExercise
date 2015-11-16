var angular     = require('angular');

angular.module('spaExercise').directive('product', function (){
    return {
        restrict: 'E',
        replace: 'true',
        template: require('./../../html/template/product.jade')
    }
});
