/**
 * Create a file `full_server/utils.js`, in the file create a function
 * named `readDatabase` that accepts a file path as argument:
 *  - It should read the database asynchronously
 *  - It should return a promise
 *  - When the file is not accessible, it should reject the promise
 *    with the error
 *  - When the file can be read, it should return an object of arrays
 *    of the firstname of students per fields
 */

const fs = require('fs').promises;

async function readDatabase(filePath) {
  let data;

  try {
    data = await fs.readFile(filePath, 'utf-8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  const dataLines = data.split('\n');
  const students = dataLines.slice(1).filter((line) => line !== '');

  const fields = {};
  fields.total = students.length;
  students.forEach((line) => {
    const student = line.split(',');
    const field = student[3].trim();
    const firstName = student[0];
    if (!fields[field]) {
      fields[field] = [];
    }
    fields[field].push(firstName);
  });

  return fields;
}

module.exports = readDatabase;
