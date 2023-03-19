function race(input) {
    let names = input.shift().split(", ");

    let racers = {};
    let patternName = /[A-Za-z]/g;
    let patternNums = /\d/g;

    for (let name of names) {
        racers[name] = 0;
    }

    for (let line of input) {
        if (line === "end of race") {
            break;
        }

        let distanceSum = 0;

        let name = line.match(patternName).join("");
        let distances = line.match(patternNums);

        for (let num of distances) {
            distanceSum += Number(num);
        }

        if (racers.hasOwnProperty(name)) {
            racers[name] = racers[name] + distanceSum;
        }
    }

    let racersArr = Object.entries(racers);

    let sorted = racersArr.sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${sorted[0][0]}`);
    console.log(`2nd place: ${sorted[1][0]}`);
    console.log(`3rd place: ${sorted[2][0]}`);
}

race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']
)