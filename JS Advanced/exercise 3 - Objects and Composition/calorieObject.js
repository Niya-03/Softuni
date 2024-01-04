function calorieObject(arr) {
    let obj = {};

    while (arr.length > 0) {
        let food = arr.shift();
        let cals = arr.shift();

        obj[food] = Number(cals);
    }

    console.log(obj);
}

calorieObject(['Yoghurt', '48', 'Rise', '138',

    'Apple', '52'])