const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  const url = 'http://localhost:7865';

  it('GET / should return correct status code and response', (done) => {
    request.get(`${url}/`, (error, response, body) => {
      expect(response.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('GET /cart/:id should return correct status code and response for valid id', (done) => {
    request.get(`${url}/cart/12`, (error, response, body) => {
      expect(response.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 12');
      done();
    });
  });

  it('GET /cart/:id should return correct status code for invalid id', (done) => {
    request.get(`${url}/cart/hello`, (error, response, body) => {
      expect(response.statusCode).to.be.equal(404);
      done();
    });
  });
});
