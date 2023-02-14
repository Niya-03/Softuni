function guineaPig(input) {
    let foodInGrams = Number(input[0]) * 1000;
    let hayInGrams = Number(input[1]) * 1000;
    let coverInGrams = Number(input[2]) * 1000;
    let weight = Number(input[3]) * 1000;

    for (let i = 1; i <= 30; i++) {
        foodInGrams -= 300;

        if (i % 2 === 0) {
            hayInGrams = hayInGrams - (foodInGrams * 0.05);
        }

        if (i % 3 === 0) {
            coverInGrams = coverInGrams - weight * (1 / 3);
        }

        if (foodInGrams < 0 || hayInGrams < 0 || coverInGrams < 0) {
            console.log("Merry must go to the pet store!");
            break;
        }
    }

    if (foodInGrams > 0 && hayInGrams > 0 && coverInGrams > 0) {
        console.log(`Everything is fine! Puppy is happy! Food: ${(foodInGrams / 1000).toFixed(2)}, Hay: ${(hayInGrams / 1000).toFixed(2)}, Cover: ${(coverInGrams / 1000).toFixed(2)}.`);
    }
}

guineaPig((["1",

    "1.5",

    "3",

    "1.5"

]))