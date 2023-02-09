function houseParty(arr) {
    let goingList = [];

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(" ");

        if (command[2] === "going!") {
            if (goingList.includes(command[0])) {
                console.log(`${command[0]} is already in the list!`);
            } else {
                goingList.push(command[0]);
            }

        } else {
            if (goingList.includes(command[0])) {
                goingList = goingList.filter(x => x !== command[0]);
            } else {
                console.log(`${command[0]} is not in the list!`);
            }
        }
    }

    console.log(goingList.join("\n"));
}

houseParty(['Tom is going!',

    'Annie is going!',

    'Tom is going!',

    'Garry is going!',

    'Jerry is going!'])