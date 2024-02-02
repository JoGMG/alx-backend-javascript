const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function() {
  it('validates the usage of the Utils function and console.log', function() {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
    calculateNumberStub.returns(10);

    const consoleLogSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(consoleLogSpy.calledWithExactly('The total is: 10')).to.be.true;

    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
