'use strict'
let employeeList = [];


function Employee(employee_id, fullName, department, level, image_url) {
    this.employee_id = employee_id;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.image_url = image_url;
    this.salary = this.calculatSalary();
    this.netSlary = this.calculatNetSalary();
}
Employee.prototype.calculatSalary = function () {
    let min, max;
    if (this.level == "Senior") {
        min = 1500;
        max = 2000;
    }
    else if (this.level == "Mid-Senior") {
        min = 1000;
        max = 1500;
    }
    else {
        min = 500;
        max = 1000;
    }
    return getRandomInt(min, max);
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
Employee.prototype.calculatNetSalary = function () {
    return this.salary - this.salary * (7.5 / 100);
}
Employee.prototype.render = function () {
    document.write(this.fullName, "      ", this.salary, "<br>");
}
function printEmployeeList(arr) {
    for (let i = 0; i < arr.length; i++)
        employeeList[i].render();
}
employeeList.push(new Employee(1000, "Ghazi Samer", "Administration", "Senior"));
employeeList.push(new Employee(1001, "Lana Ali", "Finance", "Senior"));
employeeList.push(new Employee(1002, "Tamara Ayoub", "Marketing", "Senior"));
employeeList.push(new Employee(1003, "Safi Walid", "Administration", "Mid-Senior"));
employeeList.push(new Employee(1004, "Omar Zaid", "Development", "Senior"));
employeeList.push(new Employee(1005, "Rana Saleh", "Development", "Junior"));
employeeList.push(new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior"));

printEmployeeList(employeeList);
