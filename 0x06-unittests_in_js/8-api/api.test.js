const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  const API_URL = 'http://localhost:7865';

  it('GET / should return correct status code and response', (done) => {
    request.get(`${API_URL}/`, (error, response, body) => {
      expect(response.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});
