var angular     = require('angular');

angular.module('spaExercise').factory('modelProducts', function() {
    var _productsFiltered   = [];
    var _products           = [];

    Object.defineProperty(this, 'list', {get: function()                                                                {
        return _productsFiltered;
    }});

    function _parseProducts()                                                                                           {
        _productsFiltered.length = 0;
        for (var i in _products) if (_products[i]) _productsFiltered[i] = _products[i];
    }

    this.create = function(raw, callback)                                                                              {
        var data = {
            name: raw.name,
            description: raw.description
        };

        _products.push(data);

        var id = _products.length - 1;
        Object.defineProperty(data, 'id', {get: function(){ return id; }});

        _parseProducts();
        //
        if (typeof callback === 'function') callback(null, id);
    };

    this.read   = function(id, callback)                                                                                {
        var data = (id >= 0 && id < _products.length)?_products[id]:null;
        //
        if (typeof callback === 'function') callback(!data?'Item not found':null, data);
    };

    this.update = function(id, data, callback)                                                                          {
        if (id >= 0 && id < _products.length) {
            _products[id] = data;
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
