/**
 * In a file named `7-http_express.js`, recreate the small HTTP
 * server using `Express`:
 *  - It should be assigned to the variable app and this one must
 * be exported
 *  - HTTP server should listen on port 1245
 *  - It should return plain text
 *  - When the URL path is `/`, it should display `Hello Holberton
 *    School!` in the page body
 *  - When the URL path is `/students`, it should display `This is
 *    the list of our students` followed by the same content as the
 *    file 3-read_file_async.js (with and without the database) -
 *    the name of the database must be passed as argument of the file
 *  - CSV file can contain empty lines (at the end) - and they are
 *    not a valid student!
 */

const fs = require('fs').promises;
const express = require('express');

async function countStudents(filePath) {
  let data;

  try {
    data = await fs.readFile(filePath, 'utf-8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const lines = data.split('\n');
  const students = lines.slice(1).filter((line) => line !== '');

  let output = `Number of students: ${students.length}\n`;

  const fields = {};
  for (const student of students) {
    const field = student.split(',')[3].trim();
    if (!fields[field]) {
      fields[field] = [];
    }
    fields[field].push(student.split(',')[0]);
  }

  for (const field in fields) {
    if (fields[field]) {
      output += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
    }
  }

  return output.trim();
}

const app = express();

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

app.get('/students', async (request, response) => {
  try {
    const data = await countStudents(process.argv[2]);
    response.send(`This is the list of our students\n${data}`);
  } catch (error) {
    response.status(500).send(`This is the list of our students\n${error.message}`);
  }
});

app.listen(1245);

module.exports = app;
