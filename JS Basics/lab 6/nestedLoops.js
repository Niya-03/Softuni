/*function clock(){
    for(let h = 0; h < 24; h++){

        for(let m = 0; m < 60; m++){
            console.log(`${h}:${m}`);
        }
    }
}



function table(){
for(let firstMultiplier = 1; firstMultiplier <= 10; firstMultiplier++ ){
    for(let secondMultiplier = 1; secondMultiplier <= 10; secondMultiplier++){
        console.log(`${firstMultiplier} * ${secondMultiplier} = ${firstMultiplier * secondMultiplier}`);
    }
}
}


function sumOfTwoNumbers(input) {
    let startNumber = Number(input[0]);
    let endNumber = Number(input[1]);
    let magicNumber = Number(input[2]);

    let combinations = 0;
    let numberOne = 0;
    let numberTwo = 0;
    let isFound = false;

    for (let a = startNumber; a <= endNumber; a++) {

        for (let b = startNumber; b <= endNumber; b++) {

            combinations++
            numberOne = a;
            numberTwo = b;

            if (a + b === magicNumber) {
                isFound = true;
                break;
            }
        }

        if (isFound) {
            break;
        }
    }

    if (isFound) {
        console.log(`Combination N:${combinations} (${numberOne} + ${numberTwo} = ${magicNumber})`);

    } else {
        console.log(`${combinations} combinations - neither equals ${magicNumber}`);
    }
}

function combinations(input) {
    n = Number(input[0]);
    //let result = 0;
    let combinations = 0;

    for (let x1 = 0; x1 <= n; x1++) {
        for (let x2 = 0; x2 <= n; x2++) {
            for (let x3 = 0; x3 <= n; x3++) {
                if (x1 + x2 + x3 === n) {
                    combinations++;
                }
            }
        }
    }

    console.log(combinations);
}

function traveling(input) {
    let index = 0;
    let command = input[index];

    while (command !== "End") {
        let destination = command;
        index++;

        let tempSum = Number(input[index]);
        index++;

        let budget = 0;
        let currentMoney = Number(input[index]);

        while (tempSum > budget) {
            budget += currentMoney;

            if (budget >= tempSum) {
                console.log(`Going to ${destination}!`);
                break;
            }

            index++;
            currentMoney = Number(input[index]);
        }

        index++;
        command = input[index];
    }
}*/

function building(input){
    let floors = Number(input[0]);
    let rooms = Number(input[1]);

    for(let a = floors; a > 0; a--){
        let buff = "";
        for(let b = 0; b < rooms; b++){
            if(a === floors){
                buff += "L" + a + b + " ";
            } else if(a%2 === 0){
                buff += "O" + a + b + " ";
            } else {
                buff += "A" + a + b + " ";
            }   
        } 
        
        console.log(buff);
        
    }
}

building(["6", "4"])




