function imitationGame(input) {
    let message = input.shift();
    if(input.length < 1){
        return `The decrypted message is: ${message}`;
    }

    while (input[0] !== "Decode") {
        let tokens = input.shift().split("|");
        let command = tokens[0];
        let data1 = tokens[1];
        let data2 = tokens[2];

        if (command == "Move") {
            let numOfLetters = Number(data1);

            if(numOfLetters > message.length || numOfLetters <= 0){
                continue;
            }

            message = message.split("");
            let toBeMoved = message.splice(0, numOfLetters).join("");
            message = message.join("");
            message+=toBeMoved;

        } else if (command == "Insert") {
            let insertIndex = Number(data1);
            if(insertIndex < 0 || insertIndex > message.length){
                continue;
            }
            message = message.split("");
            message.splice(insertIndex, 0, data2);
            message = message.join("");

        } else if (command == "ChangeAll") {
            if(message.includes(data1)){
                message = message.replace(new RegExp(data1, "g"), data2);
            }
        }
    }

    console.log(`The decrypted message is: ${message}`);
}

imitationGame([
    'owyouh',
    
    
  ]
  
);