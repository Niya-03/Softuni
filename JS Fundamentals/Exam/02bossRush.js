function bossRush(input) {
    let num = Number(input.shift());
    let pattern = /[|](?<name>[A-Z]{4,})[|][:][#](?<title>[A-Za-z]+ [A-Za-z]+)[#]/;

    for (let i = 0; i < num; i++) {
        let current = input[i];

        if (pattern.test(current)) {
            let match = pattern.exec(current);
            let strength = match.groups.name.length;
            let armor = match.groups.title.length;
            console.log(`${match.groups.name}, The ${match.groups.title}`);
            console.log(`>> Strength: ${strength}`);
            console.log(`>> Armor: ${armor}`);
        } else {
            console.log("Access denied!");
        }
    }
}

bossRush((['3',
    '|PETER|:#Lead architect#',
    '|GEORGE|:#High Overseer#',
    '|ALEX|:#Assistant Game Developer#'])
)