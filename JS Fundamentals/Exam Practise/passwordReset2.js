function passReset(input) {
    let password = input.shift();
    let newPass = [];

    while (input[0] != "Done") {
        let tokens = input.shift().split(" ");
        let command = tokens[0];
        let i1 = tokens[1];
        let i2 = tokens[2];

        if (command == "TakeOdd") {
            password = password.split("");
            password = password.filter((a, index) => index % 2 !== 0);
            newPass = password.join("");
            console.log(newPass);

        } else if (command == "Cut") {
            let cutIndex = Number(i1);
            let cutLength = Number(i2);
            let safe = newPass;
            // if(typeof newPass === "Array"){
            //      safe = newPass.join("");
            // }else{
            //      safe = newPass;
            // }
            
            let left = safe.slice(0, cutIndex);
            let right = safe.slice(cutLength + cutIndex, );
            safe = left + right;
            newPass = safe;


            console.log(newPass);
        } else if (command == "Substitute") {
            if (newPass.includes(i1)) {
                while (newPass.includes(i1)) {
                    newPass = newPass.replace(i1, i2);
                }
                console.log(newPass);
            } else {
                console.log(`Nothing to replace!`);
            }
        }
    }

    console.log(`Your password is: ${newPass}`);
}

passReset((["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"])
);