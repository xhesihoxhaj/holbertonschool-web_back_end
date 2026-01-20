export default function createReportObject(employeesList) {
  const object = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments: () => (Object.keys(employeesList).length),
  };
  return object;
}
