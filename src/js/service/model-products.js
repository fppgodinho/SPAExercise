var angular     = require('angular');

angular.module('spaExercise').factory('modelProducts', function() {
    var _productsFiltered   = [];
    var _products           = [];

    Object.defineProperty(this, 'list', {get: function()                                                                {
        return _productsFiltered;
    }});

    function _parseProducts()                                                                                           {
        _productsFiltered.length = 0;
        for (var i in _products) if (_products[i]) {
            var item = JSON.parse(_products[i]);
            item.id = i;
            _productsFiltered.push(item);
        }
    }

    this.create = function(raw, callback)                                                                               {
        _products.push(JSON.stringify({name: raw.name, description: raw.description}));

        var id = _products.length - 1;

        _parseProducts();
        //
        if (typeof callback === 'function') callback(null, id);
    };

    this.read   = function(id, callback)                                                                                {
        var data = (id >= 0 && id < _products.length)?_products[id]:null;
        if (data) {
            data = JSON.parse(data);
            data.id = id;
        } else data = null;
        //
        if (typeof callback === 'function') callback(!data?'Item not found':null, data);
    };

    this.update = function(id, data, callback)                                                                          {
        if (id >= 0 && id < _products.length)                                                                           {
            _products[id] = JSON.stringify({name: data.name, description: data.description});
            _parseProducts();
        } else data = null;
        //
        if (typeof callback === 'function') callback(!data?'Item not found':null, data);
    };

    this.delete = function(id, callback)                                                                                {
        var data = (id >= 0 && id < _products.length)?_products[id]:null;
        if (data)                                                                                                       {
            _products[id] = null;
            _parseProducts();
        }
        //
        if (typeof callback === 'function') callback(!data?'Item not found':null, data);
    };

    return this;
});
