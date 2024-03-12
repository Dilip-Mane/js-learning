function showMyDetails(){
    console.log("Hi... My name is Dilip Mane");
}

showMyDetails();

function personalDetails( firstName,  lastName,  address){
    console.log("===============================================");
    console.log("My First Name : ",firstName);
    console.log("My Last Name : ",lastName);
    console.log("Address : ",address);
}

personalDetails("Sagar","Mane","Solapur");

function swapValues(arg1, arg2){
    console.log("===============================================");
    console.log("Actual Values : first value ",arg1, " second value ", arg2);
    var temp = arg1;
    arg1 = arg2;
    arg2 = temp;
    console.log("Swapped Values : first value ",arg1, " second value ", arg2);
}
swapValues("Virat", "Anushka");
swapValues(1000,2000);

function bankDetails(bankName, accountNumber,address,pincode){
    console.log("===============================================");
    console.log("Bank Name : ",bankName);
    console.log("My Account Number : ",accountNumber);
    console.log("Bank Address : ",address);
    console.log("Pincode : ",pincode);

}

bankDetails("HDFC Bank",1234567890,"pune",411014);
bankDetails("IDFC Bank",9876543210,"Mumbai",411011);
bankDetails("HDFC Bank",6789012345,"Ahamad Nagar",411033);
