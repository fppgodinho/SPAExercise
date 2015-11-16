var angular     = require('angular');

angular.module('spaExercise').directive('list', function ()                                                             {
    return {
        restrict:   'E',
        replace:    'true',
        template:   require('./../../html/template/list.jade'),
        controller: ['$scope', 'modelProducts', function($scope, modelProducts)                                         {
            $scope.items = modelProducts.list;
        }]
    }
});

angular.module('spaExercise').directive('listItem', function ()                                                         {
    return {
        scope:      {listItem: '='},
        restrict:   'A',
        replace:    'true',
        template:   require('./../../html/template/list-item.jade'),
        controller: ['$scope', '$uibModal', function($scope, $uibModal)                                                 {
            $scope.name     = $scope.listItem.name;

            $scope.select   = function()                                                                                {

            };

            $scope.delete   = function()                                                                                {
                $uibModal.open({
                    animation:  true,
                    template:   require('./../../html/template/list-item-delete.jade')(),
                    controller: "listItemDeleteController",
                    resolve: {
                        listItem:           function() { return $scope.listItem}
                    }
                });
            };
        }]
    }
});

angular.module('spaExercise').controller('listItemDeleteController', ['$scope', '$uibModalInstance', 'modelProducts', 'listItem', function($scope, $uibModalInstance, modelProducts, listItem) {
    $scope.id           = listItem.id;
    $scope.name         = listItem.name;
    $scope.description  = listItem.description;

    $scope.ok           = function ()                                                                                   {
        modelProducts.delete(listItem.id, function (err, data)                                                          {
            $uibModalInstance.close();
        });
    };

    $scope.cancel       = function ()                                                                                   {
        $uibModalInstance.dismiss('cancel');
    };
}]);
