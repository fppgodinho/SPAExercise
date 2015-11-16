inject = angular.mock.inject;
module = angular.mock.module;

describe "The products model...", ->
    modelProducts = null;

    beforeEach -> module 'spaExercise'
    beforeEach -> inject (_modelProducts_) -> modelProducts = _modelProducts_

    it "should exist", -> modelProducts.should.exist
    it "should have a 'create' method", -> modelProducts.should.respondTo 'create'
    it "should have a 'read' method", -> modelProducts.should.respondTo 'read'
    it "should have a 'update' method", -> modelProducts.should.respondTo 'update'
    it "should have a 'delete' method", -> modelProducts.should.respondTo 'delete'
    it "should have a 'list' property of type array", -> modelProducts.list.should.be.an 'array'

    describe "A new product...", ->
        product = {
            name: 'name'
            description: 'description'
        }
        id = null;

        beforeEach (done) -> modelProducts.create product, (err, i) ->
            id = i
            done();

        it "should have id set to '0'", -> id.should.equal 0
        it "should b the only item on the list", -> modelProducts.list.length.should.equal 1
        it "should have the same data used when created ", (done)-> modelProducts.read id, (err, data) ->
            data.should.deep.equal product
            done();
        it "should have the name set to 'Jhon Snow' after being updated", (done)->
            modelProducts.update id, {name: 'Jhon Snow', description: ''}, ->
                modelProducts.read id, (err, data)->
                    data.name.should.equal 'Jhon Snow';
                    done();
        it 'should be deletable', (done) ->modelProducts.delete id, (err, data) ->
            expect(err).to.be.null
            data.should.deep.equal product
            modelProducts.list.length.should.equal 0
            done();
