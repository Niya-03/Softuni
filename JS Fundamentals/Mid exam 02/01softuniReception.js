function softuniReception(input){
    let employeeEfficiency1 = Number(input[0]);
    let employeeEfficiency2 = Number(input[1]);
    let employeeEfficiency3 = Number(input[2]);

    let studentsCount = Number(input[3]);

    let fullEfficiency = employeeEfficiency1 + employeeEfficiency2 + employeeEfficiency3;

    let answeredQuestions = 0;
    let hours = 0;

    while(answeredQuestions < studentsCount){
        hours++

        if(hours % 4 === 0){
            continue;
        }

        answeredQuestions+=fullEfficiency;
    }

    console.log(`Time needed: ${hours}h.`);
}

softuniReception(['3','2','5','40'])