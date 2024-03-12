//Function with no arguments and no return value

function show(){

    console.log("Inside show function");

}

show();

//return value

function add(n1, n2, n3){

    console.log("Arguments: ", n1, n2, n3);

    var result = n1+n2+n3;

    console.log("Addition is: ", result);

}

add(3, 6, 7);

add(99.89, 67, 456789);

add(6, 7);

add(16, 9, 90, 44);

add("Hi", "Good", "Morning")