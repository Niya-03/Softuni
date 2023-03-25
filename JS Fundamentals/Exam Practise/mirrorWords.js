function mirrorWords(input) {
    let string = input.shift();
    let pattern = /([@#])(?<word>[A-Za-z]{3,})\1{2}([A-Za-z]{3,})\1/g;
    let mirrorsObj = {};
    let pairsCount = 0;
    let pairsArr = [];

    let matches = string.match(pattern);

    if (matches == null) {
        console.log(`No word pairs found!`);
        console.log(`No mirror words!`);
        return;
    }

    for (let match of matches) {
        let words = "";
        if (match.includes("#")) {
            words = match.split("##");
        } else {
            words = match.split("@@");
        }

        let word1 = words[0].substring(1,);
        let word2 = words[1].substring(0, words[1].length - 1);

        let mirror = words[1].split("").reverse().join("");

        if (words[0] == mirror) {
            mirrorsObj[word1] = word2;
        }
    }

    for (let key in mirrorsObj) {
        pairsCount++;
        pairsArr.push(`${key} <=> ${mirrorsObj[key]}`);
    }

    if (pairsCount == 0) {
        console.log(`${matches.length} word pairs found!`);
        console.log(`No mirror words!`);
    } else {
        console.log(`${matches.length} word pairs found!`);
        console.log(`The mirror words are:`);
        console.log(pairsArr.join(", "));
    }
}

mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#'])