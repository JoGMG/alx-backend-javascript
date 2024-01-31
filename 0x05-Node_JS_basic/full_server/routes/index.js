/**
 * Inside the file `full_server/routes/index.js`:
 *  - Link the route `/` to the `AppController`
 *  - Link the route `/students` and `/students/
 *    :major` to the `StudentsController`
 */

const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

function linkRoutes(app) {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
}

module.exports = linkRoutes;
