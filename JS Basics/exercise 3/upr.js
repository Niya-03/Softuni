/*function flowers(input){
    let flowerType = input[0];
    let flowersCount = Number(input[1]);
    let budget = Number(input[2]);
    let totalSum = 0;

    switch(flowerType){
        case "Roses": totalSum = flowersCount * 5;
            if(flowersCount > 80){
                totalSum= totalSum * 0.90;
            }break;

        case "Dahlias": totalSum = flowersCount * 3.80;
            if(flowersCount > 90){
                totalSum = totalSum * 0.85;
            } break;

        case "Tulips": totalSum = flowersCount * 2.80;
            if(flowersCount > 80){
                totalSum = totalSum * 0.85;
            } break;

        case "Narcissus": totalSum = flowersCount * 3;
            if(flowersCount < 120){
                totalSum = totalSum * 1.15;
            } break;

        case "Gladiolus": totalSum = flowersCount * 2.50;
            if(flowersCount < 80){
                totalSum = totalSum * 1.2;
            } break;
        default:
    }

    if(budget >= totalSum){
        console.log(`Hey, you have a great garden with ${flowersCount} ${flowerType} and ${(budget - totalSum).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money, you need ${(totalSum - budget).toFixed(2)} leva more.`)
    }
}

function boat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermen = Number(input[2]);
    let boatRentPrice = 0;

    switch (season) {
        case "Spring": boatRentPrice = 3000; break;
        case "Summer":
        case "Autumn": boatRentPrice = 4200; break;
        case "Winter": boatRentPrice = 2600; break;
    }

    if (fishermen <= 6) {
        boatRentPrice = boatRentPrice * 0.90;
    } else if (fishermen >= 7 && fishermen <= 11) {
        boatRentPrice = boatRentPrice * 0.85;
    } else if (fishermen >= 12) {
        boatRentPrice = boatRentPrice * 0.75;
    }

    if (fishermen % 2 === 0 && season !== "Autumn") {
        boatRentPrice = boatRentPrice * 0.95;
    }

    if (budget >= boatRentPrice) {
        console.log(`Yes! You have ${(budget - boatRentPrice).toFixed(2)} leva left.`);
    } else if (budget < boatRentPrice) {
        console.log(`Not enough money! You need ${(boatRentPrice - budget).toFixed(2)} leva.`);
    }
}

function holiday(input) {
    let budget = Number(input[0]);
    let season = input[1];

    if (budget <= 100) {
        console.log("Somewhere in Bulgaria");
        if (season === "summer") {
            console.log(`Camp - ${(budget * 0.3).toFixed(2)}`);
        } else if (season === "winter") {
            console.log(`Hotel - ${(budget * 0.7).toFixed(2)}`);
        }
    } else if (budget <= 1000) {
        console.log("Somewhere in Balkans");
        if (season === "summer") {
            console.log(`Camp - ${(budget * 0.4).toFixed(2)}`);
        } else if (season === "winter") {
            console.log(`Hotel - ${(budget * 0.8).toFixed(2)}`);
        }
    } else if (budget > 1000) {
        console.log("Somewhere in Europe");
        console.log(`Hotel - ${(budget * 0.9).toFixed(2)}`);
    }
}

function demo(input) {
    let N1 = Number(input[0]);
    let N2 = Number(input[1]);
    let operator = input[2];

    switch (operator) {
        case "+":
            if ((N1 + N2) % 2 === 0) {
                console.log(`${N1} + ${N2} = ${N1 + N2} - even`);
            } else {
                console.log(`${N1} + ${N2} = ${N1 + N2} - odd`);
            } break;
        case "-":
            if ((N1 - N2) % 2 === 0) {
                console.log(`${N1} - ${N2} = ${N1 - N2} - even`);
            } else {
                console.log(`${N1} - ${N2} = ${N1 - N2} - odd`);
            } break;
        case "*":
            if ((N1 * N2) % 2 === 0) {
                console.log(`${N1} * ${N2} = ${N1 * N2} - even`);
            } else {
                console.log(`${N1} * ${N2} = ${N1 * N2} - odd`);
            } break;
        case "/":
            if (N2 === 0) {
                console.log(`Cannot divide ${N1} by zero`);
            } else {
                console.log(`${N1} / ${N2} = ${(N1 / N2).toFixed(2)}`);
            } break;
        case "%":
            if (N2 === 0) {
                console.log(`Cannot divide ${N1} by zero`);
            } else {
                console.log(`${N1} % ${N2} = ${N1 % N2}`);
            } break;
    }
}

function hotel(input) {
    let month = input[0];
    let nights = Number(input[1]);
    let studioPrice = 0;
    let apartmentPrice = 0;

    if (month === "May" || month === "October") {
        studioPrice = 50;
        apartmentPrice = 65;

        if (nights > 14) {
            studioPrice = studioPrice * 0.70;
        } else if (nights > 7) {
            studioPrice = studioPrice * 0.95;
        }

    } else if (month === "June" || month === "September") {
        studioPrice = 75.20;
        apartmentPrice = 68.70;

        if (nights > 14) {
            studioPrice = studioPrice * 0.80;
        }

    } else if (month === "July" || month === "August") {
        studioPrice = 76;
        apartmentPrice = 77;
    }

    if (nights > 14) {
        apartmentPrice = apartmentPrice * 0.90;
    }

    console.log(`Apartment: ${(apartmentPrice * nights).toFixed(2)} lv.`);
    console.log(`Studio: ${(studioPrice * nights).toFixed(2)} lv.`);
}

function ski(input) {
    let days = Number(input[0]);
    let roomType = input[1];
    let feedback = input[2];

    let nights = days - 1;
    let sum = 0;

    switch (roomType) {
        case "room for one person": sum = nights * 18; break;
        case "apartment": sum = nights * 25;
            if (nights < 10) {
                sum = sum * 0.7;
            } else if (nights <= 15) {
                sum = sum * 0.65;
            } else if (nights > 15) {
                sum = sum * 0.50;
            } break;
        case "president apartment": sum = nights * 35;
            if (nights < 10) {
                sum = sum * 0.9;
            } else if (nights <= 15) {
                sum = sum * 0.85;
            } else if (nights > 15) {
                sum = sum * 0.80;
            } break;
    }

    if (feedback === "positive") {
        sum = sum * 1.25;
    } else if (feedback === "negative") {
        sum = sum * 0.90;
    }

    console.log(sum.toFixed(2));
}



function cinema(input) {
    let type = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);
    let sum = 0;

    switch (type) {
        case "Premiere": sum = rows * columns * 12; break;
        case "Normal": sum = rows * columns * 7.50; break;
        case "Discount": sum = rows * columns * 5; break;
    }

    console.log(`${sum.toFixed(2)} leva`);
}

function outfit(input) {
    let degrees = Number(input[0]);
    let time = input[1];
    let outfit = 0;
    let shoes = 0;

    switch (time) {
        case "Morning":
            if (degrees >= 10 && degrees <= 18) {
                outfit = "Sweatshirt";
                shoes = "Sneakers";
            } else if (degrees > 18 && degrees <= 24) {
                outfit = "Shirt";
                shoes = "Moccasins";
            } else if (degrees >= 25) {
                outfit = "T-Shirt";
                shoes = "Sandals";
            } break;
        case "Afternoon":
            if (degrees >= 10 && degrees <= 18) {
                outfit = "Shirt";
                shoes = "Moccasins";
            } else if (degrees > 18 && degrees <= 24) {
                outfit = "T-Shirt";
                shoes = "Sandals";
            } else if (degrees >= 25) {
                outfit = "Swim Suit";
                shoes = "Barefoot";
            } break;
        case "Evening":
            if (degrees >= 10 && degrees <= 18) {
                outfit = "Shirt";
                shoes = "Moccasins";
            } else if (degrees > 18 && degrees <= 24) {
                outfit = "Shirt";
                shoes = "Moccasins";
            } else if (degrees >= 25) {
                outfit = "Shirt";
                shoes = "Moccasins";
            } break;
    }

    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}

outfit(["22",
    "Afternoon"])*/

