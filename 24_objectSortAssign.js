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

const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

 

const arrayEmployees=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny ,emp_mahi ];
console.log(`Employee array sorted by id in descending order`);
arrayEmployees.sort((emp1,emp2)=>{
    return emp2.emp_id>emp1.emp_id?1:-1;
}).forEach((element)=>{
    console.log(`Employee Id : ${element.emp_id} Name : ${element.emp_name} Department : ${element.emp_dept}`);
})
console.log(`===================================================`);

console.log(`Employee array sorted by department in ascending order`);
arrayEmployees.sort((emp1,emp2)=>{
    return emp1.emp_dept>emp2.emp_dept?1:-1;
}).forEach((element)=>{
    console.log(`Employee Id : ${element.emp_id} Department : ${element.emp_dept} Company : ${element.emp_company}`);
})
console.log(`===================================================`);

console.log(`Employee array sorted by salary in descending order`);
arrayEmployees.sort((emp1,emp2)=>{
    return emp2.emp_salary>emp1.emp_salary?1:-1;
}).forEach((element)=>{
    console.log(`Name : ${element.emp_name} Salary : ${element.emp_salary} Company : ${element.emp_company}`);
})