class Employee {

    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {

        this.emp_id = emp_id;

        this.emp_name = emp_name;

        this.emp_dept = emp_dept;

        this.emp_salary = emp_salary;

        this.emp_company = emp_company;

    }

   

}

const emp_anil = new Employee(22, "Anil", "IT", 50008, "TCS");

const emp_radha = new Employee(33, "Radha", 'RR', 74808, "Wipro");

const emp_rishi = new Employee(55, "Rishi", "Finance", 47080, "TCS");

const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");

const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");

const emp_viny = new Employee(88, "Vinayak", "IT", 75800, "TCS");

const emp_mahi = new Employee(99, "Manesh", "HR", 85000, "Infy");

 

const arrayEmployees=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny ,emp_mahi ];


console.log(`Employee working in Wipro Company`);
arrayEmployees.filter(element =>{
    return element.emp_company=="Wipro";
}).forEach(element => {
    console.log(`Employee Id : ${element.emp_id} Name : ${element.emp_name} Department : ${element.emp_dept} Salary : ${element.emp_salary} Company : ${element.emp_company}`);
});
console.log(`====================================`);

console.log(`Employee working in IT or HR Department`);
arrayEmployees.filter(element =>{
    return element.emp_dept=="IT" || element.emp_dept=="HR";
}).forEach(element => {
    console.log(`Employee Id : ${element.emp_id} Name : ${element.emp_name} Department : ${element.emp_dept} Salary : ${element.emp_salary} Company : ${element.emp_company}`);
});
console.log(`====================================`);

console.log(`Employee having ID greater than 50`);
arrayEmployees.filter(element =>{
    return element.emp_id>50;
}).forEach(element => {
    console.log(`Employee Id : ${element.emp_id} Name : ${element.emp_name} Department : ${element.emp_dept} Salary : ${element.emp_salary} Company : ${element.emp_company}`);
});
console.log(`====================================`);

console.log(`Employee whose name start with A or V or M`);
arrayEmployees.filter(element =>{
    return element.emp_name.startsWith("A") || element.emp_name.startsWith("V") || element.emp_name.startsWith("M") ;
}).forEach(element => {
    console.log(`Employee Id : ${element.emp_id} Name : ${element.emp_name} Department : ${element.emp_dept} Salary : ${element.emp_salary} Company : ${element.emp_company}`);
});
console.log(`====================================`);

console.log(`Find average salary of all employee`);
var sum = arrayEmployees.reduce((runningTotal,element) =>{
    return runningTotal+element.emp_salary;
},0);
console.log(`Average salary of all employee : ${sum / arrayEmployees.length}`);

console.log(`====================================`);

console.log(`Find average salary of all employee working in IT department`);
var empWorkingInITDept = arrayEmployees.filter(element =>{
    return element.emp_dept=="IT";
});
var sum = empWorkingInITDept.reduce((runningTotal,element) => {
    return runningTotal+element.emp_salary;
},0);
console.log(`Average salary of all employee of IT Department : ${sum / empWorkingInITDept.length}`);
