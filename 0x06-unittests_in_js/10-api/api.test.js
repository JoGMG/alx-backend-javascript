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

  it('GET /available_payments should return correct status code and response', (done) => {
    const obj = {
      payment_methods: {
        credit_cards: true,
        paypal: false
      }
    }
    request.get(`${url}/available_payments`, (error, response, body) => {
      expect(response.statusCode).to.be.equal(200);
      expect(JSON.parse(body)).to.be.deep.equal(obj);
      done();
    });
  });

  it('GET /login should return correct status code and response', (done) => {
    request.post(`${url}/login`, {json: {userName: 'Betty'}}, (error, response, body) => {
      expect(response.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome Betty');
      done();
    });
  });
});
