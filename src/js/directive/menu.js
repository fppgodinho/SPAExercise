var angular     = require('angular');

angular.module('spaExercise').directive('menu', function ()                                                             {
    return {
        restrict: 'E',
        replace: 'true',
        template: require('./../../html/template/menu.jade'),
        controller: ['$scope', '$uibModal', function($scope, $uibModal)                                                 {

            $scope.open = function ()                                                                                   {
                var modalInstance = $uibModal.open({
                    animation:  true,
                    template:   require('./../../html/template/menu-new-product.jade')(),
                    controller: ['$scope', 'modelProducts', function($scope, modelProducts)                             {
                        $scope.name         = '';
                        $scope.description  = '';

                        $scope.ok           = function ()                                                               {
                            modelProducts.create({name: $scope.name, description: $scope.description}, function (err, id){
                                console.log(err, id);
                                modalInstance.close();
                            });
                        };

                        $scope.cancel       = function ()                                                               {
                            modalInstance.dismiss('cancel');
                        };
                    }]
                });
            };
        }]
    }
});
