/**
 * Inside the file `full_server/controllers/StudentsController.js`,
 * create a class named `StudentsController`. Add two static methods:
 *
 * The first one is `getAllStudents`:
 *  - The method accepts `request` and `response` as argument
 *  - It should return a status 200
 *  - It calls the function `readDatabase` from the `utils` file, and
 *    display in the page:
 *    - First line: `This is the list of our students`
 *    - And for each field (order by alphabetic order case
 *      insensitive), a line that displays the number of students in
 *      the field, and the list of first names (ordered by appearance
 *      in the database file) with the following format: `Number of
 *      students in FIELD: 6. List: LIST_OF_FIRSTNAMES`
 *  - If the database is not available, it should return a status 500
 *    and the error message `Cannot load the database`
 *
 * The second one is `getAllStudentsByMajor`:
 *  - The method accepts `request` and `response` as argument
 *  - It should return a status 200
 *  - It uses a parameter that the user can pass to the browser `major`.
 *    The `major` can only be `CS` or `SWE`. If the user is passing
 *    another parameter, the server should return a 500 and the error
 *    `Major parameter must be CS or SWE`
 *  - It calls the function `readDatabase` from the `utils` file, and
 *    display in the page the list of first names for the students
 *    (ordered by appearance in the database file) in the specified field
 *    `List: LIST_OF_FIRSTNAMES_IN_THE_FIELD`
 *  - If the database is not available, it should return a status 500 and
 *    the error `message Cannot load the database`
 */

const readDatabase = require('../utils');

const MAJOR = ['CS', 'SWE'];

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const data = await readDatabase(process.argv[2]);
      let output;
      for (const field in data) {
        if (field !== 'total') {
          output += `Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}\n`;
        }
      }
      response.status(200).send(`This is the list of our students\n${output.trim()}`);
    } catch (error) {
      response.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(request, response) {
    try {
      const { major } = request.params;
      if (!MAJOR.includes(major)) {
        response.status(500).send('Major parameter must be CS or SWE');
        return;
      }

      const data = await readDatabase(process.argv[2]);
      let output;
      for (const field in data) {
        if (major === field) {
          output = `List: ${data[field].join(', ')}`;
        }
      }
      response.status(200).send(output.trim());
    } catch (error) {
      response.status(500).send(error.message);
    }
  }
}

module.exports = StudentsController;
