var angular     = require('angular');

angular.module('spaExercise').directive('menu', function ()                                                             {
    return {
        restrict:   'E',
        replace:    'true',
        template:   require('./../../html/template/menu.jade'),
        controller: ['$scope', '$uibModal', function($scope, $uibModal)                                                 {
            $scope.open = function ()                                                                                   {
                $uibModal.open({
                    animation:  true,
                    template:   require('./../../html/template/menu-new-product.jade')(),
                    controller: "menuNewProductController"
                });
            };
        }]
    }
});

angular.module('spaExercise').controller('menuNewProductController', ['$scope', '$uibModalInstance', 'modelProducts', function($scope, $uibModalInstance, modelProducts) {
    $scope.name         = '';
    $scope.description  = '';

    $scope.ok           = function ()                                                                                   {
        modelProducts.create({name: $scope.name, description: $scope.description}, function (err, id){
            $uibModalInstance.close();
        });
    };

    $scope.cancel       = function ()                                                                                   {
        $uibModalInstance.dismiss('cancel');
    };
}]);
