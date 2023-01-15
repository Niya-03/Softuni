function grades (input){
    let badGradesNumber = Number(input[0]);
    let badGradesCount = 0;
    let problemsCounter = 0;
    let gradesSum = 0;
    let index = 1;
    let command = input[index];

    while(command !== "Enough"){
        index++;
        currentGrade = Number(input[index]);

        gradesSum+= currentGrade;
        problemsCounter++;

        if(currentGrade <= 4){
            badGradesCount++;
        }

        if(badGradesCount === badGradesNumber){
            console.log(`You need a break, ${badGradesNumber} poor grades.`);
            break;
        }
        
        index++;
        command = input[index];
    }

    let lastProblem = input[index - 2];

    if(badGradesCount < badGradesNumber){
        console.log(`Average score: ${(gradesSum / problemsCounter).toFixed(2)}`);
        console.log(`Number of problems: ${problemsCounter}`);
        console.log(`Last problem: ${lastProblem}`);
    }
}