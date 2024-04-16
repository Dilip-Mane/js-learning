let arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];

const arrayAdd10 = arrayNumbers.map((element)=>{
    return element+10
});

console.log(`Array elements after adding 10 : `);
console.log(arrayAdd10);

const arrayCubeElements = arrayNumbers.map((element)=>{
    return element*element*element;
});

console.log(`Array elements after cube : `);
console.log(arrayCubeElements);

const arrayElementsAddIndex = arrayNumbers.map((element,index)=>{
    return element+index;
});

console.log(`Array elements after adding its index : `);
console.log(arrayElementsAddIndex);