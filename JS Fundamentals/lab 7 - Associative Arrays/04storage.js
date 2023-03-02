function storage(input) {
    let storageMap = new Map;

    for (let line of input) {
        let [product, quantity] = line.split(" ");
        quantity = Number(quantity);

        if (storageMap.has(product)) {
            let existing = storageMap.get(product);
            storageMap.set(product, quantity + existing);
        } else {
            storageMap.set(product, quantity);
        }
    }

    for (let [product, quantity] of storageMap) {
        console.log(`${product} -> ${quantity}`);
    }
}

storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
)