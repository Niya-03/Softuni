function dvor(input){
    let meters = Number(input[0])
    let priceWithoutDiscount = Number(meters*7.61)
    let discount = Number(0.18*priceWithoutDiscount)
    let total = Number(priceWithoutDiscount - discount)

    let finalPrice = "The final price is: " + total + " lv."
    let discountMes = "The discount is: " + discount + " lv."

    console.log(finalPrice)
    console.log(discountMes)
}

dvor(["550"])