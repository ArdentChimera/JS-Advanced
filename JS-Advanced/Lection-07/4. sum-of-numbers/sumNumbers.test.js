const { sum } = require('./sumNumbers');
const expect = require('chai').expect;
const assert = require('chai').assert;

describe('sumNumbers', () => {
    it('should sum all the numbers from the array', () => {
        let sumNumbers = sum([1, 2, 3, 4]);
        expect(sumNumbers).to.be.equal(10);
    });

    it('should return 0 if we pass empty array', () => {
        let sumNumbers = sum([]);
        expect(sumNumbers).to.be.equal(0);
    });

    it('should return NaN if we pass string parameters in array', () => {
        let sumNumbers = sum(['test', 'test', 'test']);
        assert.isNaN(sumNumbers, 'NaN is NaN');
    });
});