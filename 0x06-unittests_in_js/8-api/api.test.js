const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./api'); // Path to your Express app file

chai.use(chaiHttp);
const { expect } = chai;

describe('Index page', () => {
  it('should return correct status code', (done) => {
    chai.request(app)
      .get('/')
      .end((error, response) => {
        expect(response).to.have.status(200);
        done();
      });
  });

  it('should return correct result', (done) => {
    chai.request(app)
      .get('/')
      .end((error, response) => {
        expect(response.text).to.equal('Welcome to the payment system');
        done();
      });
  });
});
