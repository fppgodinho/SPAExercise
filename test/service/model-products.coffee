#require 'angular'
#require 'angular-mocks'

describe "The products model...", ->
#    console.log inject, module
    Test = null
    $rootScope      = null

    beforeEach ->
        angular.module 'spaExercise', []
        require "./../../src/js/service/model-products.jss"

    beforeEach inject ($injector) ->
        $rootScope      = $injector.get('$rootScope');
        Test            = $injector.get 'Test';


#    beforeEach inject (_Test_) ->
#        Test = _Test_

    describe "Something else", ->
        it 'should do something', ->
            console.log 'Humm'

#    it "should exist", inject (modelProducts) ->
#        modelProducts.should.exist
#
#    describe "The 'list' property", ->
#        it "should exist", -> modelProducts.should.have.property 'list'
#        it "should be an array", -> modelProducts.list.should.be.an 'array'
#
#    it "should have a 'create' method", -> modelProducts.should.respondTo 'create'
#    it "should have a 'read' method", -> modelProducts.should.respondTo 'read'
#    it "should have a 'update' method", -> modelProducts.should.respondTo 'update'
#    it "should have a 'delete' method", -> modelProducts.should.respondTo 'delete'


