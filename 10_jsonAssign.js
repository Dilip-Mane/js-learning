let personString = `{

    "name": "Alex Melon",

    "id": "E00252",

    "age": 23,

    "doj": "11-12-2024",

    "isMarried": false,

    "role": ["Dev", "DBA"],

    "address":{

      "street": "Wakad",

      "city": "Pune",

      "country": "India"

    },

    "referred-by": "E0012"

} `
console.log(`Person String: ${personString}`);
var person = JSON.parse(personString);
console.log(`Type of person is: ${typeof person}`);

console.log(`Role : ${person.role[0]}`);
//var nameArr = person.name.split(" ");
console.log(`Surname : ${person.name.split(" ")[1]}`);
console.log(`Year of joining : ${person.doj.split("-")[2]}`);