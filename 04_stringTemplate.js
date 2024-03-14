console.log(`I am "Software Developer"`);

var city ="pune";
var firstName ="Sagar";
var lastName="Mane";



console.log(`My name is ${firstName} ${lastName} from ${city}`);


console.log("========== replace() ==================");
var greet = "Good Morning";
const afterReplace = greet.replace("Morning", "Afternoon");
console.log(`After replace string is: ${afterReplace}`);

console.log(`========== toUpperCase() ==================`);
var greet = "Good Morning";
var greetInUpperCase = greet.toUpperCase();
console.log(`${greet} in upper case is : ${greetInUpperCase}`);

console.log(`========== trim() ==================`);
var greet = "    Good Morning     " ;
var trimmedGreet = greet.trim();
var greetLen = greet.length;
var trimmedGreetLen = trimmedGreet.length;
//console.log(`${greet} in trimmed is : ${trimmedGreet}`);
console.log(`length before trim is : ${greetLen}`);
console.log(`length after trim is : ${trimmedGreetLen}`);
var removedSpaces = greetLen-trimmedGreetLen;
console.log(`Total spaces removed : ${removedSpaces}`);


console.log(`========== includes() ==================`);
var greet = "My name is Sagar Mane" ;
var includeString = greet.includes("name1");
console.log(`${greet} includes name: ${includeString}`);

console.log(`========== slice() ==================`);
var greet = "My name is Sagar Mane" ;
var slicedString = greet.slice(11,16);
console.log(`slice of ${greet} is : ${slicedString}`);

console.log(`========== search() ==================`);
// returns index of containing string or char
var greet = "Good Morning";
var result = greet.search("Morning");
console.log(`'Morning' is available at ${result}`);

var result = greet.search("r");
console.log(`'r' is available at ${result}`);

console.log(`========== split() ==================`);
var greet = "Good Morning";
var resultValue = greet.split(" ")
console.log(resultValue);
console.log(`Total words are: ${resultValue.length}`);

function lengthOfWords(arg){
    var splitWords = arg.split(" ");
    var len = splitWords.length;
    return len;
}

var output = lengthOfWords("I am happy Buddy");
console.log(`Length of words : ${output}`);

var output = lengthOfWords("I am learning JS the language of Internet");
console.log(`Length of words : ${output}`);