const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function() {
  it('validates the usage of the Utils function', function() {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberSpy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    calculateNumberSpy.restore();
  });
});
