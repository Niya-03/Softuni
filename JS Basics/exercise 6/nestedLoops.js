/*function trainTheTrainers(input) {
    let n = Number(input[0]);
    let index = 1;
    let command = input[index];
    let sumGrades = 0;
    let counter = 0;

    while (command !== "Finish") {
        counter++;
        let name = command;
        let tempSumGrade = 0;

        for (let i = 0; i < n; i++) {
            index++;
            let grade = Number(input[index]);
            tempSumGrade += grade;
        }

        let tempAvgGrade = tempSumGrade / n;
        sumGrades += tempAvgGrade;

        console.log(`${name} - ${tempAvgGrade.toFixed(2)}.`);

        index++;
        command = input[index];

    }

    let avgGrade = sumGrades / counter;
    console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`);
}

function specialNumbers(input) {
    let n = Number(input[0]);
    let res = "";

    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            for (let k = 1; k <= 9; k++) {
                for (let l = 1; l <= 9; l++) {
                    if (n % i === 0 && n % j === 0 && n % k === 0 && n % l === 0) {
                        res += `${i}${j}${k}${l} `;
                    }
                }
            }
        }
    }

    console.log(res);
}

function cinema(input) {
    let index = 0;
    let command = input[index];
    let studentCounter = 0;
    let standardCounter = 0;
    let kidCounter = 0;
    let totalTicketsCounter = 0;

    while (command !== "Finish") {
        let movieName = command;
        index++;
        let freeSpaces = Number(input[index]);
        index++;

        let ticketType = input[index];
        let ticketCounter = 0;

        while (ticketType !== "End") {
            ticketCounter++;
            switch (ticketType) {
                case "student": studentCounter++; break;
                case "standard": standardCounter++; break;
                case "kid": kidCounter++; break;
            }

            if (ticketCounter >= freeSpaces) {
                break;
            }

            index++;
            ticketType = input[index];
        }

        totalTicketsCounter += ticketCounter;
        let resultSingleFilm = ticketCounter / freeSpaces * 100;

        console.log(`${movieName} - ${resultSingleFilm.toFixed(2)}% full.`);
        index++;
        command = input[index];
    }

    console.log(`Total tickets: ${totalTicketsCounter}`);
    console.log(`${(studentCounter / totalTicketsCounter * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standardCounter / totalTicketsCounter * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidCounter / totalTicketsCounter * 100).toFixed(2)}% kids tickets.`);
}


function pyramid (input){
    let n = Number(input[0]);
    let current = 1;
    let isBigger = false;
    let printCurrentLine = "";

    for(let rows = 1; rows <= n; rows++){
        for(let columns = 1; columns <= rows; columns++){
            if(current > n){
                isBigger = true;
                break;
            }

            printCurrentLine+= current + " ";
            current++;
        }

        console.log(printCurrentLine);
        printCurrentLine = "";
        if(isBigger){
            break;
        }

    }
}

function numberSum(input) {
    let firstNum = Number(input[0]);
    let secondsNum = Number(input[1]);
    let printLine = "";

    for (let i = firstNum; i <= secondsNum; i++) {
        let currentNum = "" + i;
        let oddSum = 0;
        let evenSum = 0;

        for (let j = 0; j < currentNum.length; j++) {
            let currentDigit = Number(currentNum.charAt(j));

            if (j % 2 === 0) {
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }
        }

        if (oddSum === evenSum) {
            printLine += `${i} `;
        }

    }

    console.log(printLine);
}

function sum (input){
    let index = 0;
    let command = input[index];

    let primeSum = 0;
    let nonPrimeSum = 0;

    while(command !== "stop"){
        let currentNum = Number(command);
        index++;

        if(currentNum < 0){
            console.log("Number is negative.");
        }

        if(currentNum % 2 === 0 || currentNum % 3 === 0 || currentNum % 5 === 0 || currentNum % 7 === 0 || currentNum % 11 === 0 || currentNum % 13 === 0){
            nonPrimeSum+= currentNum;
        } else{
            primeSum+= currentNum;
        }

        command=input[index];
    }

    console.log(primeSum);
    console.log(nonPrimeSum);
}

sum(["3",
"9",
"0",
"7",
"19",
"4",
"stop"])*/

function sumPrimeNonPrime(input) {
 
    let index = 0;
    let command = input[index];
    let primeSum = 0;
    let nonPrimeSum = 0;
 
    while (command != "stop") {
        let number = Number(command);
        if (number < 0) {
            console.log("Number is negative.");
            index++;
            command = input[index];
            continue;
        }
        let isPrime = true;
 
        if (number === 1) {
            isPrime = false;
        } else if (number === 2) {
            isPrime = true;
        } else {
            for (let i = number; i >= 2; i--) {
                if (number % i === 0 && i !== number) {
                    isPrime = false;
                    break;
                }
            }
        }
 
        if (isPrime) {
            primeSum += number;
        } else {
            nonPrimeSum += number;
        }
 
        index++;
        command = input[index];
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
 
}






