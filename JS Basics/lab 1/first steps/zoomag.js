function zoomag(input){
    let dogFoodCount = Number(input[0])
    let dogFoodPrice = Number(dogFoodCount*2.5)

    let catFoodCount = Number(input[1])
    let catFoodPrice = Number(catFoodCount*4)

    let total = dogFoodPrice + catFoodPrice
    let mes = total + " lv."
    console.log(mes)
}

zoomag(["2", "3"])