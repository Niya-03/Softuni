function worldTour(input) {
    let string = input.shift();


    while (input[0] !== "Travel") {
        let tokens = input.shift().split(":");
        let command = tokens[0];
        let data1 = tokens[1];
        let data2 = tokens[2];

        if (command == "Add Stop") {
            let addIndex = Number(data1);
            let stringAdd = data2;

            if (addIndex >= 0 && addIndex < string.length) {
                string = string.split("");
                string.splice(addIndex, 0, stringAdd);
                string = string.join("");
            }
            //potential mistake
            console.log(string);
        } else if (command == "Remove Stop") {
            let startIndex = Number(data1);
            let endIndex = Number(data2);

            if (startIndex >= 0 && startIndex < string.length && endIndex > 0 && endIndex < string.length) {
                string = string.split("");
                string.splice(startIndex, (endIndex - startIndex) + 1);
                string = string.join("");
            }
            console.log(string);
        } else if (command == "Switch") {
            let oldString = data1;
            let newString = data2;

            if (string.includes(oldString)) {
                string = string.replace(new RegExp(oldString, "g"), newString);
            }

            console.log(string);
        }
    }

    console.log(`Ready for world tour! Planned stops: ${string}`);
}

worldTour((["Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    "Remove Stop:4:8",
    "Switch:Albania: Azərbaycan",
    "Travel"])

)