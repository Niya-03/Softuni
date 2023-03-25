function needForSpeed(input) {
    let numOfCars = Number(input.shift());
    let carsObj = {};

    for (let i = 0; i < numOfCars; i++) {
        let tokens = input.shift().split("|");
        let name = tokens[0];
        let mileage = Number(tokens[1]);
        let fuel = Number(tokens[2]);

        carsObj[name] = {
            mileage,
            fuel,
        }
    }

    while (input[0] !== "Stop") {
        let tokens = input.shift().split(" : ");
        let command = tokens[0];
        let name = tokens[1];
        let car = carsObj[name];
        let data1 = Number(tokens[2]);
        let data2 = Number(tokens[3]);

        if (command == "Drive") {
            if (car.fuel >= data2) {
                car.mileage += data1;
                car.fuel -= data2;
                console.log(`${name} driven for ${data1} kilometers. ${data2} liters of fuel consumed.`);
            } else {
                console.log(`Not enough fuel to make that ride`);
            }

            if (car.mileage >= 100000) {
                console.log(`Time to sell the ${name}!`);
                delete carsObj[name];
            }

        } else if (command == "Refuel") {
            if (car.fuel + data1 >= 75) {
                console.log(`${name} refueled with ${75 - car.fuel} liters`);
                car.fuel = 75;
            } else {
                car.fuel += data1;
                console.log(`${name} refueled with ${data1} liters`);
            }

        } else if (command == "Revert") {
            if (car.mileage - data1 < 10000) {
                car.mileage = 10000;
            } else {
                car.mileage -= data1;
                console.log(`${name} mileage decreased by ${data1} kilometers`);
            }
        }
    }

    for (let car in carsObj) {
        console.log(`${car} -> Mileage: ${carsObj[car].mileage} kms, Fuel in the tank: ${carsObj[car].fuel} lt.`);
    }
}

needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]
);