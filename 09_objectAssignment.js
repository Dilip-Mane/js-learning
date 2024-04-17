var professor = {
    name: "RS",
    age: 40,
    mobile : 8989767655,
    dept: "BCA",
    HOD:"RT",
    certificates:["Hacker rank participation","Certification IFE course","Certificate in ADV Programming"],
    degrees :  {
        engineering: "CSC",
        PHD:"ADV computing",
        yearOfDoctorate: 2022,
        getDegrees: function(){

            console.log(`Engineering: ${this.engineering} PHD: ${this.PHD} yearOfDoctorate: ${this.yearOfDoctorate}`);
        }
    },
    getCertificates : function(){
        console.log(`Name: ${this.name} Age: ${this.age} Mobile: ${this.mobile} Department: ${this.dept} HOD: ${this.HOD} Certificates: ${this.certificates} `);
        this.degrees.getDegrees();
    }
};

professor.getCertificates();

professor.totalYearsOfExperience = 14;
//professor.getCertificates();
console.log(professor);