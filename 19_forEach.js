let array = [2, 4, 1, 7, 9, 8];

array.forEach((element, index, array) => {
  console.log(element,index,array);
});

console.log(`======= for each with mandatory fields ========`);

array.forEach((element) =>{
    console.log(element);
}
);

console.log(`======= even numbers ========`);

array.forEach((element) =>{
    if(element%2 == 0){
        console.log(element);
    }
    
}
);