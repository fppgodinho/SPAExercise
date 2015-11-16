module.exports  = function() {
    var _productsFiltered   = [];
    var _products           = [];

    Object.defineProperty(this, 'list', {get: function()                                                                {
        return _productsFiltered;
    }});

    function _parseProducts()                                                                                           {
        _productsFiltered.length = 0;
        for (var i in _products) if (_products[i]) _productsFiltered[i] = _products[i];
    }

    this.create = function(data, callback)                                                                              {
        _products.push(data);
        _parseProducts();
        //
        if (typeof callback === 'function') callback(null, _products.length-1);
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
};
