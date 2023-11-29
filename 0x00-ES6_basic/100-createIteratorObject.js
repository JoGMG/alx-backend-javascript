export default function createIteratorObject(report) {
  const employees = [];
  const groupedEmployees = Object.values(report.allEmployees);
  return employees.concat(...groupedEmployees);
}
