function serializeAString(input) {
    let tokens = input.shift().split("");
    let charSet = {};

    for (let i = 0; i < tokens.length; i++) {
        let current = tokens[i];

        if (!charSet.hasOwnProperty(current)) {
            charSet[current] = [i];
        } else {
            charSet[current].push(i);
        }
    }

    for (const key in charSet) {
        console.log(`${key}:${charSet[key].join("/")}`);
    }
}

serializeAString(["avjavamsdmcalsdm"])