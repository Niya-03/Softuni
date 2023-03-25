function secretChat(input) {
    let message = input.shift();

    while (input[0] != "Reveal") {
        let tokens = input.shift().split(":|:");
        let command = tokens[0];
        let token1 = tokens[1];
        let token2 = tokens[2];

        if (command == "InsertSpace") {
            let insertIndex = Number(token1);
            message = message.split("");
            message.splice(insertIndex, 0, " ");
            message = message.join("");
            console.log(message);

        } else if (command == "Reverse") {

            if (message.includes(token1)) {
                message = message.replace(token1, "");
                let newSubstr = token1.split("").reverse().join("");
                message += newSubstr;
                console.log(message);
            } else {
                console.log("error");
            }
            
        } else if (command == "ChangeAll") {
            if (message.includes(token1)) {
                message = message.replace(new RegExp(token1, "g"), token2);
            }
            console.log(message);
        }
    }

    console.log(`You have a new text message: ${message}`);
}

secretChat([
    'heVVodar!gniV',
   
    'Reveal'
]


)