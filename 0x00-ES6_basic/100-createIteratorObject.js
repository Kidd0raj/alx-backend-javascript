export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);

  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    next() {
      if (currentDepartmentIndex < departments.length) {
        const currentDepartment = departments[currentDepartmentIndex];
        if (currentEmployeeIndex < currentDepartment.length) {
          const result = {
            value: currentDepartment[currentEmployeeIndex],
            done: false,
          };
          currentEmployeeIndex++;
          return result;
        } else {
          // Move to the next department
          currentDepartmentIndex++;
          currentEmployeeIndex = 0;
          return this.next(); // Recursive call to handle empty departments
        }
      } else {
        return { done: true };
      }
    },
  };
}
