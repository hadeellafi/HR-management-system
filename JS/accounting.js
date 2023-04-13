'use strict'
let allEmployee = [];
let allDepartment = [];
getEmployees();
let administration = new Department(1, "Administration");
let marketing = new Department(2, "Marketing");
let development = new Department(3, "Development");
let finance = new Department(4, "Finance");
calculatTolal()
renderAllDepartment();

function Department(departmentNum, departmentName) {
    this.departmentNum = departmentNum;
    this.departmentName = departmentName;
    this.totalEmploy = 0;
    this.totalSalary = 0;
    allDepartment.push(this);
}
function getEmployees() {
    let jsonArr = localStorage.getItem('allEmployee');
    console.log(jsonArr);
    let dataFromStorage = JSON.parse(jsonArr);
    allEmployee = dataFromStorage;
}
function calculatTolal() {
    if (allEmployee == null) {
        allEmployee = [];
    }
    else {
        for (let i = 0; i < allEmployee.length; i++) {
            for (let j = 0; j < allDepartment.length; j++) {
                if (allEmployee[i].departmentNum == allDepartment[j].departmentNum) {
                    allDepartment[j].totalEmploy++;
                    allDepartment[j].totalSalary += allEmployee[i].salary; break;
                }
            }
        }
    }
}
function renderAllDepartment() {
    const tableEl = document.getElementById('tableInfo');
    const trEl = document.createElement('tr');
    tableEl.appendChild(trEl);

    const thEl = document.createElement('th');
    trEl.appendChild(thEl);
    thEl.textContent += 'Dep_Number';
    thEl.setAttribute("class", "tableHeader")

    const th1El = document.createElement('th');
    trEl.appendChild(th1El);
    th1El.textContent += 'Department Name';
    th1El.setAttribute("class", "tableHeader")

    const th2El = document.createElement('th');
    trEl.appendChild(th2El);
    th2El.textContent += 'Number of Employees';
    th2El.setAttribute("class", "tableHeader")

    const th3El = document.createElement('th');
    trEl.appendChild(th3El);
    th3El.textContent += 'Total Salary';
    th3El.setAttribute("class", "tableHeader")

    const th4El = document.createElement('th');
    trEl.appendChild(th4El);
    th4El.textContent += 'Avarege Of Salary';
    th4El.setAttribute("class", "tableHeader")
    let totalOfTotalEmploy = 0;
    let totalOfTotalSalary = 0;
    if (allEmployee == null) {
        allEmployee = [];
    }
    else {
        for (let i = 0; i < allDepartment.length; i++) {
            const tr1El = document.createElement('tr');
            tableEl.appendChild(tr1El);

            ////td1
            const td1 = document.createElement('td');
            td1.textContent = allDepartment[i].departmentNum;
            td1.setAttribute("class", "tableBody");
            tr1El.appendChild(td1);

            /////td2
            const td2 = document.createElement('td');
            td2.setAttribute("class", "tableBody");
            td2.textContent = allDepartment[i].departmentName;
            tr1El.appendChild(td2);

            ////td 3
            const td3 = document.createElement('td');
            td3.setAttribute("class", "tableBody");
            td3.textContent = allDepartment[i].totalEmploy;
            tr1El.appendChild(td3);
            totalOfTotalEmploy += allDepartment[i].totalEmploy;///for total in footer

            ////td 4
            const td4 = document.createElement('td');
            td4.setAttribute("class", "tableBody");
            td4.textContent = allDepartment[i].totalSalary;
            tr1El.appendChild(td4);
            totalOfTotalSalary += allDepartment[i].totalSalary;

            ////td5
            const td5 = document.createElement('td');
            td5.setAttribute("class", "tableBody");
            if (allDepartment[i].totalEmploy !== 0) {
                td5.textContent = Math.round(allDepartment[i].totalSalary / allDepartment[i].totalEmploy);
            } else {
                td5.textContent = 0;
            }
            tr1El.appendChild(td5);
        }
    }
    //////footer
    const tr1El = document.createElement('tr');
    tableEl.appendChild(tr1El);

    ////td1
    const td1 = document.createElement('td');
    td1.setAttribute("class", "tableFooter");
    td1.textContent = "#";
    tr1El.appendChild(td1);

    /////td2
    const td2 = document.createElement('td');
    td2.setAttribute("class", "tableFooter");
    td2.textContent = "Total";
    tr1El.appendChild(td2);

    ////td 3
    const td3 = document.createElement('td');
    td3.setAttribute("class", "tableFooter");
    td3.textContent = totalOfTotalEmploy;
    tr1El.appendChild(td3);
    ////td 4
    const td4 = document.createElement('td');
    td4.setAttribute("class", "tableFooter");
    td4.textContent = totalOfTotalSalary;
    tr1El.appendChild(td4);
    ////td5
    const td5 = document.createElement('td');
    td5.setAttribute("class", "tableFooter");
    if (totalOfTotalEmploy !== 0) {
        td5.textContent = Math.round(totalOfTotalSalary / totalOfTotalEmploy);
    } else {
        td5.textContent = 0;
    }
    tr1El.appendChild(td5);

    // |Total|Total number of */


}


