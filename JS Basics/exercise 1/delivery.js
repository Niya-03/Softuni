function delivery(input){
    let numberOfChickenMenus = Number(input[0])
    let numberOfFishMenus = Number(input[1])
    let numberOfVegMenus = Number(input[2])
    let delivery = 2.50

    let priceOfChicken = numberOfChickenMenus*10.35
    let priceOfFish = numberOfFishMenus*12.40
    let priceOfVeg = numberOfVegMenus*8.15
    let sumOfMenus = priceOfChicken + priceOfFish + priceOfVeg
    let priceOfDessert = sumOfMenus*0.20

    let total = sumOfMenus + priceOfDessert + delivery

    console.log(total)
}

//delivery([2, 4 ,3])