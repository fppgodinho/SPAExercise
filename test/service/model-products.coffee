modelProductsClass  = require("./../../src/js/service/model-products.js")
modelProducts       = new modelProductsClass();

describe "The products model...", ->
    it "should exist", -> modelProducts.should.exist

    describe "The 'list' property", ->
        it "should exist", -> modelProducts.should.have.property 'list'
        it "should be an array", -> modelProducts.list.should.be.an 'array'

    it "should have a 'create' method", -> modelProducts.should.respondTo 'create'
    it "should have a 'read' method", -> modelProducts.should.respondTo 'read'
    it "should have a 'update' method", -> modelProducts.should.respondTo 'update'
    it "should have a 'delete' method", -> modelProducts.should.respondTo 'delete'


