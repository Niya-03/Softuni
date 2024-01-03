function townPopulation(arr) {
    let town = {};

    while (arr.length > 0) {
        let tokens = arr.shift().split(" <-> ");
        let name = tokens[0];
        let population = Number(tokens[1]);

        if (town.hasOwnProperty(name)) {
            town[name] += population;
        } else {
            town[name] = population;
        }

    }

    for (key in town) {
        console.log(`${key} : ${town[key]}`);
    }

}

townPopulation(['Istanbul <-> 100000',

    'Honk Kong <-> 2100004',

    'Jerusalem <-> 2352344',

    'Mexico City <-> 23401925',

    'Istanbul <-> 1000'])