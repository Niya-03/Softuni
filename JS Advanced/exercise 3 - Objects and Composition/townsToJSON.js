function townsToJSON(arr) {
    let result = [];
    arr.shift();

    while (arr.length > 0) {
        let obj = {};
        let [name, ltd, lgt] = arr.shift().split(" | ");
        obj["Town"] = name.substr(2,);
        obj["Latitude"] = Number(Number(ltd).toFixed(2));
        obj["Longitude"] = Number(Number(lgt.substr(0, lgt.length - 2)).toFixed(2));

        result.push(obj);
    }

    let json = JSON.stringify(result);
    console.log(json);
}

townsToJSON(['| Town | Latitude | Longitude |',

'| Veliko Turnovo | 43.0757 | 25.61 |',

'| Monatevideo | 34.50 | 56.11 |'])