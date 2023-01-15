function basketball(input){
    let yearTax = Number(input[0])

    let shoesPrice = yearTax - yearTax*0.40
    let clothes = shoesPrice - shoesPrice*0.20
    let ball = 1/4 * clothes
    let accessory = 1/5 * ball

    let total = shoesPrice + clothes + ball + accessory
    console.log(total+yearTax)
}

basketball([365])