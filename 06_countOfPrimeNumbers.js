function countOfPrimeNumbers(){
    const array= [3,9,7,6,19,29,53];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        let isPrime = true;
        for (let devisor = 2; devisor < element; devisor++) {
            if(element%devisor==0){
                isPrime=false;
                break;
            }
            
        }
        if(isPrime){
            console.log(`${element} is prime`);
        }
    }
}

countOfPrimeNumbers();

console.log(`==================================================`);
console.log();

function spaceCount(input){
    var count = 0;
    for (let index = 0; index < input.length; index++) {
        //console.log(input.charAt(index));
        if(input.charAt(index)==" "){
            count++;
        }
        
    }

    return count;

}

var count = spaceCount("Revision is the mother of success");
console.log(`total white space count = ${count}`);

var count = spaceCount("Javascript is language of internet world");
console.log(`total white space count = ${count}`);