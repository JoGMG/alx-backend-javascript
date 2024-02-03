const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function() {
  it('validates the usage of the Utils function and console.log 1', function() {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
    calculateNumberStub.returns(120);

    const consoleLogSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(consoleLogSpy.calledWithExactly('The total is: 120')).to.be.true;

    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });

  it('validates the usage of the Utils function and console.log 1', function() {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
    calculateNumberStub.returns(20);

    const consoleLogSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(10, 10);

    expect(calculateNumberStub.calledOnceWithExactly('SUM', 10, 10)).to.be.true;
    expect(consoleLogSpy.calledWithExactly('The total is: 20')).to.be.true;

    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
