function muOnline(roomsArr) {
    let rooms = roomsArr.split("|");
    let health = 100;
    let bitcoins = 0;

    for (let i = 0; i < rooms.length; i++) {
        let currentRoom = rooms[i].split(" ");
        let command = currentRoom[0];
        let value = Number(currentRoom[1]);

        switch (command) {
            case "potion":
                if (health + value > 100) {
                    console.log(`You healed for ${100 - health} hp.`);
                    health = 100;
                    console.log(`Current health: ${health} hp.`);
                } else {
                    health += value;
                    console.log(`You healed for ${value} hp.`);
                    console.log(`Current health: ${health} hp.`);
                }
                break;

            case "chest":
                bitcoins += value;
                console.log(`You found ${value} bitcoins.`);
                break;

            default:
                health -= value;

                if (health > 0) {
                    console.log(`You slayed ${command}.`);
                } else {
                    console.log(`You died! Killed by ${command}.`);
                    console.log(`Best room: ${i + 1}`);
                }
                break;
        }

        if (health <= 0) {
            break;
        }

    }

    if (health > 0) {
        console.log("You've made it!");
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }
}

muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")