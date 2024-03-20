

var voteEligibility = function (input) {
    
    if(input == null || input<=0 || input>130){
        console.log(`Invalid Input ${input}`);
    }else if (input>18) {
        console.log(`Person having age ${input} is eligible for voting`);
    }else{
        console.log(`Person having age ${input} is NOT eligible for voting`);
    }
    console.log("=======================================");
}

voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(null);