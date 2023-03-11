function pascalCase(str) {
    let chars = str.split("");
    let result = [];

    for (let i = 0; i < chars.length; i += 0) {
        let char = chars[i];
        let newWord = "";

        if (char === char.toUpperCase()) {
            newWord = newWord + char;
            i++;
        }

        while (i < chars.length && chars[i] !== chars[i].toUpperCase()) {
            newWord = newWord + chars[i];
            i++;
        }

        result.push(newWord);
    }

    console.log(result.join(", "));
}

pascalCase('Can')