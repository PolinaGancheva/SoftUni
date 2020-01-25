const StringBuilder = require ('../../softUni/SOFTUNI-ADVANCED/Unit Testing and Modules/05. String Builder.js');
let expect = require('chai').expect;
let assert = require('chai').assert;
describe('StringBuilder', function(){
    it('has functions attached to prototype', function () {
        let expected = new StringBuilder();
        expect(Object.getPrototypeOf(expected).hasOwnProperty('append')).to.equal(true, "Missing append function");
        expect(Object.getPrototypeOf(expected).hasOwnProperty('prepend')).to.equal(true, "Missing prepend function");
        expect(Object.getPrototypeOf(expected).hasOwnProperty('insertAt')).to.equal(true, "Missing insertAt function");
        expect(Object.getPrototypeOf(expected).hasOwnProperty('remove')).to.equal(true, "Missing remove function");
        expect(Object.getPrototypeOf(expected).hasOwnProperty('toString')).to.equal(true, "Missing toString function");
    });
    it('Can be instantiated with a passed in string argument or without anything', function(){
       let expected = new StringBuilder();
       expect(expected).to.be.an('object');
    });

    it('Can be instantiated with a passed in string argument', function(){
       let expected = new StringBuilder('test');
       expect(expected._stringArray).to.have.lengthOf(4);
    });
    it('must initialize data to an empty array', function () {
        let expected = new StringBuilder();
        expect(expected._stringArray instanceof Array).to.equal(true, 'Data must be of type array');
    });
    it('append(string) - length', function(){
       let expected = new StringBuilder('test');
       expected.append('Demo');
       expect(expected._stringArray).to.have.lengthOf(8);
    });

    it('append(string) - if appends at the end of the string', function(){
       let expected = new StringBuilder('te');
       expected.append('Demo');
       expect(expected._stringArray[2]).to.be.equal('D');
    });
    it('append(string) - if argument is not a string throw error', function(){
       let expected = new StringBuilder('test');
       expect(() => expected.append(2, 2)).to.throw("Argument must be string");
    });

    it('prepend(string) - if prepedns at the beginning of the string', function(){
       let expected = new StringBuilder('te');
       expected.prepend('Demo');
       expect(expected._stringArray[0]).to.be.equal('D');
    });
    it('prepend(string) - if argument is not a string throw error', function(){
       let expected = new StringBuilder('test');
       expect(() => expected.prepend(2, 2)).to.throw("Argument must be string");
    });

    it('insertAt(string, index)', function(){
       let expected = new StringBuilder('test');
       expected.insertAt('Demo', 2);
       expect(expected._stringArray[2]).to.be.equal('D');
    });
    it('insertAt(string, index) - if argument is not a string throw error', function(){
       let expected = new StringBuilder('test');
       expect(() => expected.insertAt(2, 2)).to.throw("Argument must be string");
    });
    

    it('remove(startIndex, length)', function(){
       let expected = new StringBuilder('test');
       expected.remove(1, 2);
       expect(expected._stringArray[1]).to.be.equal('t');
    });

    it('toString()', function(){
       let expected = new StringBuilder('test');
       expected.toString();
       expect(expected.toString()).to.be.equal('test');
    });
    it('if argument is not a string throw error', function(){
       expect(() => new StringBuilder(2)).to.throw("Argument must be string");
    });
    it('if argument is not a string throw error', function(){
       expect(() => new StringBuilder(true)).to.throw("Argument must be string");
    });
})