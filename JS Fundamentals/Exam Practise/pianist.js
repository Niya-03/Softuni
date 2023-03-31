function pianist(input) {
    let numOfPieces = Number(input.shift());
    let piecesObj = {};

    for (let i = 0; i < numOfPieces; i++) {
        let tokens = input.shift().split("|");
        let piece = tokens[0];
        let composer = tokens[1];
        let key = tokens[2];

        piecesObj[piece] = {
            composer,
            key,
        }
    }

    while (input[0] !== "Stop") {
        let tokens = input.shift().split("|");
        let command = tokens[0];
        let name = tokens[1];
        let music = piecesObj[name];
        let data1 = tokens[2];
        let data2 = tokens[3];

        if (command == "Add") {
            if (piecesObj.hasOwnProperty(name)) {
                console.log(`${name} is already in the collection!`);
            } else {
                piecesObj[name] = {
                    "composer": data1,
                    "key": data2,
                }

                console.log(`${name} by ${data1} in ${data2} added to the collection!`);
            }
        } else if (command == "Remove") {
            if (piecesObj.hasOwnProperty(name)) {
                delete piecesObj[name];
                console.log(`Successfully removed ${name}!`);
            } else {
                console.log(`Invalid operation! ${name} does not exist in the collection.`);
            }
        } else if (command == "ChangeKey") {
            if (piecesObj.hasOwnProperty(name)) {
                music.key = data1;
                console.log(`Changed the key of ${name} to ${data1}!`);
            } else {
                console.log(`Invalid operation! ${name} does not exist in the collection.`);
            }
        }
    }

    for (let song in piecesObj) {
        console.log(`${song} -> Composer: ${piecesObj[song].composer}, Key: ${piecesObj[song].key}`);
    }

}

pianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]
);