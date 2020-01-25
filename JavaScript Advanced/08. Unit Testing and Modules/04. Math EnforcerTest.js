const mathEnforcer = require ('../softUni/SOFTUNI-ADVANCED/Unit Testing and Modules/04. Math Enforcer.js');
let expect = require('chai').expect;
let assert = require('chai').assert;

describe('mathEnforcer function', function(){
    describe('addFive function', function(){
        it('shoud return undefiend with a non-number parameter', function(){
           let actual = mathEnforcer.addFive('d');
           assert.equal(actual, undefined);
         });
        it('shoud return corect result with a number parameter', function(){
             let actual = mathEnforcer.addFive(3);
             assert.equal(actual, 8);
        });
        it('shoud return corect result with a negative parameter', function(){
              let actual = mathEnforcer.addFive(-3);
                assert.equal(actual, 2);
        });
        it('shoud return corect result with a floating point parameter', function(){
              let actual = mathEnforcer.addFive(3.2);
              assert.closeTo(actual, 8.2, 0.01);
        });
    });
    describe('subtractTen function', function(){
        it('shoud return undefiend with a non-number parameter', function(){
            let actual = mathEnforcer.subtractTen('d');
            assert.equal(actual, undefined);
        });
        it('shoud return corect result with a number parameter', function(){
            let actual = mathEnforcer.subtractTen(15);
            assert.equal(actual, 5);
        });
        it('shoud return corect result with a negative parameter', function(){
            let actual = mathEnforcer.subtractTen(-3);
            assert.equal(actual, -13);
        });
        it('shoud return corect result with a floating point parameter', function(){
            let actual = mathEnforcer.subtractTen(3.2);
            assert.closeTo(actual, -6.8, 0.01);
        });
    });
    describe('sum function', function(){
        it('shoud return undefiend with a non-number first parameter', function(){
            let actual = mathEnforcer.sum('d', 1);
            assert.equal(actual, undefined);
        });
        it('shoud return undefiend with a non-number second parameter', function(){
            let actual = mathEnforcer.sum(1,'d');
            assert.equal(actual, undefined);
        });
        it('shoud return corect result with number parameters', function(){
            let actual = mathEnforcer.sum(2,3);
            assert.equal(actual, 5);
        });
        it('shoud return corect result with a negative parameter', function(){
            let actual = mathEnforcer.sum(-3,2);
            assert.equal(actual, -1);
        });
        it('shoud return corect result with floating point parameters', function(){
            let actual = mathEnforcer.sum(3.2, 3.3);
            assert.closeTo(actual, 6.5, 0.01);
        });
    })
})