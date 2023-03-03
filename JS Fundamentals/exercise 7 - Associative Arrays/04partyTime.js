function partyTime(input) {
    let vip = new Set();
    let regular = new Set();

    let index = 0;
    let command = input[index];

    while (command !== "PARTY") {
        let currentGuest = input.shift();

        let vipNum = currentGuest.split("").slice(0, 1);

        if (Number.isNaN(Number(currentGuest[0]))) {
            //vip[currentGuest] = 0;
            regular.add(currentGuest);
        } else {
            // regular[currentGuest] = 0;
            
            vip.add(currentGuest);
        }
        command = input[index];
    }

    input.shift();

    for (let cameGuest of input) {
            vip.delete(cameGuest);
            regular.delete(cameGuest);
    }

    let didntComeCounter = vip.size + regular.size;

    console.log(didntComeCounter);
    
    let vipKeys = Array.from(vip.keys());
    let regularKeys = Array.from(regular.keys());

    for (const guest of vipKeys) {
        console.log(guest)
    }

    for (const guest of regularKeys) {
        console.log(guest)
    }

}

partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]
)

// console.log("---");

// partyTime(['m8rfQBvl',
//     'fc1oZCE0',
//     'UgffRkOn',
//     '7ugX7bm0',
//     '9CQBGUeJ',
//     '2FQZT3uC',
//     'dziNz78I',
//     'mdSGyQCJ',
//     'LjcVpmDL',
//     'fPXNHpm1',
//     'HTTbwRmM',
//     'B5yTkMQi',
//     '8N0FThqG',
//     'xys2FYzn',
//     'MDzcM9ZK',
//     'PARTY',
//     '2FQZT3uC',
//     'dziNz78I',
//     'mdSGyQCJ',
//     'LjcVpmDL',
//     'fPXNHpm1',
//     'HTTbwRmM',
//     'B5yTkMQi',
//     '8N0FThqG',
//     'm8rfQBvl',
//     'fc1oZCE0',
//     'UgffRkOn',
//     '7ugX7bm0',
//     '9CQBGUeJ'
// ]
// )