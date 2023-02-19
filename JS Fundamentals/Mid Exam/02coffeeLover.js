function coffeeLover(coffeeArrAndCommands) {
    let coffeeArr = coffeeArrAndCommands.shift().split(" ");
    let numberOfCommands = Number(coffeeArrAndCommands.shift());

    for (let i = 0; i < numberOfCommands; i++) {
        let commandAndIndexes = coffeeArrAndCommands[i].split(" ");
        let command = commandAndIndexes[0];


        switch (command) {
            case "Include":
                let coffeeToInclude = commandAndIndexes[1];
                coffeeArr.push(coffeeToInclude);
                break;

            case "Remove":
                let firstOrLast = commandAndIndexes[1];
                let numberOfCoffees = Number(commandAndIndexes[2]);

                if (numberOfCoffees > coffeeArr.length) {
                    continue;
                } else {
                    if (firstOrLast === "first") {
                        coffeeArr.splice(0, numberOfCoffees);
                    } else if (firstOrLast === "last") {
                        coffeeArr.splice(coffeeArr.length - numberOfCoffees, numberOfCoffees);
                    }
                }
                break;

            case "Prefer":
                let coffeeIndex1 = Number(commandAndIndexes[1]);
                let coffeeIndex2 = Number(commandAndIndexes[2]);

                if (coffeeIndex1 < coffeeArr.length && coffeeIndex2 < coffeeArr.length) {
                    let firstCoffee = coffeeArr[coffeeIndex1];
                    let secondCoffee = coffeeArr[coffeeIndex2];

                    coffeeArr.splice(coffeeIndex1, 1, secondCoffee);
                    coffeeArr.splice(coffeeIndex2, 1, firstCoffee);
                }
                break;

            case "Reverse":
                coffeeArr = coffeeArr.reverse();
                break;
        }
    }

    console.log("Coffees:");
    console.log(coffeeArr.join(" "));
}

coffeeLover(["Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee",
    "5",
    "Include TurkishCoffee",
    "Remove first 2",
    "Remove last 1",
    "Prefer 3 1",
    "Reverse"]
)