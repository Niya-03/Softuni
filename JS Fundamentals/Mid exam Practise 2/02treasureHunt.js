function treasureHunt(commandsArr) {
    let initialLoot = commandsArr.shift().split("|");
    let averageTreasureGain = 0;

    let index = 0;
    let command = commandsArr[index];

    while (command !== "Yohoho!") {
        let current = (commandsArr[index]).split(" ");
        let currentCommand = current[0];

        switch (currentCommand) {
            case "Loot":
                for (let i = 1; i < current.length; i++) {
                    let item = current[i];

                    if (!initialLoot.includes(item)) {
                        initialLoot.unshift(item);
                    }
                }
                break;

            case "Drop":
                let indexToDrop = Number(current[1]);

                if (indexToDrop > 0 && indexToDrop < initialLoot.length) {
                    let removedItem = initialLoot.splice(indexToDrop, 1);
                    let removedItemValue = removedItem.pop();
                    initialLoot.push(removedItemValue);
                }
                break;

            case "Steal":
                let stealCount = Number(current[1]);
                let stolenItemsArr = [];

                if (stealCount > initialLoot.length) {
                   stolenItemsArr = initialLoot.splice(0, initialLoot.length);
                } else {
                    stolenItemsArr = initialLoot.splice(initialLoot.length - stealCount, stealCount);

                }

                console.log(stolenItemsArr.join(", "));
                break;
        }

        index++;
        command = commandsArr[index];
    }

    let sum = 0;
    initialLoot.map(x => sum += x.length);
    averageTreasureGain = sum / initialLoot.length;

    if (initialLoot.length === 0) {
        console.log("Failed treasure hunt.");
    } else {
        console.log(`Average treasure gain: ${averageTreasureGain.toFixed(2)} pirate credits.`);
    }
}

treasureHunt((["Gold|Silver|Bronze|Medallion|Cup",

"Loot Wood Gold Coins",

"Loot Silver Pistol",

"Drop 3",

"Steal 14",

"Yohoho!"]))