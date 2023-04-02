function wildZoo(input) {
    let animalsObj = {};
    let areaObj = {};

    while (input[0] != "EndDay") {
        let tokens = input.shift().split(": ");
        let command = tokens.shift();
        let info = tokens[0].split("-");
        let name = info[0];
        let p1 = Number(info[1]);
        let p2 = info[2];

        if (command == "Add") {
            if (animalsObj.hasOwnProperty(name)) {
                animalsObj[name].food += p1;
            } else {
                animalsObj[name] = {
                    "food": p1,
                    "area": p2,
                };

                if (areaObj.hasOwnProperty(p2)) {
                    areaObj[p2] += 1;
                } else {
                    areaObj[p2] = 1;
                }
            }
        } else if (command == "Feed") {
            if (animalsObj.hasOwnProperty(name)) {
                animalsObj[name].food -= p1;

                if (animalsObj[name].food <= 0) {
                    console.log(`${name} was successfully fed`);
                    areaObj[animalsObj[name].area] -= 1;

                    if (areaObj[animalsObj[name].area] == 0) {
                        delete areaObj[animalsObj[name].area]
                    }

                    delete animalsObj[name];
                }
            }
        }
    }

    console.log("Animals:");

    for (let animal in animalsObj) {
        console.log(`${animal} -> ${animalsObj[animal].food}g`);
    }

    console.log(`Areas with hungry animals:`);

    for (let area in areaObj) {
        console.log(`${area}: ${areaObj[area]}`);
    }
}

wildZoo((["Add: Bonie-3490-RiverArea",
    "Add: Sam-5430-DeepWoodsArea",
    "Add: Bonie-200-RiverArea",
    "Add: Maya-4560-ByTheCreek",
    "Feed: Maya-2390",
    "Feed: Bonie-3500",
    "Feed: Johny-3400",
    "Feed: Sam-5500",
    "EndDay"])
)