var angular     = require('angular');

angular.module('spaExercise').directive('list', function ()                                                             {
    return {
        restrict:   'E',
        replace:    'true',
        template:   require('./../../html/template/list.jade'),
        controller: ['$scope', '$timeout', 'modelProducts', function($scope, $timeout, modelProducts)                   {
            $timeout(function()                                                                                         {
                $scope.items = modelProducts.list;
            });
        }]
    }
});

angular.module('spaExercise').directive('listItem', function ()                                                         {
    return {
        scope:      {listItem: '='},
        restrict:   'A',
        replace:    'true',
        template:   require('./../../html/template/list-item.jade'),
        controller: ['$scope', '$uibModal', '$location', function($scope, $uibModal, $location)                         {
            $scope.name     = $scope.listItem.name;

            $scope.select   = function()                                                                                {
                $location.search('id', $scope.listItem.id);
            };

            $scope.delete   = function()                                                                                {
                $uibModal.open({
                    animation:  true,
                    template:   require('./../../html/template/list-item-delete.jade')(),
                    controller: "listItemDeleteController",
                    resolve:    {
                        listItem:   function() { return $scope.listItem;                                                }
                    }
                });
            };
        }]
    }
});

angular.module('spaExercise').controller('listItemDeleteController', ['$scope', '$uibModalInstance', '$location', 'modelProducts', 'listItem',
    function($scope, $uibModalInstance, $location, modelProducts, listItem)                                             {
        $scope.id           = listItem.id;
        $scope.name         = listItem.name;
        $scope.description  = listItem.description;

        $scope.ok           = function ()                                                                               {
            modelProducts.delete(listItem.id, function (err, data)                                                      {
                $location.search('id', null);
                $uibModalInstance.close();
            });
        };

        $scope.cancel       = function ()                                                                               {
            $uibModalInstance.dismiss('cancel');
        };
    }
]);
