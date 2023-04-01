function imitationGame(input) {
    let message = input.shift();

    for (let i = 0; i < input.length; i++) {
        if (input[i] == "Decode") {
            break;
        } else {
            let tokens = input[i].split("|");
            let command = tokens[0];
            let i1 = tokens[1];
            let i2 = tokens[2];

            if (command == "Move") {
                let number = Number(i1);
                message = message.split("")
                let toMove = message.splice(0, number, "");
                message = message.join("");
                message += toMove.join("");

            } else if (command == "Insert") {
                let insertIndex = Number(i1);

                if (insertIndex <= message.length) {
                    let substr = i2.split("");
                    message = message.split("");

                    for (let i = 0; i < substr.length; i++) {
                        message.splice(insertIndex + i, 0, substr[i]);
                    }

                    message = message.join("");
                }

            } else if (command == "ChangeAll") {

                while(message.includes(i1)){
                    message = message.replace(i1, i2);
                }
                // message = message.replace(new RegExp(i1, "g"), i2);
            }
        }
    }

    console.log(`The decrypted message is: ${message}`)
}

imitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode',
]

);