function exam(input) {
    let examBeginningHour = Number(input[0]);
    let examBeginningMinute = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinute = Number(input[3]);

    let examTime = examBeginningHour * 60 + examBeginningMinute;
    let arrivalTime = arrivalHour * 60 + arrivalMinute;

    if (arrivalTime > examTime) {
        console.log("Late");

        if (arrivalTime - examTime < 60) {
            console.log(`${arrivalTime - examTime} minutes after the start`);
        } else if (arrivalTime - examTime >= 60) {
            console.log(`${Math.floor((arrivalTime - examTime) / 60)}:${(arrivalTime - examTime) % 60} hours after the start`);
        }
    }
    else if (arrivalTime === examTime || arrivalTime >= examTime - 30) {
        console.log("On time");
        if (examTime - arrivalTime < 60 && examTime - arrivalTime != 0) {
            console.log(`${examTime - arrivalTime} minutes before the start`);
        }
    }
    else if (arrivalTime < examTime - 30) {
        console.log("Early");
        if (examTime - arrivalTime < 60) {
            console.log(`${examTime - arrivalTime} minutes before the start`);
        } 
        else if(examTime - arrivalTime === 60){
            console.log("1 00 hours before the start");
        }
        else if (examTime - arrivalTime > 60) {
            console.log(`${Math.floor((examTime - arrivalTime) / 60)}:${(examTime - arrivalTime) % 60} hours before the start`);
        }
    }
}

exam(["16",
    "05",
    "15",
    "00"])
















