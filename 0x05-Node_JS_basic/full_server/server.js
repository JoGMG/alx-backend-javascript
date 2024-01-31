/**
 * Inside the file named `full_server/server.js`, create
 * a small Express server:
 *  - It should use the routes defined in `full_server
 *    /routes/index.js`
 *  - It should use the port `1245`
 */

const express = require('express');
const linkRoutes = require('./routes');

const app = express();
linkRoutes(app);
app.listen(1245);

module.exports = app;
export default app;
