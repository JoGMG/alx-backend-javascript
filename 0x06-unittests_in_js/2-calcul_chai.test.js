const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function () {
  describe('when type == SUM', function () {
    it('positive numbers', function () {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('negative numbers', function () {
      expect(calculateNumber('SUM', -1.4, -4.5)).to.equal(-5);
    });

    it('0 and a positive number', function () {
      expect(calculateNumber('SUM', 0, 3.7)).to.equal(4);
    });

    it('negative number and 0', function () {
      expect(calculateNumber('SUM', -1.4, 0)).to.equal(-1);
    });
  });

  describe('when type == SUBTRACT', function () {
    it('positive numbers', function () {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('negative numbers', function () {
      expect(calculateNumber('SUBTRACT', -1.4, -4.5)).to.equal(3);
    });

    it('0 and a positive number', function () {
      expect(calculateNumber('SUBTRACT', 0, 3.7)).to.equal(-4);
    });

    it('negative number and 0', function () {
      expect(calculateNumber('SUBTRACT', -1.4, 0)).to.equal(-1);
    });
  });

  describe('when type == DIVIDE', function () {
    it('positive numbers', function () {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('negative numbers', function () {
      expect(calculateNumber('DIVIDE', -1.4, -4.5)).to.equal(0.25);
    });

    it('0 and a positive number', function () {
      expect(calculateNumber('DIVIDE', 0, 3.7)).to.equal(0);
    });

    it('negative number and 0', function () {
      expect(calculateNumber('DIVIDE', -1.4, 0)).to.equal('Error');
    });
  });
});
