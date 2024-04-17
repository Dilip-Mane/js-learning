class Student{
    constructor(rollno,name,devision){
        this.rollno = rollno;
        this.name = name;
        this.devision = devision;
    }

    details(){
        console.log(`Student details => RollNumber : ${this.rollno} Name : ${this.name} Devision : ${this.devision}`);
    }
}

const jenny = new Student(110,"Jenny","A");
jenny.details();
const allen = new Student(120,"Allen","B");
allen.details();
const shaggy = new Student(130,"Shaggy","E");
shaggy.details();