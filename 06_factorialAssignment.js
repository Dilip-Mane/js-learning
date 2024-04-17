function fact(num){
    if(num==null||num == undefined){
        return "Invalid number";
    }else if(num<=0){
        return 0;
    }

    var fact = 1;

    while(num>0){
        fact = fact * num;
        num = num -1;
    }

    return fact;


}

console.log(fact(5));
console.log(fact(null));
console.log(fact(undefined));
console.log(fact(9));
console.log(fact(3));
console.log(fact(-2));