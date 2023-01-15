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