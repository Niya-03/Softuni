function passwordReset(input) {
    let string = input.shift();
    let rawPass = "";

    let index = 0;
    command = input[index];

    while (command != "Done") {

        command = command.split(" ");
        let commandName = command[0];

        switch (commandName) {
            case "TakeOdd": 

            rawPass = string.split("");
            rawPass = rawPass.filter((symbol, index) => {return index % 2 !== 0});
            rawPass = rawPass.join("");
            console.log(rawPass);

                break;

            case "Cut":

                let cutIndex = Number(command[1]);
                let length = Number(command[2]);
                let substr = rawPass.substr(cutIndex, length);

                rawPass = rawPass.replace(substr,"");
                console.log(rawPass);

                break;

            case "Substitute":

                let substring = command[1];
                let substitute = command[2];

                if (rawPass.includes(substring)) {         
                    rawPass = rawPass.replace(new RegExp(substring, "g"), substitute);
                    console.log(rawPass);
                } else {
                    console.log("Nothing to replace!");
                }

            break;
        }

        index++;
        command = input[index];
    }

    if(rawPass.length === 0 ){
        console.log(`Your password is: ${string}`);
    }else{
        console.log(`Your password is: ${rawPass}`);
    }
    
}

passwordReset((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 

"Done"])



)