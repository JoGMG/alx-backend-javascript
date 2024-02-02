const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  describe('when type == SUM', function () {
    it('positive numbers', function () {
      assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('negative numbers', function () {
      assert.equal(calculateNumber('SUM', -1.4, -4.5), -5);
    });

    it('0 and a positive number', function () {
      assert.equal(calculateNumber('SUM', 0, 3.7), 4);
    });

    it('negative number and 0', function () {
      assert.equal(calculateNumber('SUM', -1.4, 0), -1);
    });
  });

  describe('when type == SUBTRACT', function () {
    it('positive numbers', function () {
      assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('negative numbers', function () {
      assert.equal(calculateNumber('SUBTRACT', -1.4, -4.5), 3);
    });

    it('0 and a positive number', function () {
      assert.equal(calculateNumber('SUBTRACT', 0, 3.7), -4);
    });

    it('negative number and 0', function () {
      assert.equal(calculateNumber('SUBTRACT', -1.4, 0), -1);
    });
  });

  describe('when type == DIVIDE', function () {
    it('positive numbers', function () {
      assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('negative numbers', function () {
      assert.equal(calculateNumber('DIVIDE', -1.4, -4.5), 0.25);
    });

    it('0 and a positive number', function () {
      assert.equal(calculateNumber('DIVIDE', 0, 3.7), 0);
    });

    it('negative number and 0', function () {
      assert.equal(calculateNumber('DIVIDE', -1.4, 0), 'Error');
    });
  });
});
