const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function() {
  let consoleLogSpy;

  beforeEach(function() {
    // Set up the spy before each test
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    // Clean up the spy after each test
    consoleLogSpy.restore();
  });

  it('logs the total for inputs 100 and 20', function() {
    sendPaymentRequestToApi(100, 20);
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
  });

  it('logs the total for inputs 10 and 10', function() {
    sendPaymentRequestToApi(10, 10);
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
  });
});
