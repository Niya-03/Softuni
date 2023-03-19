function softuniBarIncome(input) {
    let pattern = /%(?<name>[A-Z][a-z]+)%[\D+]*<(?<product>\w+)>[\D+]*\|[\D+]*(?<count>\d+)[\D+]*\|[\D+]*(?<price>\d+[.\d+]*)\$/;
    let sum = 0;

    for (let line of input) {
        if (line === "end of shift") {
            break;
        }

        if (pattern.test(line)) {
            let order = pattern.exec(line);
            let name = order.groups.name;
            let product = order.groups.product;
            let total = Number(order.groups.count) * Number(order.groups.price);
            sum += total;

            console.log(`${name}: ${product} - ${total.toFixed(2)}`);
        }
    }

    console.log(`Total income: ${sum.toFixed(2)}`);
}

softuniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift']

)