'use strict'
let employeesList = [];


function Employee(employee_id, fullName, department, level, image_url) {
    this.employee_id = employee_id;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.image_url = image_url;
    this.salary =this.calculatSalary();
    this.netSlary = this.calculatSalary();
    employeesList.push(this);
}
Employee.prototype.calculatSalary = function () {
    if (this.level == "Senior") {
        this.salary=getRandomInt(1500, 2000);
    }
    else if (this.level == "Mid-Senior") {
        this.salary=getRandomInt(1000, 1500);
    }
    else {
        this.salary=getRandomInt(500, 1000);
    } 
    return this.salary;
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
        arr[i].render();
}



let employee1=new Employee(1000, "Ghazi Samer", "Administration", "Senior");
let employee2=new Employee(1001, "Lana Ali", "Finance", "Senior");
let employee3=new Employee(1002, "Tamara Ayoub", "Marketing", "Senior");
let employee4=new Employee(1003, "Safi Walid", "Administration", "Mid-Senior");
let employee5=new Employee(1004, "Omar Zaid", "Development", "Senior");
let employee6=new Employee(1005, "Rana Saleh", "Development", "Junior");
let employee7=new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior");

printEmployeeList(employeesList);
