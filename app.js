const employees = [
    { id: 1, name: "Rahul", department: "IT" },
    { id: 2, name: "Amit", department: "HR" },
    { id: 3, name: "Priya", department: "Finance" }
];

// Function 1: Display all employees
function getEmployees() {
    return employees;
}

// Function 2: Search employee by ID
function getEmployeeById(employeeId) {

    return employees.find(employee => employee.id === employeeId) || null;

}

// Function 3: Add a new employee
function addEmployee(id, name, department) {

    const employee = {
        id: id,
        name: name,
        department: department
    };

    employees.push(employee);

    return employee;
}

// Main program
console.log("Employee Management System");

console.log("\nAll Employees:");
console.log(getEmployees());

console.log("\nSearch Employee:");
console.log(getEmployeeById(1));

console.log("\nAdding New Employee:");
console.log(addEmployee(4, "Jay", "Cloud"));

console.log("\nUpdated Employee List:");
console.log(getEmployees());