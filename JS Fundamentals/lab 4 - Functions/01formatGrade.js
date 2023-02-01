function formatGrade(grade){
    let description = 0;

    if(grade<3.00){
        description = "Fail";
    } else if(grade < 3.50){
        description = "Poor";
    } else if(grade < 4.50){
        description = "Good";
    } else if(grade < 5.50){
        description = "Very good"; 
    } else if(grade >= 5.50){
        description = "Excellent"
    }

    let gradeValue = grade < 3 ? "2" : grade.toFixed(2);

    console.log(`${description} (${gradeValue})`);
}

formatGrade(2.33)