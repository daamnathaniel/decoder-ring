const caesar = require('../src/caesar');
const expect = require('chai').expect;

describe ('caesar', () => {
    it('Should return false if shift value is less than -25 ', () => {
        expect(caesar('a', -26)).to.be.false;
    });

    it('Should return false if shift value is greater than 25', () => {
        expect(caesar('a', 99)).to.be.false;
    });

    it('Should have only lowerCase letters', () => {
        expect(caesar('A', 2)).to.equal('c');
    });

    it('Should handle shifts going past the end of the alphabet', () => {    
        expect(caesar('z', 3)).to.equal('c');
    });
      });



