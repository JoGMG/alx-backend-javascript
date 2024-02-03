const express = require('express');

const app = express();
const port = 7865;

app.use(express.json());

app.get('/', (request, response) => {
  response.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (request, response) => {
  const { id } = request.params;
  response.send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (request, response) => {
  const paymentMethods = {
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  };
  response.json(paymentMethods);
});

app.post('/login', (request, response) => {
  const username = request.body.userName;
  if (username) {
    response.send(`Welcome ${username}`);
  }
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
