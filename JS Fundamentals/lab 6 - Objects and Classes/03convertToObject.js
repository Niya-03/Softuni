function convertToObj(objAsString) {
    let obj = JSON.parse(objAsString);

    for (let key of Object.keys(obj)) {
        console.log(`${key}: ${obj[key]}`);
    }
}

convertToObj('{"name": "George", "age": 40, "town": "Sofia"}')