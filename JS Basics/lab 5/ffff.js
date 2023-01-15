/*function read(input){
    let index = 0;
    let text = input[index];
    index++

    while(text !== "Stop"){
        console.log(text);

        text = input[index];
        index++;
    }
}


function password(input){
    let username = input[0];
    let password = input[1];

    let data = input[2];
    let index = 3;

    while(data !== password){
        data = input[index];
        index++;
    }

    console.log(`Welcome ${username}!`);
}

function sum(input){
    let index = 0;
    let n = Number(input[index]);
    index++;

    let sum = 0;

    while(sum < n){
        let num = Number(input[index]);
        index++;

        sum += num;
    }

    console.log(sum);
}

function sequence (input){
    let n = Number(input[0]);

    let k = 1;

    while(k <= n){
        console.log(k);
        k = k * 2 + 1;
    }
}

function account (input){
    let index = 0;
    let account = 0;
    let command = input[index];
    index++;

    while(command !== "NoMoreMoney"){
        let money = Number(command);

        if(money < 0){
            console.log("Invalid operation!");
            break;
        }

        account+= money;
        console.log(`Increase: ${money.toFixed(2)}`);

        command = input[index];
        index++;

    }

    console.log("Total: " + account.toFixed(2));
}

account(["5.51", 
"69.42",
"100",
"NoMoreMoney"])

function graduation(input) {
    let index = 0;
    let name = input[index];
    index++;

    let badGrade = 0;
    let sumGrade = 0;
    let i = 1;
    let isExcluded = false;

    while (i <= 12) {
        let grade = Number(input[index]);
        index++;

        if (grade < 4.00) {
            badGrade++;

            if (badGrade > 1) {
                isExcluded = true;
                break;
            }
            continue;
        }

        sumGrade += grade;
        i++;
    }

    if (!isExcluded) {
        let avgGrade = sumGrade / 12;
        console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`);
    } else {
        console.log(`${name} has been excluded at ${i} grade`)
    }
}*/

function numberMax(input) {
    let index = 0;
    let command = input[index];
    index++;

    let maxNumber = Number.MIN_SAFE_INTEGER;

    while (command !== "Stop") {
        let num = Number(command);

        if (maxNumber < num) {
            maxNumber = num;
        }

        command = input[index];
        index++;
    }

    console.log(maxNumber);
}

function numberMin(input) {
    let index = 0;
    let command = input[index];
    index++;

    let minNumber = Number.MAX_SAFE_INTEGER;

    while (command !== "Stop") {
        let num = Number(command);

        if (minNumber > num) {
            minNumber = num;
        }

        command = input[index];
        index++
    }

    console.log(minNumber);
}

numberMin(["100",
    "99",
    "-99",
    "-100",
    "Stop"])
