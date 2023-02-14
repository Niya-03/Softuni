function manOWar(input) {
    let index = 0;
    let pirateShipStatus = (input[index]).split(">").map(Number);
    index++;
    let warshipStatus = (input[index]).split(">").map(Number);
    index++;
    let maxHealth = Number(input[index]);
    index++;
    command = input[index];
    let stalemate = true;
    let pirateShipSum = 0;
    let warshipSum = 0;

    while (command !== "Retire") {
        command = command.split(" ");
        let currentCommand = command.shift();

        switch (currentCommand) {
            case "Fire":
                let fireIndex = Number(command[0]);
                let fireDamage = Number(command[1]);

                if (fireIndex < warshipStatus.length && fireIndex >= 0) {
                    warshipStatus.splice(fireIndex, 1, (warshipStatus[fireIndex] - fireDamage));
                }

                if (warshipStatus[fireIndex] <= 0) {
                    console.log("You won! The enemy ship has sunken.");
                    stalemate = false;
                    break;
                }
                break;

            case "Defend":
                let startIndex = Number(command[0]);
                let endIndex = Number(command[1]);
                let defendDamage = Number(command[2]);

                if (startIndex < pirateShipStatus.length && startIndex >= 0 && endIndex < pirateShipStatus.length && endIndex >= 0) {
                    for (i = startIndex; i <= endIndex; i++) {
                        pirateShipStatus[i] -= defendDamage;

                        if (pirateShipStatus[i] <= 0) {
                            console.log("You lost! The pirate ship has sunken.");
                            stalemate = false;
                            break;
                        }
                    }
                }
                break;

            case "Repair":
                let repairIndex = Number(command[0]);
                let health = Number(command[1]);

                if (repairIndex < pirateShipStatus.length && repairIndex >= 0) {
                    pirateShipStatus.splice(repairIndex, 1, (pirateShipStatus[repairIndex] + health));
                }

                if (pirateShipStatus[repairIndex] > maxHealth) {
                    pirateShipStatus[repairIndex] = maxHealth;
                }
                break;

            case "Status":
                let needRepair = pirateShipStatus.filter(x => x < (maxHealth * 0.2));
                let repairCount = needRepair.length;
                console.log(`${repairCount} sections need repair.`);
                break;
        }

        if(!stalemate){
            break;
        }

        index++;
        command = input[index];
    }

    if (stalemate) {
        pirateShipStatus.map(x => pirateShipSum += x);
        console.log(`Pirate ship status: ${pirateShipSum}`);
        warshipStatus.map(x => warshipSum += x);
        console.log(`Warship status: ${warshipSum}`);
    }
}

manOWar((["12>13>11>20>66", "12>22>33>44>55>32>18", "70", "Fire 2 11", "Fire 8 100", "Defend 3 6 11", "Defend 0 3 5", "Repair 1 33", "Status", "Retire"]))