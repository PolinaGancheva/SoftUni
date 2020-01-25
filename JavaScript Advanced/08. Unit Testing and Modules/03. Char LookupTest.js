const lookupChar = require ('../softUni/SOFTUNI-ADVANCED/Unit Testing and Modules/03. Char Lookup.js');
let expect = require('chai').expect;
let assert = require('chai').assert;

describe('lookupChar function', function(){
    it('shoud return undefiend with a non-string first parametar', function(){
        let actual = lookupChar(2,2);//undefiend
        assert.equal(actual, undefined);
    });
    it('shoud return undefiend with a non-number second parametar', function(){
        let actual = lookupChar('Poli','a');//undefiend
        assert.equal(actual, undefined);
    });
    it('shoud return undefiend with a floating point number', function(){
        let actual = lookupChar('Poli',2.2);//undefiend
        assert.equal(actual, undefined);
    });
    it('shoud return incorect index with an incorect index value', function(){
        let actual = lookupChar('poli',13);
        assert.equal(actual, 'Incorrect index');
    });
    it('shoud return incorect index with a negative index value', function(){
        let actual = lookupChar('poli',-2);
        assert.equal(actual, 'Incorrect index');
    });
    it('shoud return incorect index with an index value equal to string length', function(){
        let actual = lookupChar('poli',4);
        assert.equal(actual, 'Incorrect index');
    });
    it('shoud return corect value with corect parametrs', function(){
        let actual = lookupChar('poli',1);
        assert.equal(actual, 'o');
    });
    it('shoud return corect value with corect parametrs', function(){
        let actual = lookupChar('Poli',0);
        assert.equal(actual, 'P');
    });
})