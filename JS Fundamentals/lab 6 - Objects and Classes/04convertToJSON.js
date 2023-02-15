function objToJSON(name, lastName, hairColor) {
    let obj = {
        name: name,
        lastName: lastName,
        hairColor: hairColor
    };

    let result = JSON.stringify(obj);
    console.log(result);
}

objToJSON('George', 'Jones', 'Brown')