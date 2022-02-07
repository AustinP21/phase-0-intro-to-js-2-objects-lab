const employee = {
    name: 'key',
    streetAddress: 'key1',
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = {...employee, streetAddress: value};
    return updatedEmployee
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee [key] = value;
    return employee
}
function deleteFromEmployeeByKey(employee, key) {
    const updatedEmployee = {...employee, key};
    delete updatedEmployee.name;
    return updatedEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee
}


