/*function multiplication (input){
    let number = Number(input[0]);

    for(let i = 1; i<=10; i++){
        console.log(`${i} * ${number} = ${i*number}`);
    }
}

multiplication(["7"])

function birthday(input) {
    let lilisAge = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let toysCounter = 0;
    let savedMoney = 0;
    let stolenMoney = 0;
    let addedMoney = 10;

    for (let i = 1; i <= lilisAge; i++) {

        if (i % 2 === 0) {
            savedMoney+= addedMoney;
            stolenMoney++;
            addedMoney += 10;
        } else {
            toysCounter++;
        }
    }

    let allToysPrice = toysCounter * toyPrice;
    let totalMoney = (allToysPrice + savedMoney) - stolenMoney;

    if (totalMoney >= washingMachinePrice) {
        console.log(`Yes! ${(totalMoney - washingMachinePrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washingMachinePrice - totalMoney).toFixed(2)}`);
    }
}

birthday(["21","1570.98","3"])

/*function salary(input) {
    let openTabs = Number(input[0]);
    let salary = Number(input[1]);
    let globa = 0;
    let inputL = input.length;

    for (let i = 2; i <= inputL; i++) {

        let tabName = input[i];

        switch (tabName) {
            case "Facebook": globa += 150; break;
            case "Instagram": globa += 100; break;
            case "Reddit": globa += 50; break;
            default: salary - 0; break;
        }
    }

    if (globa >= salary) {
        console.log("You have lost your salary.");
    } else {
        console.log((salary - globa).toFixed(0));
    }
}

salary(["3","500","Github.com","Stackoverflow.com","softuni.bg"])

function oscars(input) {
    let actorName = input[0];
    let startPoints = Number(input[1]);
    let judgesCount = Number(input[2]);
    let inputL = input.length;

    for (let i = 3; i < inputL; i++) {
        if (i % 2 !== 0) {
            let points = i + 1;
            let total = input[i].length * Number(input[points]) / 2;
            startPoints += total;
        }

        if (startPoints > 1250.5) {
            break;
        }
    }

    if (startPoints < 1250.5) {
        console.log(`Sorry, ${actorName} you need ${(1250.5 - startPoints).toFixed(1)} more!`);
    } else {
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${(startPoints).toFixed(1)}!`);
    }
}

function tennis(input){
    let tournamentCount = Number(input[0]);
    let startingPoints = Number(input[1]);
    
    let points = startingPoints;
    let wins = 0;

    for(let i = 2; i < input.length; i++){

        let stage = input[i];

        switch(stage){
            case "W": points+= 2000; 
            wins++;
            break;
            case "F": points+= 1200; break;
            case "SF": points+= 720; break;
        }
    }

    let avgPoints = Math.floor((points - startingPoints)/tournamentCount);
    let percentWins = (wins/tournamentCount)* 100;

    console.log(`Final points: ${points}`);
    console.log(`Average points: ${avgPoints}`);
    console.log(`${percentWins.toFixed(2)}%`);
}

tennis(["4",
"750",
"SF",
"W",
"SF",
"W"])

function numbers7 (){
    for(let i = 7; i <= 997; i++){

        if(i % 10 === 7){
            console.log(i);
        }
    }
}

function histogram(input) {
    let numbersCount = Number(input[0]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    let inputL = input.length;

    for (let i = 1; i < inputL; i++) {

        let number = Number(input[i]);

        if (number < 200) {
            p1++;
        } else if (number < 400) {
            p2++;
        } else if (number < 600) {
            p3++;
        } else if (number < 800) {
            p4++;
        } else if (number >= 800) {
            p5++;
        }
    }

    console.log(`${(p1 / numbersCount * 100).toFixed(2)}%`);
    console.log(`${(p2 / numbersCount * 100).toFixed(2)}%`);
    console.log(`${(p3 / numbersCount * 100).toFixed(2)}%`);
    console.log(`${(p4 / numbersCount * 100).toFixed(2)}%`);
    console.log(`${(p5 / numbersCount * 100).toFixed(2)}%`);
}*/

function trekingMania (input){
    let groupsCount = Number(input[0]);

    let peopleCount = 0;
    let inputL = input.length;

    let musala = 0;
    let monblan = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;

    for(let i = 1; i < inputL; i++){
        let counter = Number(input[i]);
        peopleCount = peopleCount + counter;
    }

    for(let i = 1; i < inputL; i++){
        let peopleInGroup = Number(input[i]);

        if(peopleInGroup < 6){
            musala += peopleInGroup;
        } else if (peopleInGroup < 13){
            monblan += peopleInGroup;
        } else if (peopleInGroup < 26){
            kilimanjaro += peopleInGroup;
        } else if (peopleInGroup < 41){
            k2 += peopleInGroup;
        } else if (peopleInGroup >= 41){
            everest += peopleInGroup;
        }
    }

    console.log(`${(musala / peopleCount * 100).toFixed(2)}%`);
    console.log(`${(monblan / peopleCount * 100).toFixed(2)}%`);
    console.log(`${(kilimanjaro / peopleCount * 100).toFixed(2)}%`);
    console.log(`${(k2 / peopleCount * 100).toFixed(2)}%`);
    console.log(`${(everest / peopleCount * 100).toFixed(2)}%`);
}

trekingMania(["10",
"10",
"5",
"1",
"100",
"12", "26",
"17",
"37",
"40",
"78"])















