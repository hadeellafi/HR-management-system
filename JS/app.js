'use strict'
let allEmployee = [];
const usedIds = [];
let form = document.getElementById('employeeInfo');
form.addEventListener('submit', submitHandler);

const section1El = document.getElementById('dep1');
section1El.setAttribute('style', 'display:flex;flex-wrap:wrap;justify-content:space-evenly;')
const section2El = document.getElementById('dep2');
section2El.setAttribute('style', 'display:flex;flex-wrap:wrap;justify-content:space-evenly;')
const section3El = document.getElementById('dep3');
section3El.setAttribute('style', 'display:flex;flex-wrap:wrap;justify-content:space-evenly;')
const section4El = document.getElementById('dep4');
section4El.setAttribute('style', 'display:flex;flex-wrap:wrap;justify-content:space-evenly;')
////////////////////constructer///////
function Employee(employee_id, fullName, department, departmentNum, level, image_url) {
    this.employee_id = employee_id;
    this.fullName = fullName;
    this.department = department;
    this.departmentNum = departmentNum;
    this.level = level;
    this.image_url = `./assets/${image_url}.jpg`;
    this.salary = 0;
    this.netSalary = 0;
    allEmployee.push(this);
}
function generateEmployeeId() {
    while (true) {
        const newId = Math.floor(Math.random() * 9000) + 1000;
        if (!usedIds.includes(newId)) {
            usedIds.push(newId);
            return newId;
        }
    }
}

Employee.prototype.calculatSalary = function () {
    if (this.level == "Senior") {
        this.salary = getRandomInt(1500, 2000);
    }
    else if (this.level == "Mid-Senior") {
        this.salary = getRandomInt(1000, 1500);
    }
    else {
        this.salary = getRandomInt(500, 1000);
    }
    return this.salary;
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
Employee.prototype.calculatNetSalary = function () {
    this.netSalary = this.salary - this.salary * (7.5 / 100);
    return this.netSalary;
}

function generateDepartmentNum(department) {
    switch (department) {
        case "Administration": return 1;
        case "Marketing": return 2;
        case "Development": return 3;
        case "Finance": return 4;
    }
}

////////////////////////////
function submitHandler(event) {
    //event.preventDefault();
    let fullName = event.target.fullName.value;
    let department = event.target.department.value;
    let departmentNum = generateDepartmentNum(department);
    let level = event.target.level.value;
    let img_url = event.target.img_url.value;
    let id = generateEmployeeId();
    let employee = new Employee(id, fullName, department, departmentNum, level, img_url);
    employee.calculatSalary();
    employee.calculatNetSalary();
    ////step 1
    let jsonArr = JSON.stringify(allEmployee);
    localStorage.setItem("allEmployee", jsonArr);
}
function getEmployees() {
    // STEP2: Get the array from the localstorage
    let jsonArr = localStorage.getItem('allEmployee');
    let dataFromStorage = JSON.parse(jsonArr);
    allEmployee = dataFromStorage;
}

function render(arr) {
    ///check if arr null
    if (allEmployee == null) {
        allEmployee = [];
    }
    else {
        for (let i = 0; i < arr.length; i++) {
            let div1El = document.createElement('div');
            div1El.setAttribute('style', 'background-color:#F4EEE0;color:#393646;margin:5px;border-radius:40px;text-align:center');
            //img
            const imgEl = document.createElement('img');
            imgEl.src = arr[i].image_url;
            imgEl.setAttribute('style', 'width:70%;height:170px;margin: 5px auto 0 auto;border-radius:20px;diplay:block');
            div1El.appendChild(imgEl);
            //p1
            const p1El = document.createElement('p');
            p1El.textContent = `Name:${arr[i].fullName}-ID:${arr[i].employee_id}`;
            div1El.appendChild(p1El);
            //p2
            const p2El = document.createElement('p');
            p2El.textContent = `Department:${arr[i].department}-Level:${arr[i].level} `;
            div1El.appendChild(p2El);
            //p3
            const p3El = document.createElement('p');
            p3El.textContent = arr[i].netSalary;
            p2El.appendChild(p3El);
            /////div location 
            if (arr[i].departmentNum == 1) {
                section1El.appendChild(div1El);
            }
            else if (arr[i].departmentNum == 2) {
                section2El.appendChild(div1El);
            }
            else if (arr[i].departmentNum == 3) {
                section3El.appendChild(div1El);
            }
            else {
                section4El.appendChild(div1El);
            }
        }
    }

}
////in space
getEmployees()
render(allEmployee)