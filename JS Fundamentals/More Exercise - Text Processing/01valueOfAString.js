function valueOfAString(input) {
    let string = input.shift();
    let command = input.shift();

    let sum = 0;

    let letters = string.split("");

    for (let letter of letters) {
        let isUpperCase = false;
        let valid = false;
        let code = letter.charCodeAt(0);

        if (code >= 65 && code <= 90) {
            valid = true;
        } else if (code >= 97 && code <= 122) {
            valid = true;
        }

        if (!valid) {
            continue;
        }

        if (letter == letter.toUpperCase()) {
            isUpperCase = true;
        }

        if (command === "UPPERCASE" && isUpperCase == true) {
            sum += letter.charCodeAt(0);
        } else if (command === "LOWERCASE" && isUpperCase == false) {
            sum += letter.charCodeAt(0);
        }
    }

    console.log(`The total sum is: ${sum}`);
}

valueOfAString(['AC/DC',
    'UPPERCASE']

)