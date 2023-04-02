function stringGame(input) {
    let string = input.shift();

    while (input[0] != "Done") {
        let tokens = input.shift().split(" ");
        let command = tokens[0];
        let p1 = tokens[1];
        let p2 = tokens[2];

        if (command == "Change") {
            string = change(p1, p2);
        } else if (command == "Includes") {
            includes(p1);
        } else if (command == "End") {
            end(p1);
        } else if (command == "Uppercase") {
            string = uppercase();
        } else if (command == "FindIndex") {
            findIndex(p1);
        } else if (command == "Cut") {
            string = cut(p1, p2);
        }
    }

    function change(char, replacement) {
        let newStr = string;

        while (newStr.includes(char)) {
            newStr = newStr.replace(char, replacement);
        }

        console.log(newStr);

        return newStr;
    }

    function includes(substring) {
        if (string.includes(substring)) {
            console.log("True");
        } else {
            console.log("False");
        }
    }

    function end(substring) {
        let sliced = string.slice(-substring.length,);

        if (sliced == substring) {
            console.log("True");
        } else {
            console.log("False");
        }
    }

    function uppercase() {
        let newStr = string.toUpperCase();
        console.log(newStr);
        return newStr;
    }

    function findIndex(char) {
        let index = string.indexOf(char);
        console.log(index);
    }

    function cut(startIndex, count) {
        startIndex = Number(startIndex);
        count = Number(count);

        let newStr = string;

        let sliced = newStr.slice(startIndex, startIndex + count);

        newStr = sliced;
        console.log(newStr);
        return newStr;
    }
}

stringGame((["*S0ftUni is the B3St Plac3**",
    "Change 2 o",
    "Includes best",
    "End is",
    "Uppercase",
    "FindIndex P",
    "Cut 3 7",
    "Done"])

)