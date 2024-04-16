let showMessage = () => console.log("Good morning!!! Today is monday");

showMessage();

let showMultiplication = (arg1, arg2, arg3 = 1) => {
    console.log(`Multiplication of given value is: ${arg1 * arg2 * arg3}`);
}

showMultiplication(5,5,2);
showMultiplication(10,4)

let showAddition = (arg1,arg2,arg3,arg4,arg5) => {
    return arg1+arg2+arg3+arg4+arg5;
}

let numberAdd = showAddition(100,100,200,349,756);
console.log(`Addition of numbers using showAddition() : ${numberAdd}`);

let stringAdd = showAddition("I am ","learning ","ES6 ","features ","in depth");
console.log(`Concatination of strings using showAddition() : ${stringAdd}`);