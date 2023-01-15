function toyShop(input){
    let holiday = Number(input[0])
    let puzzlesCount = Number(input[1])
    let dollsCount = Number(input[2])
    let bearsCount = Number(input[3])
    let minionsCount = Number(input[4])
    let trucksCount = Number(input[5])

    let puzzlesPrice = puzzlesCount* 2.6
    let dollsPrice = dollsCount* 3
    let bearsPrice = bearsCount* 4.1
    let minionsPrice = minionsCount* 8.2
    let trucksPrice = trucksCount* 2

    let sumToys = puzzlesPrice + dollsPrice + 
    bearsPrice + minionsPrice + trucksPrice

    let toysCount = puzzlesCount + dollsCount + 
    bearsCount + minionsCount + trucksCount

    if(toysCount >= 50){
        sumToys = sumToys*0.75
    }

    total = sumToys * 0.90
    
    if(total >= holiday){
        console.log(`Yes! ${(total - holiday).toFixed(2)} lv left.`)
    } else{
        console.log(`Not enough money! ${(holiday - total).toFixed(2)} lv needed.`)
    }


}

toyShop(["320",
"8",
"2",
"5",
"5",
"1"])