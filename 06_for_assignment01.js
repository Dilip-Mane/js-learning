console.log(`program to print numbers from 5 to 15 incremented by 1`);
for (let index = 5; index <= 15; index++) {
    
    console.log(index);
}

console.log(`program to print numbers from 50 to 40 decremented by 1`);
for (let index = 50; index >= 40; index--) {
    
    console.log(index);
}

console.log(`program to print first 15 odd numbers`);
var counter =1;
for (let index = 1; index <= 15; index++) {
    console.log(counter);
    counter = counter +2;
}

console.log(`program to print first 10 even numbers`);
var counter =0;
for (let index = 1; index <= 10; index++) {
    console.log(counter);
    counter = counter + 2;
}

console.log(`program to print table of 5`);
for (let index = 1; index <= 10; index++) {
    console.log(`${index*5}`);
    
}

console.log(`program to print table of 10`);
for (let index = 1; index <= 10; index++) {
    console.log(`${index*10}`);
    
}

console.log(`program to print numbers from 100`);
for (let index = 100; index >= 10; index=index-10) {
    console.log(`${index}`);
    
}
