// Initialize the employee Object
let employee = {
    name: 'John Doe',
    streetAddress: '123 Main St'
};

// Function to update an employee Object with a new key-value pair without mutating the original Object
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value
    };
}

// Function to destructively update an employee Object with a new key-value pair
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

// Function to delete a key-value pair from an employee Object without mutating the original Object
function deleteFromEmployeeByKey(employee, key) {
    let newObj = { ...employee };
    delete newObj[key];
    return newObj;
}

// Function to destructively delete a key-value pair from an employee Object
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
