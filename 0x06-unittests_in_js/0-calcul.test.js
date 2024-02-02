const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('integer numbers', function () {
    assert.equal(calculateNumber(1, 3), 4);
  });

  it('one float and one integer number', function () {
    assert.equal(calculateNumber(1, 3.7), 5);
  });

  it('two float numbers with decimal > 5', function () {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });

  it('two float numbers with decimal < 5', function () {
    assert.equal(calculateNumber(1.5, 3.7), 6)
  });
});
