function movie(input){
    let budget = Number(input[0])
    let statistCount = Number(input[1])
    let outfitPrice = Number(input[2])

    let decor = budget * 0.10
    let outfitTotal = statistCount * outfitPrice

    if(statistCount > 150){
        outfitTotal = outfitTotal * 0.90
    }

    let sum = decor + outfitTotal

    if(sum <= budget){
        console.log("Action!")
        console.log(`Wingard starts filming with ${(budget - sum).toFixed(2)} leva left.`)
    } else{
        console.log("Not enough money!")
        console.log(`Wingard needs ${(sum - budget).toFixed(2)} leva more.`)
    }
}

//movie(["9587.88","222","55.68"])