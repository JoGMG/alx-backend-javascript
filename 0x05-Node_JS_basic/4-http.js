/**
 * In a file named `4-http.js`, create a small HTTP server
 * using the `http` module:
 * It should be assigned to the variable `app` and this one
 * must be exported
 * HTTP server should listen on port 1245
 * Displays `Hello Holberton School!` in the page body for
 * any endpoint as plain text
 */

const http = require('http');

const app = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello Holberton School!');
});

app.listen(1245);

module.exports = app;
