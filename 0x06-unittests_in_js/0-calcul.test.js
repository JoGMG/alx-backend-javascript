const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('a and b as float integers', function () {
    assert.equal(calculateNumber(1.0, 3.0), 4);
  });

  it('rounding up a', function () {
    assert.equal(calculateNumber(1.7, 3.0), 5);
  });

  it('rounding up b', function () {
    assert.equal(calculateNumber(1.0, 3.7), 5);
  });

  it('rounding up a and b', function () {
    assert.equal(calculateNumber(1.7, 3.7), 6)
  });

  it('rounding down a', function () {
    assert.equal(calculateNumber(1.2, 3.0), 4);
  });

  it('rounding down b', function () {
    assert.equal(calculateNumber(1.0, 3.2), 4)
  });

  it('rounding down a and b', function () {
    assert.equal(calculateNumber(1.2, 3.2), 4)
  });
});
