function gradeCalculation(marks){
    // invalid inputs
    if (marks==null || marks<=0 || isNaN(+marks) || marks>100) {
        console.log(`Invalid input: ${marks}`);
    } else if (marks>=90) {
        console.log(`Funtastic marks: ${marks}, your grade is A+`);
    } else if (marks>=75 && marks<90) {
        console.log(`Excellent marks: ${marks}, your grade is A`);
    } else if(marks>=50 && marks<75) {
        console.log(`Good marks: ${marks}, your grade is B`);
    } else if(marks>=35 && marks<50) {
        console.log(`Marks: ${marks}, your grade is B. Need to study`);
    }else if(marks>0 && marks<35){
        
    
        console.log(`Marks: ${marks}, your are failed. Better luck next time`);
        
    }
    console.log(`====================================================`);
}
gradeCalculation(null);
gradeCalculation(0);
gradeCalculation(-20);
gradeCalculation("Seventy"); // NaN
gradeCalculation("70"); // 70
gradeCalculation(undefined);
gradeCalculation(98); 
gradeCalculation(80); 
gradeCalculation(29); 
gradeCalculation(75); 