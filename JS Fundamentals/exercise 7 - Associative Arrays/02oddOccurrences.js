function oddOccurrences(input) {
    let obj = {};
    let odds = [];
    let words = input.split(" ");
    words = words.map(x => x.toLowerCase());

    for (let word of words) {
        if (obj.hasOwnProperty(word)) {
            obj[word] = obj[word] + 1;
        } else {
            obj[word] = 1;
        }
    }

    for (let key in obj) {
        if (obj[key] % 2 !== 0) {
            odds.push(key);
        }
    }

    console.log(odds.join(" "));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
console.log("---");
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food')