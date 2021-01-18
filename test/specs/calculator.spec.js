const Calculator = require('../../app/Calculator');
const { expect } = require('chai');

describe('Calculator\'s add function test', () => {
    let calculator; 

    beforeEach(() => {
        calculator = new Calculator();
    });

    afterEach(() => {
        calculator = null;
    });

    it('should return 3 when called with numbes 2,3,1', function() {
        expect(calculator.add(2,1)).to.be.equal(3);
    });
    it('should return 0 when called with numbes 2,-3,1', function() {
        expect(calculator.add(2,-3,1)).to.be.equal(0);
    });
    it('should return 3 when called with numbes 2,0,1', function() {
        expect(calculator.add(2,0,1)).to.be.equal(3);
    });

});

describe('Calculator\'s multiply function test', () => {
    let calculator; 

    beforeEach(() => {
        calculator = new Calculator();
    });

    afterEach(() => {
        calculator = null;
    });

    it('should return 6 when called with numbes 2,3', function() {
        expect(calculator.multiply(2,3)).to.be.equal(6);
    });
    it('should return 0 when called with numbes 2,0', function() {
        expect(calculator.multiply(2,0)).to.be.equal(0);
    });
    it('should return 3 when called with numbes 3,1', function() {
        expect(calculator.multiply(3,1)).to.be.equal(3);
    });

});