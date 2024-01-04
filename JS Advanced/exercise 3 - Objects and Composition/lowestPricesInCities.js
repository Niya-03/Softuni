function lowestPricesInCities(arr) {
    let result = [];
    let flag = false;

    while (arr.length > 0) {
        let products = {};
        let [town, product, price] = arr.shift().split(" | ");

        for (pr of result) {
            if (pr.product == product) {
                if (pr.price > price) {
                    pr.price = price;
                    pr.town = town;
                }
                flag = true;
                break;
            }
        }

        if (flag) {
            flag = false;
            continue;
        }

        products.town = town;
        products.product = product;
        products.price = Number(price);

        result.push(products)
    }

    for (res of result) {
        console.log(`${res.product} -> ${res.price} (${res.town})`);
    }

}

lowestPricesInCities(['Sample Town | Sample Product | 1000',

    'Sample Town | Orange | 2',

    'Sample Town | Peach | 1',

    'Sofia | Orange | 3',

    'Sofia | Peach | 2',

    'New York | Sample Product | 1000.1',

    'New York | Burger | 10'])