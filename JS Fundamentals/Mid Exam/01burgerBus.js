function burgerBus(input) {
    let numberOfCities = Number(input.shift());
    let cityCounter = 1;
    let earnings = 0;
    let expenses = 0;

    while (cityCounter <= numberOfCities) {

        let currentCityName = input.shift();
        let currentIncome = Number(input.shift());
        let currentExpenses = Number(input.shift());

        if (cityCounter % 3 === 0 && cityCounter % 5 === 0) {
            currentIncome = currentIncome * 0.90;
        } else if (cityCounter % 3 === 0) {
            currentExpenses = currentExpenses * 1.5;
        } else if (cityCounter % 5 === 0) {
            currentIncome = currentIncome * 0.90;
        }

        earnings += currentIncome;
        expenses += currentExpenses;

        let currentProfit = currentIncome - currentExpenses;

        console.log(`In ${currentCityName} Burger Bus earned ${currentProfit.toFixed(2)} leva.`);

        cityCounter++;
    }

    let totalProfit = earnings - expenses;

    console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`);
}

burgerBus(["3",
    "Sofia",
    "895.67",
    "213.50",
    "Plovdiv",
    "2563.20",
    "890.26",
    "Burgas",
    "2360.55",
    "600.00"])