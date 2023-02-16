function computerStore(prices) {
    let typeOfCustomer = prices.pop();
    let taxes = 0;
    let totalWihtoutTaxes = 0;

    for (let i = 0; i < prices.length; i++) {
        let currentPrice = Number(prices[i]);

        if (currentPrice < 0) {
            console.log("Invalid price!");
            continue;
        } else {
            totalWihtoutTaxes += currentPrice;
            taxes += currentPrice * 0.20;
        }
    }

    let totalWithTaxes = totalWihtoutTaxes + taxes;

    if (typeOfCustomer === "special") {
        totalWithTaxes = totalWithTaxes * 0.90;
    }

    if (totalWithTaxes === 0) {
        console.log("Invalid order!")
    } else {
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${totalWihtoutTaxes.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log("-----------");
        console.log(`Total price: ${totalWithTaxes.toFixed(2)}$`)
    }
}

computerStore(([

    'regular'
    
    ]))