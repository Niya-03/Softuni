function autoCompany(arr) {
    let brandObj = {};

    for (let car of arr) {
        let [brand, model, producedCars] = car.split(' | ');
        producedCars = Number(producedCars);
        if (brandObj.hasOwnProperty(brand)) {
            let modelNotThere = true;

            for (let curmodel of brandObj[brand]) {
                if (curmodel.model == model) {
                    modelNotThere = false;
                    curmodel.producedCars += producedCars;
                }
            }

            if (modelNotThere) {
                brandObj[brand].push({ model, producedCars });
            }
        } else {
            brandObj[brand] = [{ model, producedCars }];
        }
    }

    for (const key in brandObj) {
        console.log(key);

        for (const curmodel of brandObj[key]) {
            console.log(`###${curmodel.model} -> ${curmodel.producedCars}`);
        }
    }
}

