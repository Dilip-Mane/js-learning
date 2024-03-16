
function squareOfStringLength(myString){
    var len = myString.length;
    console.log(`Square of lenth of "${myString}" is ${len*len}`);
    
}

squareOfStringLength("JavaScript");
squareOfStringLength("Google Chrome");
squareOfStringLength("Developer Smart");

function myFunction() {
    var input = "I am Angular Developer";
    
    console.log(`Length of input devided by number of words is ${input.length/input.split(" ").length}`);

    console.log(`Length of input multiplied by number of words is ${input.length*input.split(" ").length}`);
}

myFunction();