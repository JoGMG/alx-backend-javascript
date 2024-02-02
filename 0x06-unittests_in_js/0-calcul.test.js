const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('both numbers integer', function () {
    assert.equal(calculateNumber(1, 3), 4);
  });

  it('second number float and first number integer', function () {
    assert.equal(calculateNumber(1, 3.7), 5);
  });

  it('first number float and second number integer', function () {
    assert.equal(calculateNumber(1.2, 3), 4);
  });

  it('both numbers float with decimal > 5', function () {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });

  it('both numbers float with decimal < 5', function () {
    assert.equal(calculateNumber(1.5, 3.7), 6)
  });
});
