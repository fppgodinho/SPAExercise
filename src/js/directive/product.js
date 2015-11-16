var angular     = require('angular');

angular.module('spaExercise').directive('product', function (){
    return {
        restrict:   'E',
        replace:    'true',
        template:   require('./../../html/template/product.jade'),
        controller: ['$scope', "$location", '$timeout', 'modelProducts', function($scope, $location, $timeout, modelProducts) {
            $scope.id           = '';
            $scope.name         = '';
            $scope.description  = '';
            $scope.isVisible    = false;

            function _clearData()                                                                                       {
                $scope.id           = '';
                $scope.name         = '';
                $scope.description  = '';
                $scope.isVisible    = false;
            }

            function _setData(data)                                                                                     {
                $scope.id           = data.id;
                $scope.name         = data.name;
                $scope.description  = data.description;
                $scope.isVisible    = true;
            }

            $scope.$on('$locationChangeSuccess', function()                                                             {
                var id = $location.search().id;

                if (id || id === 0) modelProducts.read(id, function(err, data)                                          {
                    $timeout(function()                                                                                 {
                        if(!err && data) _setData(data);
                        else $location.search('id', null);
                    });
                });
                else _clearData();
            });

            $scope.save   = function()                                                                                  {
                modelProducts.update($scope.id, {name: $scope.name, description: $scope.description}, function(err, data){

                });
            }
        }]
    }
});

