function city(cityInfo) {
    let keys = Object.keys(cityInfo);
    for (let key of keys) {
        console.log(`${key} -> ${cityInfo[key]}`);
    }
}

city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
)