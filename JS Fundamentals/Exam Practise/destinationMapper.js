function destinationMapper(string) {
    let pattern = /([=/])[A-Z][A-Za-z]{2,}\1/g;
    let valid = string.match(pattern);
    let travelPoints = 0;

    if (valid !== null) {
        for (let i = 0; i < valid.length; i++) {
            valid[i] = valid[i].slice(1, valid[i].length - 1);
            travelPoints += valid[i].length;
        }

        console.log(`Destinations: ${valid.join(", ")}`);
        console.log(`Travel Points: ${travelPoints}`);
    } else {
        console.log(`Destinations:`);
        console.log(`Travel Points: ${travelPoints}`);
    }
}

destinationMapper("ThisIs some InvalidInput")