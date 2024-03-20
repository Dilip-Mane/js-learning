
function greaterNumber(args1,args2) {
    var temp;
    if (args1>args2) {
        temp = args1;
    } else {
        temp = args2;
    }
    console.log(`greater number between ${args1} and ${args2} is ${temp}`);
    console.log("==============================================");
    
}

greaterNumber(10,-10);
greaterNumber(800,899);

function isEvenOrOddNum(arg) {

    if(arg%2==0){
        return true;
    }else{
        return false;
    }
    
}

var result = isEvenOrOddNum(29);
if(result){
    console.log(`Given number is Even`);
}else{
    console.log(`Given number is Odd`);
}

console.log("==============================================");

var result = isEvenOrOddNum(44);
if(result){
    console.log(`Given number is Even`);
}else{
    console.log(`Given number is Odd`);
}

console.log("==============================================");

var result = isEvenOrOddNum(0);
if(result){
    console.log(`Given number is Even`);
}else{
    console.log(`Given number is Odd`);
}

console.log("==============================================");

var result = isEvenOrOddNum(101);
if(result){
    console.log(`Given number is Even`);
}else{
    console.log(`Given number is Odd`);
}

console.log("==============================================");


function wordLength(arg) {

    var len = arg.length;
    if(len%2==0){
        return "Even";
    }else{
        return "Odd";
    }
    
}

var output = wordLength("Javascript");
console.log(`length of given word is ${output}`);
console.log("==============================================");

var output = wordLength("Developer");
console.log(`length of given word is ${output}`);
console.log("==============================================");

var output = wordLength("Google");
console.log(`length of given word is ${output}`);
console.log("==============================================");