function fruits(fname, weight, pricekg){
    let pricegr = pricekg/1000;
    let money = pricegr * weight;

    console.log(`I need $${money.toFixed(2)} to buy ${(weight/1000).toFixed(2)} kilograms ${fname}.`);
}

fruits('orange', 2500, 1.80);