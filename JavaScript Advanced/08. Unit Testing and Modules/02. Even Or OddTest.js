const isOddOrEven = require ('../softUni/SOFTUNI-ADVANCED/Unit Testing and Modules/02. Even Or Odd.js');
let expect = require('chai').expect;
let assert = require('chai').assert;

describe('isOddOrEven function', function(){
    it('Pass number to return undefiend', function(){
        let actual = isOddOrEven(2);//undefiend
        assert.equal(actual, undefined);
    });
    it('Pass string with even length', function(){
        let actual = isOddOrEven('toni');//undefiend
        assert.equal(actual, 'even');
    });
    it('Pass string with odd length', function(){
        let actual = isOddOrEven('antonia');//undefiend
        assert.equal(actual, 'odd');
    });
})