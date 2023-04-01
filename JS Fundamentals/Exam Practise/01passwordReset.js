function passwordReset(input) {
    let string = input.shift();
    let rawPass = "";

    while (input[0] != "Done") {

        command = input.shift().split(" ");
        let commandName = command[0];

        if (commandName == "TakeOdd") {
            rawPass = string.split("");
            rawPass = rawPass.filter((symbol, index) => { return index % 2 !== 0 });
            rawPass = rawPass.join("");
            console.log(rawPass);
        } else if (commandName == "Cut") {
            let cutIndex = Number(command[1]);
            let length = Number(command[2]);

            rawPass = rawPass.split("");
            rawPass.splice(cutIndex, length);
            rawPass = rawPass.join("");

            console.log(rawPass);
        } else if (commandName == "Substitute") {
            let substring = command[1];
            let substitute = command[2];

            if (rawPass.includes(substring)) {

                while (rawPass.includes(substring)) {
                    rawPass = rawPass.replace(substring, substitute)
                }
                console.log(rawPass);
            } else {
                console.log("Nothing to replace!");
            }
        }
    }

        console.log(`Your password is: ${rawPass}`);

}

passwordReset((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"])




)