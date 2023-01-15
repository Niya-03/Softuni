/*function vacation(input) {
    let needMoney = Number(input[0]);
    let availableMoney = Number(input[1]);

    let index = 2;
    let command = input[index];
    let totalDays = 0;
    let spendDays = 0;

    while (availableMoney < needMoney) {
        totalDays++;
        index++;

        if (command === "spend") {
            spendDays++;

            if (spendDays === 5) {
                console.log("You can't save the money.");
                console.log(totalDays);
                break;
            }

            let moneyToSpend = Number(input[index]);
            availableMoney -= moneyToSpend;

            if (availableMoney < 0) {
                availableMoney = 0;
            }
        } else if (command === "save") {
            spendDays = 0;
            let moneyToSave = Number(input[index]);
            availableMoney += moneyToSave;
        }

        index++;
        command = input[index];
    }

    if (availableMoney >= needMoney) {
        console.log(`You saved the money for ${totalDays} days.`)
    }
}

function book (input){
    let favBook = input[0];
    let index = 1;
    let bookIsFound = false;

    let nextBookName = input[index];

    while(nextBookName !== "No More Books"){
        if(nextBookName === favBook){
            bookIsFound = true;
            break;
        }

        index++;
        nextBookName = input[index];
    }

    if (bookIsFound === false){
        console.log("The book you search is not here!");
        console.log(`You checked ${index - 1} books.`);
    } else {
        console.log(`You checked ${index - 1} books and found it.`);
    }
}

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

function steps(input) {
    let index = 0;
    command = input[index];
    let stepsSum = 0;
    let target = 10000;

    while (command !== "Going home") {
        let steps = Number(command);
        stepsSum += steps;

        if (stepsSum >= target) {
            console.log("Goal reached! Good job!");
            console.log(`${stepsSum - target} steps over the goal!`);
            break;
        }

        index++;
        command = input[index];
    }

    let stepsToHome = Number(input[index + 1]);
    stepsSum = stepsSum + stepsToHome;

    if (stepsSum >= target) {
        console.log("Goal reached! Good job!");
        console.log(`${stepsSum - target} steps over the goal!`);
    } else if (stepsSum < target) {
        console.log(`${target - stepsSum} more steps to reach goal.`);
    }
}

function coins (input){
    let change = Number(input[0]);
    let coinsCount = 0;
    let inCoins = Math.floor(change * 100);

    while(inCoins > 0){

        if(inCoins >= 200){
            coinsCount++;
            inCoins -= 200;
        } else if(inCoins >= 100){
            coinsCount++;
            inCoins -= 100;
        } else if(inCoins >= 50){
            coinsCount++;
            inCoins -= 50;
        } else if(inCoins >= 20){
            coinsCount++;
            inCoins -= 20;
        } else if(inCoins >= 10){
            coinsCount++
            inCoins -= 10;
        } else if(inCoins >= 5){
            coinsCount++;
            inCoins -= 5;
        } else if(inCoins >= 2){
            coinsCount++;
            inCoins -= 2;
        } else if(inCoins >= 1){
            coinsCount++;
            inCoins -=1;
        }
    }

    console.log(coinsCount);
}

coins(["2.73"])

function moving(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);

    let houseVolume = width * length * height;

    let boxVolumeSum = 0;

    let index = 3;
    let command = input[index];

    while (command !== "Done") {
        let boxVolume = Number(command);
        boxVolumeSum += boxVolume;

        if (boxVolumeSum > houseVolume) {
            console.log(`No more free space! You need ${boxVolumeSum - houseVolume} Cubic meters more.`);
            break;
        }

        index++;
        command = input[index];
    }

    if (boxVolumeSum > houseVolume && command === "Done") {
        console.log(`No more free space! You need ${boxVolumeSum - houseVolume} Cubic meters more.`);
    } else if (houseVolume > boxVolumeSum) {
        console.log(`${houseVolume - boxVolumeSum} Cubic meters left.`);
    }
}

function cake(input) {
    let cakeWidth = Number(input[0]);
    let cakeLength = Number(input[1]);

    let cakeVolume = cakeWidth * cakeLength;
    let startCakeVolume = cakeVolume;
    let piecesSum = 0;


    let index = 2;
    let command = input[index];

    while (command !== "STOP") {
        let takenPieces = Number(command);
        piecesSum += takenPieces;

        if (cakeVolume >= takenPieces) {
            cakeVolume -= takenPieces;
        }
        else if (cakeVolume < takenPieces) {
            console.log(`No more cake left! You need ${takenPieces - cakeVolume} pieces more.`);
            break;
        }

        index++;
        command = input[index];
    }

    if (startCakeVolume < piecesSum && command === "STOP") {
        console.log(`No more cake left! You need ${piecesSum - startCakeVolume} pieces more.`);
    } else if (startCakeVolume >= piecesSum) {
        console.log(`${cakeVolume} pieces are left.`)
    }
}*/













