function plantDiscovery(input) {
    let num = Number(input.shift());
    let plantsObj = {};

    for (let i = 0; i < num; i++) {
        let plantData = input.shift().split("<->");
        let name = plantData[0];
        let rarity = Number(plantData[1]);

        if (plantsObj.hasOwnProperty(name)) {
            plantsObj[name].rarity = rarity;
        } else {
            plantsObj[name] = {
                "rarity": rarity,
                "rating": [0]
            }
        }
    }

    while (input[0] != "Exhibition") {
        let tokens = input.shift().split(": ");
        let command = tokens[0];
        let tokens2 = tokens[1].split(" - ");
        let plantName = tokens2[0];
        let plantInfo = Number(tokens2[1]);
        let plant = plantsObj[plantName];

        if (command == "Rate") {
            if (plantsObj.hasOwnProperty(plantName)) {
                plant.rating.push(plantInfo);
            } else {
                console.log("error");
            }
        } else if (command == "Update") {
            if (plantsObj.hasOwnProperty(plantName)) {
                plant.rarity = plantInfo;
            } else {
                console.log("error");
            }
        } else if (command == "Reset") {
            if (plantsObj.hasOwnProperty(plantName)) {
                plant.rating = [0];
            } else {
                console.log("error");
            }
        }
    }

    console.log("Plants for the exhibition:");

    for (let item in plantsObj) {
        let average = 0;
        let filtered = plantsObj[item].rating.filter(a => a > 0);

        let sum = 0;
        if (filtered.length !== 0) {
            for (let num of filtered) {
                sum += num;
            }

            average = (sum / filtered.length);
        }

        console.log(`- ${item}; Rarity: ${plantsObj[item].rarity}; Rating: ${average.toFixed(2)}`);
    }
}

plantDiscovery((["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])


)