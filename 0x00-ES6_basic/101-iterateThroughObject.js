export default function iterateThroughObject(reportWithIterator) {
  let result = '';

  for (const department in reportWithIterator.allEmployees) {
    result += reportWithIterator.allEmployees[department].join(' | ') + ' | ';
  }

  // Remove the trailing ' | '
  return result.slice(0, -3);
}
