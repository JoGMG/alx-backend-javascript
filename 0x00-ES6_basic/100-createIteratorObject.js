export default function createIteratorObject(report) {
  const groupedEmployees = Object.values(report.allEmployees);
  return [].concat(...groupedEmployees);
}
