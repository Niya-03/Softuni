function furniture(input) {
    let pattern = /(?<name>[A-Z][a-zA-Z]+)<<(?<price>[0-9.]+)!(?<quantity>\d+)/;

    let total = 0;

    console.log("Bought furniture:");

    for (let line of input) {
        if (line === "Purchase") {
            break;
        }

        if (pattern.test(line)) {
            let product = pattern.exec(line);
            let price = Number(product.groups.price) * Number(product.groups.quantity);
            console.log(product.groups.name);
            total += price;
        }
    }

    console.log(`Total money spend: ${total.toFixed(2)}`);
}

furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']
)