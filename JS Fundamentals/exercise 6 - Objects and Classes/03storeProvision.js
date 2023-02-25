function storeProvision(currentStock, ordered) {
    let productsObj = {};

    for (let i = 0; i < currentStock.length; i += 2) {
        let product = currentStock[i];
        productsObj[product] = Number(currentStock[i + 1]);
    }

    for (let j = 0; j < ordered.length; j += 2) {
        let product = ordered[j];

        if (!productsObj.hasOwnProperty(product)) {
            productsObj[product] = 0;
        }

        productsObj[product] += Number(ordered[j + 1])
    }

    for (const product in productsObj) {
        console.log(`${product} -> ${productsObj[product]}`);
    }
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)