/**
 * Using the database `database.csv` (provided in project description),
 * create a function `countStudents` in the file `2-read_file.js`
 *  - Create a function named `countStudents`. It should accept a path
 *    in argument
 *  - The script should attempt to read the database file synchronously
 *  - If the database is not available, it should throw an error with the
 *    text `Cannot load the database`
 *  - If the database is available, it should log the following message
 *    to the console `Number of students: NUMBER_OF_STUDENTS`
 *  - It should log the number of students in each field, and the list
 *    with the following format: `Number of students in FIELD: 6. List:
 *    LIST_OF_FIRSTNAMES`
 *  - CSV file can contain empty lines (at the end) - and they are not a
 *    valid student!
 */

const fs = require('fs');

function countStudents(filePath) {
  let data;

  try {
    data = fs.readFileSync(filePath, 'utf-8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const lines = data.split('\n');
  const students = lines.slice(1).filter((line) => line !== '');

  console.log(`Number of students: ${students.length}`);

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
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
    }
  }
}

module.exports = countStudents;
