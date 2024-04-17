class Vehicle {
  constructor(model, color, price, company, mialage) {
    this.color = color;
    this.company = company;
    this.mialage = mialage;
    this.model = model;
    this.price = price;
  }

  details(){
    console.log(`Vehicle => Company : ${this.company} Model : ${this.model} Price : ${this.price} Mialage : ${this.mialage} Color : ${this.color}`);
  }
}

const hondaUnicorn = new Vehicle("unicorn","Black",120000,"Honda",56.5);
//hondaUnicorn.details();
const hondaShine = new Vehicle("Shine","Red",90000,"Honda",65);

const heroDuet = new Vehicle("Duet","White",85000,"Hero",55);

const heroHunk = new Vehicle("Hunk","Black",72000,"Hero",52);

const yamaha = new Vehicle("FZ","Grey",140000,"Yamaha",55);

const vehicleArray = [hondaUnicorn,hondaShine,heroDuet,heroHunk,yamaha];

for (const element of vehicleArray) {
    element.details();
}

class Collage {
    constructor(name, address, type, owner) {
      this.name = name;
      this.address = address;
      this.type = type;
      this.owner = owner;
    }
  
    details(){
      console.log(`Collage => name : ${this.name} address : ${this.address} type : ${this.type} owner : ${this.owner}`);
    }
  }
  
  const ESM = new Collage("ESM","Mangalwedha","Public","SPM");

  const Damaji = new Collage("Damaji","Damaji Nagar","Public","Hawnale");
  
  const mohitepatil = new Collage("Mohite Patil Science college","Sangola Naka","Private","Mohite Patil Group");
  
  const sms = new Collage("Sangola college Sangola","Sangola","Private","Baburao Gaikwad");
  
  
  const collegeArray = [ESM,Damaji,mohitepatil,sms];
  
  for (const element of collegeArray) {
      element.details();
  }